angular.module('TM_App')
       .controller 'Login_Controller', ($scope, TM_API, $location, $timeout)->

          $scope.login = ->
            $scope.errorMessage  = null
            $scope.infoMessage  = "...logging in ..."
            TM_API.login $scope.username, $scope.password, (data)->
              if data.result is 'OK'
                $scope.infoMessage  = 'Login OK'
                $timeout ->
                  window.location = '/angular/user/main'
              else
                $scope.infoMessage = null
                $scope.errorMessage = data.viewModel?.errorMessage || 'Login Failed (Server error)'

          $scope.showErrorMessage =  ->
            return $scope.errorMessage

          $scope.showInfoMessage =  ->
            return $scope.infoMessage