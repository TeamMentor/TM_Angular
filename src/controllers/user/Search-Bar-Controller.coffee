angular.module('TM_App')
       .controller 'Search_Bar_Controller', ($rootScope, $scope, $state, query_Service, TM_API)->
          $scope.query_Id            = null
          $scope.selected_Technology = null
          $scope.text                = ''

          $scope.$on 'clear_Search', ()->
            $scope.text = ''

          $scope.$on 'query_data', (event, data)->
            $scope.query_Id = data?.id
            if not $scope.selected_Technology
              $scope.technologies = [{ title: 'All', id: query_Service.index_Query }]
              if data?.filters
                for filter in data.filters
                  if filter.title is 'Technology' and filter.results
                    for result in filter.results
                      $scope.technologies.push(result)

              $scope.selected_Technology = $scope.technologies[0]

          $scope.select_Technology = ()->
            if $scope.selected_Technology
              $rootScope.$broadcast 'clear_Filters'
              $rootScope.$broadcast 'apply_Filter', $scope.selected_Technology.id, $scope.selected_Technology.title

          $scope.submit = ()->
            $state.go('index')
            $rootScope.$broadcast 'clear_Query'
            if $scope.text is ''
              $rootScope.$broadcast 'apply_Query', query_Service.index_Query
            else
              TM_API.query_from_text_search $scope.text, (query_id)->
                $rootScope.$broadcast 'apply_Query', query_id


          #query_Service.load_Data()