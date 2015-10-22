angular.module('TM_App')
       .controller 'Login_Controller', ($scope, TM_API, $window, $timeout,$rootScope)->

          $scope.login = ->
            $scope.errorMessage  = null
            $scope.supportEmail  = false
            $scope.isDisabled    = true #Disabling login button
            timer =$timeout (->
              $scope.infoMessage   = 'We are experiencing slight delays. Hang on.'
            ), 3000

            TM_API.login  $scope.username, $scope.password, (data)=>
              $timeout.cancel(timer);
              if data.result is 'OK'
                TM_API.currentuser (userInfo)->
                  $scope.isDisabled = false  #Enabling login button since async call finished
                  if (userInfo?.UserEnabled)
                    $rootScope.loggedInUser =true
                    $timeout ->
                      $window.location.href = '/angular/user/index'
                  else
                    $scope.infoMessage  = null
                    $scope.errorMessage = 'User account is disabled'
              else
                $scope.isDisabled = false  #Enabling login button since async call finished
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