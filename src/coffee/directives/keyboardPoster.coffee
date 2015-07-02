app = angular.module('App')

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
