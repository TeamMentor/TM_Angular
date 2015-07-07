app = angular.module('App')

#app.controller 'Select_Controller', ($scope, $http, $timeout, $interval)->
app.controller 'Select_Controller', ($scope, $http, $timeout, TM_API)->

  #angular.module('App').controller('TypeaheadCtrl', function($scope, $http, $timeout, TM_API) {

  $scope.selected = undefined;

  $scope.getLocation = (val)->
    console.log('getLocation: ' + val)
    TM_API.get_Words(val)