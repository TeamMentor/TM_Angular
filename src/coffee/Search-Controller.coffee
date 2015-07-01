app = angular.module('App')

app.service 'TM_API', ($q, $http)=>
 @.get_Words = (term, callback)->
   $http.get "http://localhost:12345/angular/api/auto-complete?term=#{term}"
        .then (response)->
          callback response.data
 @

app.controller 'Search_Controller', ($scope, TM_API)->


  $scope.get_Words = (term)->
    $scope.text = term.split('-')[1]
    console.log $scope.text
    console.log term
    TM_API.get_Words term, (words)->

      $scope.words = words;

app.directive 'keyboardPoster', ($parse, $timeout)->

  DELAY_TIME_BEFORE_POSTING = 0;
  return (scope, elem, attrs) ->
    element = angular.element(elem)[0]
    currentTimeout = null

    element.oninput = ()->
      model = $parse(attrs.postFunction);
      poster = model(scope);

      if(currentTimeout)
        $timeout.cancel(currentTimeout)

      currentTimeout = $timeout (() -> poster(angular.element(element).val())) , DELAY_TIME_BEFORE_POSTING
