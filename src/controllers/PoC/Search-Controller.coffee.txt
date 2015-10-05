app = angular.module('App')

app.controller 'Search_Controller', ($scope, TM_API)->

  $scope.get_Words = (term, done)->

    $scope.text = term.split('-')[1]

    TM_API.get_Words term, (words)->
      $scope.words = words;
      done() if done

