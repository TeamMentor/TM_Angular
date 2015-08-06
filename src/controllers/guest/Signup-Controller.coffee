angular.module('TM_App')
      .controller 'Signup_Controller', ($scope, TM_API, $window, $timeout)->
          $scope.signup = ->
            $scope.errorMessage  = null
            $scope.infoMessage  = "...Signing  up ..."
            TM_API.signup $scope.username, $scope.password,"$scope.confirm-password",$scope.email,$scope.firstname,$scope.lastname,$scope.company,$scope.title,$scope.country,$scope.state, (data)->
              if data?.result is 'OK'
                $scope.infoMessage  = 'Signup OK'
                $timeout ->
                  $window.location.href = '/angular/user/main'
              else
                $scope.infoMessage = null
                $scope.errorMessage = data?.viewModel?.errorMessage || 'Signup Failed (Server error)'

          $scope.showErrorMessage =  ->
            return $scope.errorMessage

          $scope.showInfoMessage =  ->
            return $scope.infoMessage