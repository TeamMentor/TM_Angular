app = angular.module('App')

app.controller 'Search_Controller', ($scope, TM_API)->


  $scope.get_Words = (term)->
    $scope.text = term.split('-')[1]
    console.log $scope.text
    console.log term
    TM_API.get_Words term, (words)->

      $scope.words = words;

