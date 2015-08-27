angular.module('TM_App')
       .controller 'Queries_Controller', ($scope, $rootScope, $location)->

          $scope.visible = false

          $scope.$on 'view_model_data', (event, data)->
            $scope.visible    = true
            $scope.title      = data.title
            $scope.containers = data.queries

          $scope.load_Query = (query_Id)->
            $rootScope.$broadcast 'apply_query', query_Id