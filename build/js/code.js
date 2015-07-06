(function() {
  var app;

  app = angular.module('App', ['mm.foundation', 'ui.slider']);

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
      _this;
      _this.query_tree_filtered = function(id, filter, callback) {
        var url;
        if (cache_Query_Tree[id + filter]) {
          return callback(cache_Query_Tree[id]);
        }
        url = "/api/data/query_tree_filtered/" + id + "/" + filter;
        return $http.get(url).success(function(data) {
          console.log(data);
          cache_Query_Tree[id + filter] = data;
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

  app.controller('Index-Controller', function($scope, $sce, TM_API) {
    var activeFilter, breadcrumbs;
    breadcrumbs = [
      {
        title: 'index',
        href: '#' + 'query-6234f2d47eb7',
        id: 'query-6234f2d47eb7'
      }
    ];
    activeFilter = [];
    activeFilter.ids = "";
    activeFilter.titles = "";
    activeFilter.filters = "";
    $scope.slider = {
      floor: 1,
      ceiling: 240,
      step: 10,
      index: 1
    };
    $scope.show_Articles_List = function(index) {
      if ($scope._data) {
        $scope._data.results = $scope._results.slice(index - 1, +(index + 9) + 1 || 9e9);
        $scope.articles_list = $sce.trustAsHtml(jade_articles_list($scope._data));
        return $scope._data.results = $scope._results;
      }
    };
    $scope.render_Data = function(data) {
      window.scope = $scope;
      $scope._results = data.results;
      $scope._data = data;
      data.activeFilter = activeFilter;
      data.breadcrumbs = breadcrumbs;
      $scope.slider.index = 1;
      $scope.slider.ceiling = data.results.size();
      $scope.breadcrumbs = $sce.trustAsHtml(jade_breadcrumbs(data));
      $scope.directory_list = $sce.trustAsHtml(jade_directory_list(data));
      $scope.results = $sce.trustAsHtml(jade_results(data));
      $scope.filters_div = $sce.trustAsHtml(jade_filters_div(data));
      return $scope.show_Articles_List(1);
    };
    $scope.get_Query_Tree = function(query_Id) {
      activeFilter = [];
      activeFilter.ids = "";
      activeFilter.titles = "";
      activeFilter.filters = "";
      $scope.query_Id = query_Id;
      return TM_API.query_tree(query_Id, function(data) {
        window._data = data;
        data.href = '#';
        return $scope.render_Data(data);
      });
    };
    $scope.show_Query_Tree_Filter = function(filter) {
      var query_Id;
      query_Id = $scope.query_Id;
      return TM_API.query_tree_filtered(query_Id, filter, function(data) {
        window._data = data;
        data.href = '#';
        return $scope.render_Data(data);
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
      return $scope.get_Query_Tree(query_Id);
    };
    $scope.open_Breadcrumb = function(obj, $event) {
      var id;
      id = $event.target.href.split('#')[1].split('/')[0];
      return $scope.get_Query_Tree(id);
    };
    $scope.open_Filter = function(obj, $event) {
      var filter_Id, filter_Title;
      console.log($event);
      window._target = $event;
      if ($event.target.parentElement.href) {
        filter_Id = $event.target.parentElement.href.split('#/')[1].remove(',');
        filter_Title = $event.target.textContent;
        activeFilter = [
          {
            title: filter_Title,
            id: filter_Id
          }
        ];
        activeFilter.titles = filter_Title;
        activeFilter.ids = filter_Id;
        activeFilter.filters = filter_Id;
        console.log(activeFilter);
        return $scope.show_Query_Tree_Filter(filter_Id);
      }
    };
    $scope.$watch("slider.index", function(current, before) {
      return $scope.show_Articles_List(current);
    });
    return $scope.get_Query_Tree(breadcrumbs[0].id);
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
