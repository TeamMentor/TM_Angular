angular.module('TM_App')
.controller 'Pwd_Reset_Controller', ($scope, TM_API, $location, $timeout)->
  $scope.reset_Password = ->
    $scope.infoMessage  = "...sending request ..."
    #TM_API.pwd_reset $scope.email, (data)->
    #  $scope.infoMessage  = data?.message
  $scope.showInfoMessage = -> $scope.infoMessage