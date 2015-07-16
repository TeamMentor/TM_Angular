app = angular.module('App')



app.controller 'Route_Test_Controller', ($scope, $timeout, $sce, TM_API, $state)->


  $scope.test = 1231234512

  window.scope = $scope
  window.state = $state

