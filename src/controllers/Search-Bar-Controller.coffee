angular.module('TM_App')
       .controller 'Search_Bar_Controller', ($rootScope, $scope, query_Service)->
          $scope.$on 'query_data', (event, data)->
            if data.filters
              $scope.technologies = [{ title: 'All', query_Id: null }]
              for filter in data.filters
                if filter.title is 'Technology' and filter.results
                  for result in filter.results
                    $scope.technologies.push(result)

          query_Service.load_Data()