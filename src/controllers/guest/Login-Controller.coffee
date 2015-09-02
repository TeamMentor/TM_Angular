angular.module('TM_App')
       .controller 'Login_Controller', ($scope, TM_API, $window, $timeout,$rootScope)->

          $scope.login = ->
            $scope.errorMessage  = null
            $scope.supportEmail  = false
            $scope.infoMessage   = "...logging in ..."
            TM_API.login  $scope.username, $scope.password, (data)=>
              if data.result is 'OK'
                TM_API.currentuser (userInfo)->
                  if (userInfo?.UserEnabled)
                    $scope.infoMessage  = 'Login OK'
                    $rootScope.loggedInUser =true
                    $timeout ->
                      $window.location.href = '/angular/user/index'
                  else
                    $scope.errorMessage = 'User account is disabled'
              else
                $scope.infoMessage  = null
                if data?.viewModel?.errorMessage?.contains('please contact us at')
                  $scope.supportEmail = true
                $scope.errorMessage = data.viewModel?.errorMessage || 'Login Failed (Server error)'

          $scope.showErrorMessage =  ->
            return $scope.errorMessage

          $scope.showSupportEmail = ->
            return $scope.supportEmail

          $scope.showInfoMessage =  ->
            return $scope.infoMessage