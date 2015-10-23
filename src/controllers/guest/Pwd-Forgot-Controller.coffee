angular.module('TM_App')
      .controller 'Pwd_Forgot_Controller', ($scope, TM_API, $location, $timeout)->

         $scope.get_Password = ->
           $scope.isDisabled   = true #Disabling login button
           $scope.infoMessage  = "Processing your request"
           TM_API.pwd_reset $scope.email, (data)->
             $scope.isDisabled   = false #Disabling login button
             $scope.infoMessage  = data?.message
         $scope.showInfoMessage = -> $scope.infoMessage