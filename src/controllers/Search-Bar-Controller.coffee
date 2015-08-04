angular.module('TM_App')
       .controller 'Search_Bar_Controller', ($rootScope, $scope, $state, query_Service, TM_API)->
          $scope.query_Id = null
          $scope.$on 'query_data', (event, data)->
            $scope.query_Id = data.id
            if not $scope.selected_Technology
              if data.filters
                $scope.technologies = [{ title: 'All', id: query_Service.index_Query }]
                for filter in data.filters
                  if filter.title is 'Technology' and filter.results
                    for result in filter.results
                      $scope.technologies.push(result)

                $scope.selected_Technology = $scope.technologies[0]

          $scope.select_Technology = (option)->
            console.log "selecting technology: #{option.id} : #{option.title} for query-id: #{$scope.query_Id}"
            query_Service.filter_Id = ''
            query_Service.load_Filter($scope.query_Id, option.id)

          $scope.submit = ()->
            $state.go('index')
            TM_API.query_from_text_search $scope.text, (query_id)->
              if $scope.selected_Technology.title isnt 'All'
                query_Service.filter_Id = ''
                query_Service.load_Filter(query_id, $scope.selected_Technology.id)
              else
                query_Service.load_Query(query_id)


          query_Service.load_Data()