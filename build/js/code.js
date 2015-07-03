(function() {
  var app;

  app = angular.module('App', []);

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.controller('Search_Controller', function($scope, TM_API) {
    return $scope.get_Words = function(term, done) {
      $scope.text = term.split('-')[1];
      return TM_API.get_Words(term, function(words) {
        $scope.words = words;
        if (done) {
          return done();
        }
      });
    };
  });

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.directive('keyboardPoster', function($parse, $timeout) {
    var DELAY_TIME_BEFORE_POSTING;
    DELAY_TIME_BEFORE_POSTING = 0;
    return function(scope, elem, attrs) {
      var currentTimeout, element;
      element = angular.element(elem)[0];
      currentTimeout = null;
      return element.oninput = function() {
        var model, poster;
        model = $parse(attrs.postFunction);
        poster = model(scope);
        if (currentTimeout) {
          $timeout.cancel(currentTimeout);
        }
        return currentTimeout = $timeout((function() {
          return poster(angular.element(element).val());
        }), DELAY_TIME_BEFORE_POSTING);
      };
    };
  });

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.service('TM_API', (function(_this) {
    return function($q, $http) {
      _this.get_Words = function(term, callback) {
        var url;
        url = "http://localhost:12345/angular/api/auto-complete?term=" + term;
        return $http.get(url).success(function(response) {
          return callback(response.data);
        }).error(function(data, status, headers, config) {
          console.log('error');
          return console.log(data);
        });
      };
      return _this;
    };
  })(this));

}).call(this);
