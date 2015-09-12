angular.module 'TM_App'
       .controller 'Index_Controller', ($scope, query_Service, $stateParams ,  $location,$state, $window, $rootScope , $timeout)->


          window._state = $state
          window._scope = $scope
          window._stateParams = $stateParams
          console.log 'in Index_Controller ' + new Date().getMilliseconds()

          using $scope, ->
            @.history       = {}
            @.view_Filters  = false
            @.column_Left   = 'col-3'
            @.column_Middle = 'col-9'
            @.column_Right  = 'col-0'



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
              query_Id    = $location?.search?().query
              filters     = $location?.search?().filters

              if search_Text
                $rootScope.$broadcast 'set_search', search_Text
              else if query_Id
                console.log 'in load_Query'
                $timeout ->
                  $rootScope.$broadcast 'apply_query', query_Id
                  query_Service.load_Query query_Id, filters
                  $rootScope.$broadcast 'apply_filter', filters
              else
                console.log '...... in reload_Data'
                $timeout ->
                  query_Service.reload_Data()

            $scope.update_Location_Url = (query_Id, filters)->
              url = 'index?'
              url += "query=#{query_Id}"   if query_Id
              url += "&filters=#{filters}"  if filters

              if url isnt 'index?query=query-6234f2d47eb7' # don't update url for the index query
                $timeout ->
                  window.history.replaceState('Object', 'Title', url)

            $rootScope.$on 'loading_query', (event, query_Id, filters, from, to)->
              $scope.update_Location_Url query_Id, filters

            $scope.load_Index_Data()