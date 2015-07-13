(function() {
  var app;

  app = angular.module('App', ['mm.foundation', 'ui.slider', 'ui.router']);

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.controller('Active_Search_Controller', function($scope, $timeout, $sce, TM_API) {
    $scope.slider = {
      floor: 1,
      ceiling: 20,
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
    $scope.show_Articles_Filtered = function(articles_Ids) {
      var result, results;
      if ($scope._data) {
        console.log('here');
        results = (function() {
          var i, len, ref, results1;
          ref = $scope._results;
          results1 = [];
          for (i = 0, len = ref.length; i < len; i++) {
            result = ref[i];
            if (articles_Ids.indexOf(result.id) > -1) {
              results1.push(result);
            }
          }
          return results1;
        })();
        console.log(results);
        $scope._data.results = results;
        console.log($scope._data);
        $scope.articles_list = $sce.trustAsHtml(jade_articles_list($scope._data));
        return $scope._data.results = $scope._results;
      }
    };
    $scope.render_Data = function(data) {
      if (data) {
        $scope._results = data.results;
        $scope._data = data;
        $scope.slider.index = 1;
        $scope.slider.ceiling = data.results.size();
        $scope.directory_list = $sce.trustAsHtml(jade_directory_list(data));
        $scope.articles_list = $sce.trustAsHtml(jade_articles_list(data));
        $scope.filters_div = $sce.trustAsHtml(jade_filters_div(data));
        return $scope.show_Articles_List(1);
      } else {
        $scope.directory_list = $sce.trustAsHtml('a');
        $scope.articles_list = $sce.trustAsHtml('b');
        return $scope.filters_div = $sce.trustAsHtml('c');
      }
    };
    $scope.get_Query_Tree = function(query_Id) {
      $scope.query_Id = query_Id;
      return TM_API.query_tree(query_Id, function(data) {
        var article_Ids, filter, filters, i, j, len, len1, ref, ref1, result;
        window._data = data;
        article_Ids = (function() {
          var i, len, ref, results1;
          ref = data.results;
          results1 = [];
          for (i = 0, len = ref.length; i < len; i++) {
            result = ref[i];
            results1.push(result.id);
          }
          return results1;
        })();
        filters = [];
        ref = data.filters;
        for (i = 0, len = ref.length; i < len; i++) {
          filter = ref[i];
          ref1 = filter.results;
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            result = ref1[j];
            filters.push(result.title);
          }
        }
        data.href = '#';
        $scope.render_Data(data);
        return TM_API.get_articles_parent_queries(article_Ids, filters, function(data) {
          $scope.queries_Data = data;
          return $scope.directory_list = $sce.trustAsHtml(jade_directory_list({
            title: $scope.text,
            containers: data,
            href: '#'
          }));
        });
      });
    };
    $scope.search = (function(_this) {
      return function() {
        if ($scope.text) {
          return TM_API.query_from_text_search($scope.text, function(query_id) {
            if (query_id) {
              return $scope.get_Query_Tree(query_id);
            }
          });
        }
      };
    })(this);
    $scope.open_Query = function(obj, $event) {
      var i, len, query, query_Id, query_Title, ref, target_Query;
      query_Id = $event.target.id;
      query_Title = $event.target.text;
      $scope.sub_Query = query_Title;
      ref = $scope.queries_Data;
      for (i = 0, len = ref.length; i < len; i++) {
        query = ref[i];
        if (query.id === query_Id) {
          target_Query = query;
        }
      }
      if (target_Query) {
        console.log(target_Query);
        return $scope.show_Articles_Filtered(target_Query.articles);
      }
    };
    $scope.$watch("text", function(current) {
      return $scope.search();
    });
    $scope.$watch("slider.index", function(current) {
      return $scope.show_Articles_List(current);
    });
    return $scope.text = 'xss';
  });

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
      if ($event) {
        query_Id = $event.target.id;
        query_Title = $event.target.text;
        breadcrumbs.push({
          title: query_Title,
          href: '#' + query_Id
        });
        return $scope.get_Query_Tree(query_Id);
      }
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
    $scope.$watch("slider.index", function(current) {
      return $scope.open_Query(current);
    });
    return $scope.get_Query_Tree(breadcrumbs[0].id);
  });

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('about', {
      url: '/about',
      templateUrl: '../views/about.html'
    });
    $stateProvider.state('docs', {
      url: '/docs',
      templateUrl: '../views/docs.html'
    });
    $stateProvider.state('index', {
      url: '/index',
      templateUrl: '../views/index.html'
    });
    $stateProvider.state('features', {
      url: '/features',
      templateUrl: '../views/features.html'
    });
    $stateProvider.state('start', {
      url: '/start',
      templateUrl: '../views/start.html'
    });
    $stateProvider.state('main', {
      url: '/main',
      templateUrl: '../views/main.html'
    });
    $stateProvider.state('navigate', {
      url: '/navigate',
      templateUrl: '../views/navigate.html'
    });
    $stateProvider.state('article', {
      url: '/article',
      templateUrl: '../views/article.html'
    });
    $stateProvider.state('contacts', {
      template: '<h1>My Contacts</h1>'
    });
    return window.stateProvider = $stateProvider;
  });

  app.controller('Route_Test_Controller', function($scope, $timeout, $sce, TM_API, $state) {
    $scope.test = 1231234512;
    window.scope = $scope;
    return window.state = $state;
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

  app.controller('Select_Controller', function($scope, $http, $timeout, TM_API) {
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
      _this;
      _this.query_from_text_search = function(text, callback) {
        var url;
        url = "/api/search/query_from_text_search/" + text;
        return $http.get(url).success(function(data) {
          console.log(data);
          return callback(data);
        });
      };
      _this;
      _this.get_articles_parent_queries = function(article_Ids, ignore_Titles, callback) {
        var url;
        url = "/api/data/articles_parent_queries/" + (article_Ids.join(','));
        return $http.get(url).success(function(data) {
          var key, matches, query, query_Data, ref;
          matches = [];
          ref = data.queries;
          for (key in ref) {
            query = ref[key];
            if (key.indexOf('query-') > -1) {
              query_Data = data.queries[key];
              if (query_Data.child_Queries.size() === 0) {
                if (ignore_Titles.indexOf(query_Data.title) === -1) {
                  matches.push({
                    id: key,
                    title: query_Data.title,
                    articles: query_Data.articles,
                    size: query_Data.articles.size()
                  });
                }
              }
            }
          }
          if (callback) {
            return callback(matches);
          }
        });
      };
      return _this;
    };
  })(this));

}).call(this);
