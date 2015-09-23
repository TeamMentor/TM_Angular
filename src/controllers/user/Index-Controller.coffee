angular.module 'TM_App'
       .controller 'Index_Controller', ($scope, query_Service, $stateParams ,  $location,$state, $window, $rootScope , $timeout)->


          window._state       = $state
          window._scope       = $scope
          window._stateParams = $stateParams
          window._location    = $location
          window._window      = $window
          window._rootScope   = $rootScope

          #console.log 'in Index_Controller ' + new Date().getMilliseconds()

          using $scope, ->
            @.history       = {}
            @.view_Filters  = false
            @.column_Left   = 'col-3'
            @.column_Middle = 'col-9'
            @.column_Right  = 'col-0'

            @.current_Query_Id = null
            @.current_Filters = null

            @.$on 'toggle_filters' , (event)=>
              $scope.view_Filters = not $scope.view_Filters
              if $scope.view_Filters
                @.column_Middle = 'col-6'
                @.column_Right  = 'col-3'
              else
                @.column_Middle = 'col-9'
                @.column_Right  = 'col-0'

          $scope.load_Index_Data = ()->
            search_Text = $location?.search?().text
            query_Id    = $stateParams.query_Id #$location?.search?().query
            filters     = $stateParams.filters  #$location?.search?().filters

            if search_Text
              $rootScope.$broadcast 'set_search', search_Text
            else if query_Id
              $timeout ->
                query_Service.load_Query query_Id, filters, null, null, ->
                  $rootScope.$broadcast 'apply_filters', filters
            else
              $timeout ->
                query_Service.reload_Data()

          $scope.resolve_Index_State = (query_Id, filters)->
            value = 'index'
            value+= '_query_id_filters' if     query_Id and     filters
            value+= '_query_id'         if     query_Id and not filters
            return value

            return 'index_query_id_filters' if     query_Id and     filters
            return 'index_query_id'         if     query_Id and not filters
            return 'index'

          $scope.update_Location_Url = (query_Id, filters)->

            if (not filters) and query_Id is 'query-6234f2d47eb7'  # don't update url for the index query
              return

            $state.go $scope.resolve_Index_State(query_Id,filters), { query_Id: query_Id , filters: filters},
                  notify:false          # prevent the events onStart and onSuccess from firing
                  reload:false          # prevent reload of the current state
                  #location:'replace'    # replace the last record when changing the params so you don't hit the back button and get old params
                  #inherit:true          # inherit the current params on the url
            $scope.current_Query_Id = query_Id
            $scope.current_Filters  = filters

          $scope.$on 'loading_query', (event, query_Id, filters, from, to)->
            if $scope.current_Query_Id isnt query_Id or $scope.current_Filters isnt filters # ensure we don't reload for equal values
              $scope.update_Location_Url query_Id, filters

          # deal with extra 'Index_Controller' load events caused by the used of $timeout and load from different states
          return if $window.location.href and not $window.location.href.contains('index')
          return if $stateParams.filters  and     $stateParams.query_Id and $location.url() isnt "/index/#{$stateParams.query_Id}/#{$stateParams.filters}"
          return if $stateParams.query_Id and not $stateParams.filters  and $location.url() isnt "/index/#{$stateParams.query_Id}"

          $scope.load_Index_Data()