angular.module('TM_App')
      .controller 'Signup_Controller', ($scope, TM_API, $window, $timeout)->
          $scope.form = {};
          $scope.signup = ->
            $scope.errorMessage  = null
            $scope.supportEmail  = false
            $scope.isDisabled    = true #Disabling login button
            $scope.infoMessage   = "Signing you up"
            TM_API.signup $scope.form, (data)->
              $scope.isDisabled = false  #Enabling login button since async call finished
              if data?.result is 'OK'
                $scope.infoMessage  = 'Signup OK'
                $timeout ->
                  $window.location.href = '/angular/user/index'
              else
                $scope.infoMessage = null
                if data?.viewModel?.errorMessage?.contains('please contact us at')
                  $scope.supportEmail = true
                  
                $scope.errorMessage = data?.viewModel?.errorMessage || 'Signup Failed (Server error)'

          $scope.showErrorMessage =  ->
            return $scope.errorMessage

          $scope.showSupportEmail = ->
            return $scope.supportEmail

          $scope.showInfoMessage =  ->
            return $scope.infoMessage