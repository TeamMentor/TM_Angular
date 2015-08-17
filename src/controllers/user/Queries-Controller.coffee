angular.module('TM_App')
       .controller 'Queries_Controller', ($scope, $rootScope)->

          $scope.$on 'view_model_data', (event, data)->
            $scope.title = data.title
            $scope.containers = data.queries

          $scope.load_Query = (query_Id)->
            $rootScope.$broadcast 'apply_query', query_Id

          #query_Service.reload_Data()