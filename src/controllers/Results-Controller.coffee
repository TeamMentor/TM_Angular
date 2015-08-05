angular.module 'TM_App'
       .controller 'Results_Controller', ($scope, $rootScope)->
          #$scope.history = {}
          $scope.view_Filters = false
          $scope.toggle_Filters = ->
            $scope.view_Filters = not $scope.view_Filters
            $rootScope.$broadcast 'view_Filters', $scope.view_Filters
