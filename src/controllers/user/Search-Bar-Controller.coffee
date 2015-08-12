angular.module('TM_App')
       .controller 'Search_Bar_Controller', ($rootScope, $scope, $state, query_Service, TM_API)->

          #console.log 'in Articles_Controller ' + new Date().getMilliseconds()

          $scope.query_Id            = null
          $scope.selected_Technology = null
          $scope.previous_Filter_Id  = null
          $scope.technologies        = {}
          $scope.technologies_By_Id  = {}
          $scope.text                = ''
          $scope.ignore_Events       = false

          $scope.$on 'clear_Search', ()->
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

          $scope.$on 'filter_data', (event, data)->
            $scope.query_Id = data?.id
            if not $scope.selected_Technology
              $scope.technologies       = [{ title: 'All', id: query_Service.index_Query }]
              $scope.technologies_By_Id = { 'All' : $scope.technologies[0]}
              if data?.filters
                for filter in data.filters
                  if filter.title is 'Technology' and filter.results
                    for result in filter.results
                      $scope.technologies.push(result)
                      $scope.technologies_By_Id[result.id] = result

              $scope.selected_Technology = $scope.technologies[0]

          $scope.select_Technology = ()->
            if $scope.selected_Technology
              $scope.ignore_Events = true                                     # prevent clear_filter from firing
              $rootScope.$broadcast 'clear_filter', $scope.previous_Filter_Id

              if $scope.selected_Technology.title isnt 'All'
                $rootScope.$broadcast 'apply_filter', $scope.selected_Technology.id, $scope.selected_Technology.title , 'Technology'
              else
                $scope.submit()

              $scope.previous_Filter_Id = $scope.selected_Technology.id
              $scope.ignore_Events = false

          $scope.submit = ()->
            $state.go('index')
            $rootScope.$broadcast 'clear_query', null
            if $scope.text is ''
              $rootScope.$broadcast 'apply_query', query_Service.index_Query
            else
              TM_API.query_from_text_search $scope.text, (query_id)->
                $rootScope.$broadcast 'apply_query', query_id


          #query_Service.load_Data()