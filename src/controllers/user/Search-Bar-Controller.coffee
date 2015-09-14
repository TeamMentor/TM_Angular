angular.module('TM_App')
       .controller 'Search_Bar_Controller', ($rootScope, $scope, $state, $location, $timeout, query_Service, TM_API)->

          #console.log 'in Articles_Controller ' + new Date().getMilliseconds()

          using $scope, ->
            @.query_Id            = null
            @.selected_Technology = null
            @.previous_Filter_Id  = null
            @.technologies        = {}
            @.technologies_By_Id  = {}
            @.text                = ''
            @.ignore_Events       = false
            @.words               = []
            @.searchPlaceholder   = "Search All of TEAM Mentor"
            @.index_States        = ['index', 'index_query_id', 'index_query_id_filters']

          $scope.$on 'clear_search', ()->
            $scope.text = ''

          $scope.$on 'clear_filter', (event, filter_Id)->
            if filter_Id
              if $scope.technologies_By_Id[filter_Id]
                if $scope.ignore_Events
                  return
                $scope.selected_Technology = $scope.technologies_By_Id['All']

          $scope.$on 'apply_filter', (event, filter_Id, filter_Title, metadata_Title)->
            if metadata_Title is 'Technology'
              if filter_Title isnt $scope.selected_Technology?.title
                $scope.selected_Technology =  $scope.technologies_By_Id[filter_Id]
                $scope.previous_Filter_Id = filter_Id

          $scope.$on 'apply_filters', (event, filters)->
            if not $scope.filters_By_Id
              console.log '$scope.filters_By_Id NOT READY'
              return
            if filters
              for filter_Id in filters.split(',')
                filter = $scope.filters_By_Id[filter_Id]
                if filter
                  $rootScope.$broadcast 'apply_filter', filter.id, filter.title, filter.metadata_Title, false


#          $scope.$on 'view_model_data', (event, data)->
#            $scope.query_Id = data?.id
#            if not $scope.selected_Technology
#              $scope.technologies       = [{ title: 'All Technologies', id: query_Service.index_Query }]
#              $scope.technologies_By_Id = { 'All' : $scope.technologies[0]}
#              if data?.filters
#                for key,value of data.filters
#                  if key is 'Technology' and value.size
#                    for filter in value
#                      $scope.technologies.push(filter)
#                      $scope.technologies_By_Id[filter.id] = filter
#
#              $scope.selected_Technology = $scope.technologies[0]

          $scope.$on 'set_search', (event, text)->
            $scope.text = text
            $scope.submit()

          $scope.set_technologies_By_Id = ()->

            query_Service.index_Query_Filters (filters)->

              $scope.technologies       = [{ title: 'All Technologies', id: query_Service.index_Query }]
              $scope.technologies_By_Id = { 'All' : $scope.technologies[0]}
              $scope.filters_By_Id      = {}
              if filters
                for key,value of filters
                  for filter in value                                     # map filters_By_Id
                    filter.metadata_Title= key
                    $scope.filters_By_Id[filter.id] = filter
                  if key is 'Technology' and value.size                   # map technologies_By_Id and technologies
                    for filter in value
                      $scope.technologies.push(filter)
                      $scope.technologies_By_Id[filter.id] = filter

              $scope.selected_Technology = $scope.technologies[0]

          $scope.select_Technology = ()->
            $scope.searchPlaceholder = "Search All of TEAM Mentor"
            if $scope.selected_Technology
              $scope.ignore_Events = true                                     # prevent clear_filter from firing
              #$rootScope.$broadcast 'clear_filter', $scope.previous_Filter_Id

              if $scope.selected_Technology.title isnt 'All Technologies'
                #$rootScope.$broadcast 'apply_filter', $scope.selected_Technology.id, $scope.selected_Technology.title , 'Technology'
                $scope.searchPlaceholder = "Search " + $scope.selected_Technology.title
              #else
              #  $scope.submit()

              #$scope.previous_Filter_Id = $scope.selected_Technology.id
              $scope.ignore_Events = false

          $scope.submit = ()->


            #if $state.current?.name isnt 'index'
            if not @.index_States.contains($state.current?.name)
              $state.go('index')
              $scope.previous_Filter_Id = null

            #$rootScope.$broadcast 'clear_query', null

            if $scope.text is ''
              $scope.submit_Event $scope.selected_Technology.id, query_Service.index_Query
            else
              TM_API.query_from_text_search $scope.text, (query_Id)->
                $scope.submit_Event $scope.selected_Technology.id, query_Id

          $scope.submit_Event = (technology_Id, query_Id)->
            if technology_Id isnt $scope.previous_Filter_Id
              $rootScope.$broadcast 'clear_filters',query_Id
              if $scope.selected_Technology.title isnt 'All Technologies'
                $rootScope.$broadcast 'apply_filter', $scope.selected_Technology.id, $scope.selected_Technology.title , 'Technology', false

            $rootScope.$broadcast 'apply_query',query_Id

            $scope.previous_Filter_Id = technology_Id

          $scope.get_Words = (term)->
            $rootScope.$broadcast 'search_term', term

          $scope.set_technologies_By_Id()
