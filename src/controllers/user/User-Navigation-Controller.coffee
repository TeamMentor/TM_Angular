angular.module('TM_App')
       .controller 'User_Navigation_Controller', ($scope, $state, $timeout)->
          $scope.open_Query_State = ->
            $state.go('index')

          $scope.show_Loading_Image = false

          $scope.$on 'http_start',->
            $scope.show_Loading_Image = true
          $scope.$on 'http_end',->
            $timeout ->
              $scope.show_Loading_Image = false