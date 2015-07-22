angular.module 'TM_App'
       .controller 'Queries_History_Controller', ($scope, query_Service)->
          $scope.history = {}
          $scope.$on 'query_data', (event, data)->
            $scope.history[data.id] = data.title

          $scope.load_Query = (query_Id)->
            query_Service.load_Query query_Id