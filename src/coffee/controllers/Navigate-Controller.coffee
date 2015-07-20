
angular.module('App')
       .controller 'Navigate_Controller', ($sce, $scope, TM_API)->
          $scope.previous_Query = null
          $scope.load_Query = (query_Id)->
            TM_API.query_tree query_Id, (data)->
              data.previous_Query = $scope.previous_Query
              $scope.$broadcast 'show-query-data', data
              $scope.previous_Query = query_Id

          $scope.load_Query 'query-6234f2d47eb7'