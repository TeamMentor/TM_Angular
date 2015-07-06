(function() {
  var app;

  app = angular.module('App', ['mm.foundation']);

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

  app.controller('Select-Controller', function($scope, $http, $timeout, TM_API) {
    $scope.selected = void 0;
    return $scope.getLocation = function(val) {
      console.log('getLocation: ' + val);
      return TM_API.get_Words(val);
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
        return $http.get(url).success(function(data) {
          var match;
          if (callback) {
            return callback((function() {
              var results;
              results = [];
              for (match in data) {
                results.push(match);
              }
              return results;
            })());
          }
        }).then(function(response) {
          var match;
          return (function() {
            var results;
            results = [];
            for (match in response.data) {
              results.push(match);
            }
            return results;
          })();
        });
      };
      return _this;
    };
  })(this));

}).call(this);
