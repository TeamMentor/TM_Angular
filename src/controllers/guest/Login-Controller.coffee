angular.module('TM_App')
       .controller 'Login_Controller', ($scope, TM_API, $window, $timeout,$rootScope)->

          $scope.login = ->
            $scope.errorMessage  = null
            $scope.supportEmail  = false
            $scope.infoMessage   = '...logging in ...'
            TM_API.login  $scope.username, $scope.password, (data)=>
              if data.result is 'OK'
                TM_API.currentuser (userInfo)->
                  if (userInfo?.UserEnabled)
                    $scope.infoMessage      = 'Login OK'
                    $rootScope.loggedInUser =true
                    #redirect URL upon login : If the value is set, a security check is performed.
                    if data.viewModel?.redirectUrl
                      if (/^(?:[a-z]+:)?\/\//i.test(data.viewModel?.redirectUrl)) #if it matches,it means it is a external URL
                        url = '/angular/user/index'
                      else
                        url = data.viewModel?.redirectUrl #relative URL
                    else
                      url = '/angular/user/index'
                      
                    $timeout ->
                        $window.location.href = url
                  else
                    $scope.infoMessage  = null
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