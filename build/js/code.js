(function() {
  var app;

  app = angular.module('App', ['mm.foundation']);

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  Array.prototype.size = function() {
    return this.length;
  };

  Array.prototype.take = function(size) {
    if (size === -1) {
      return this;
    } else {
      return this.slice(0, size);
    }
  };

  String.prototype.remove = function(value) {
    var result;
    result = this;
    while (result.contains(value)) {
      result = result.replace(value, '');
    }
    return result;
  };

  String.prototype.contains = function(value) {
    var i, item, len, regex;
    if (value instanceof RegExp) {
      regex = new RegExp(value);
      return regex.exec(this) !== null;
    }
    if (value instanceof Array) {
      for (i = 0, len = value.length; i < len; i++) {
        item = value[i];
        if (this.indexOf(item) === -1) {
          return false;
        }
      }
      return true;
    }
    return this.indexOf(value) > -1;
  };

  app.controller('Jade-Controller', function($scope, $sce, TM_API) {
    var breadcrumbs;
    breadcrumbs = [
      {
        title: 'index',
        href: '#' + 'query-6234f2d47eb7',
        id: 'query-6234f2d47eb7'
      }
    ];
    $scope.show_Query = function(query_Id) {
      return TM_API.query_tree(query_Id, function(data) {
        window._data = data;
        data.breadcrumbs = breadcrumbs;
        data.href = '#';
        $scope.breadcrumbs = $sce.trustAsHtml(jade_breadcrumbs(data));
        $scope.directory_list = $sce.trustAsHtml(jade_directory_list(data));
        $scope.results = $sce.trustAsHtml(jade_results(data));
        $scope.articles_list = $sce.trustAsHtml(jade_articles_list(data));
        return $scope.filters_div = $sce.trustAsHtml(jade_filters_div(data));
      });
    };
    $scope.open_Query = function(obj, $event) {
      var query_Id, query_Title;
      query_Id = $event.target.id;
      query_Title = $event.target.text;
      breadcrumbs.push({
        title: query_Title,
        href: '#' + query_Id
      });
      console.log(breadcrumbs);
      window._target = $event.target;
      return $scope.show_Query(query_Id);
    };
    $scope.open_Breadcrumb = function(obj, $event) {
      var id;
      window._target = $event.target;
      id = $event.target.href.split('#')[1];
      return $scope.show_Query(id);
    };
    return $scope.show_Query('query-6234f2d47eb7');
  });

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

  app.service('TM_API', (function(_this) {
    return function($q, $http) {
      var cache_Query_Tree;
      cache_Query_Tree = {};
      _this.get_Words = function(term, callback) {
        var url;
        url = "/angular/api/auto-complete?term=" + term;
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
      _this.query_tree = function(id, callback) {
        var url;
        id = id || 'query-dd98c2d701d8';
        if (cache_Query_Tree[id]) {
          return callback(cache_Query_Tree[id]);
        }
        url = "/api/data/query_tree/" + id;
        return $http.get(url).success(function(data) {
          cache_Query_Tree[id] = data;
          return callback(data);
        });
      };
      return _this;
    };
  })(this));

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.directive('tmJade2', function($parse, $timeout) {
    return function(scope, elem, attrs) {
      window._scope = scope;
      window._elem = scope;
      window._attrs = attrs;
      console.log(scope);
      console.log(elem);
      return console.log(attrs);
    };
  });

  app.directive('tmJade', function($parse, $timeout) {
    var data, html;
    data = {
      href: '/abc',
      title: 'aaaa',
      containers: [
        {
          id: 123,
          title: 'abc',
          size: 12
        }
      ]
    };
    html = jade_directory_list(data);
    return {
      template: html
    };
  });

}).call(this);
