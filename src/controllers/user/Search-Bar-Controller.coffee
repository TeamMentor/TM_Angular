angular.module('TM_App')
       .controller 'Search_Bar_Controller', ($rootScope, $scope, $state, $location, $timeout, query_Service, TM_API)->

          #console.log 'in Articles_Controller ' + new Date().getMilliseconds()

          $scope.query_Id            = null
          $scope.selected_Technology = null
          $scope.previous_Filter_Id  = null
          $scope.technologies        = {}
          $scope.technologies_By_Id  = {}
          $scope.text                = ''
          $scope.ignore_Events       = false
          $scope.words               = []
          $scope.searchPlaceholder   = "Search All of TEAM Mentor"
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
            $scope.technologies_By_Id =  {"All":{"title":"All Technologies","id":"query-6234f2d47eb7","$$hashKey":"object:31"},"query-b925cdfcbecf":{"id":"query-b925cdfcbecf","title":"Web Application","size":100,"icon":{},"$$hashKey":"object:32"},"query-a2818a65b92e":{"id":"query-a2818a65b92e","title":"Technology Independent","size":687,"icon":{},"$$hashKey":"object:33"},"query-671d16362ce4":{"id":"query-671d16362ce4","title":"C++","size":153,"icon":{},"$$hashKey":"object:34"},"query-184728a6e3ba":{"id":"query-184728a6e3ba","title":"iOS","size":62,"icon":{},"$$hashKey":"object:35"},"query-7d9a1b64c045":{"id":"query-7d9a1b64c045","title":"Java","size":326,"icon":{},"$$hashKey":"object:36"},"query-2cade36725e4":{"id":"query-2cade36725e4","title":"Android","size":51,"icon":{},"$$hashKey":"object:37"},"query-8c511380a4f5":{"id":"query-8c511380a4f5","title":".NET","size":346,"icon":{},"$$hashKey":"object:38"},"query-522e32547f58":{"id":"query-522e32547f58","title":"Scala Play","size":106,"icon":{},"$$hashKey":"object:39"},"query-8abb89a8b279":{"id":"query-8abb89a8b279","title":"PHP","size":215,"icon":{},"$$hashKey":"object:40"},"query-a37f08332895":{"id":"query-a37f08332895","title":"WCF","size":79,"icon":{},"$$hashKey":"object:41"},"query-3b01497554f8":{"id":"query-3b01497554f8","title":"HTML5","size":81,"icon":{},"$$hashKey":"object:42"}};
            $scope.technologies       = [{"title":"All Technologies","id":"query-6234f2d47eb7","$$hashKey":"object:31"},{"id":"query-b925cdfcbecf","title":"Web Application","size":100,"icon":{},"$$hashKey":"object:32"},{"id":"query-a2818a65b92e","title":"Technology Independent","size":687,"icon":{},"$$hashKey":"object:33"},{"id":"query-671d16362ce4","title":"C++","size":153,"icon":{},"$$hashKey":"object:34"},{"id":"query-184728a6e3ba","title":"iOS","size":62,"icon":{},"$$hashKey":"object:35"},{"id":"query-7d9a1b64c045","title":"Java","size":326,"icon":{},"$$hashKey":"object:36"},{"id":"query-2cade36725e4","title":"Android","size":51,"icon":{},"$$hashKey":"object:37"},{"id":"query-8c511380a4f5","title":".NET","size":346,"icon":{},"$$hashKey":"object:38"},{"id":"query-522e32547f58","title":"Scala Play","size":106,"icon":{},"$$hashKey":"object:39"},{"id":"query-8abb89a8b279","title":"PHP","size":215,"icon":{},"$$hashKey":"object:40"},{"id":"query-a37f08332895","title":"WCF","size":79,"icon":{},"$$hashKey":"object:41"},{"id":"query-3b01497554f8","title":"HTML5","size":81,"icon":{},"$$hashKey":"object:42"}]
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
            if $state.current?.name isnt 'index'
              $state.go('index')

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
                $rootScope.$broadcast 'apply_filter', $scope.selected_Technology.id, $scope.selected_Technology.title , 'Technology'

            $rootScope.$broadcast 'apply_query',query_Id

            $scope.previous_Filter_Id = technology_Id

          $scope.get_Words = (term)->
            $rootScope.$broadcast 'search_term', term

          $scope.set_technologies_By_Id()
