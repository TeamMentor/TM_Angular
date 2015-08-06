angular.module('TM_App')
       .controller 'Queries_Controller', ($scope, $rootScope, query_Service)->

          $scope.$on 'query_data', (event, data)->
            $scope.title = data.title
            $scope.containers = data.containers

          $scope.load_Query = (query_Id)->
            $rootScope.$broadcast 'apply_Query', query_Id
            #query_Service.load_Query query_Id


          query_Service.load_Data()