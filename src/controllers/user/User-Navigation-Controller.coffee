angular.module('TM_App')
       .controller 'User_Navigation_Controller', ($scope, $state, $timeout, $window)->

          $scope.open_Query_State = ->
            $window.location.href = '/angular/user/index'     # for now reload the whole thing
            #$state.go('index')

          $scope.show_Loading_Image = false

          $scope.$on 'http_start',->
            $scope.show_Loading_Image = true

          $scope.$on 'http_end',->
            $timeout ->
              $scope.show_Loading_Image = false