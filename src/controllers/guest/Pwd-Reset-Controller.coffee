angular.module('TM_App')
.controller 'Pwd_Reset_Controller', ($state, $scope, TM_API, $location, $timeout,$stateParams)=>
  $scope.reset_Password= ->

    $scope.errorMessage = ''
    $scope.infoMessage  = "...sending request ..."

    url = $location.$$url      #url has to contain the username and the token
    if (url?)
      username =  $stateParams.username
      token    =  $stateParams.token

      if (not username? or not token?)
        return $scope.errorMessage  = "Request not valid"

      if $scope.password != $scope.confirmpassword
        $scope.infoMessage           = ''
        return $scope.errorMessage  = "Passwords don't match, please verify"

      TM_API.pwd_reset_Token username, token, $scope.password, (data)=>
        if (data?.status=="Ok")
          $scope.errorMessage = ''
          $scope.infoMessage  = data?.message
          $timeout (()-> $state.go('login')), 2000

        else
          $scope.errorMessage = data?.message
          $scope.infoMessage  = ''

    else
      return $scope.errorMessage  = "Unable to process your request"

  $scope.showInfoMessage   = -> $scope.infoMessage
  $scope.showErrorMessage  = -> $scope.errorMessage
