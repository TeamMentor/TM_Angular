angular.module('TM_App')
       .controller 'Queries_Controller', ($scope, query_Service)->
          $scope.title      = 'Index'
          #$scope.containers = []
          #$scope.previous_Query = []

          $scope.$on 'query_data', (event, data)->
            $scope.containers = data.containers

          #$scope.show_Previous_Query = ()->
          #  $scope.load_Query $scope.previous_Query.pop(), true

          $scope.load_Query = (query_Id)->
            query_Service.load_Query query_Id

          query_Service.load_Data()

          window._q = query_Service

