(function() {
  var app;

  app = angular.module('App', ['mm.foundation', 'ui.slider', 'ui.router']);

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.run(function($timeout, Load_Jade) {
    var preload;
    preload = function() {
      var i, len, page, preload_Pages, results;
      preload_Pages = ["about", "features", "index", "get_started"];
      results = [];
      for (i = 0, len = preload_Pages.length; i < len; i++) {
        page = preload_Pages[i];
        results.push(Load_Jade("views/" + page, "", function() {}));
      }
      return results;
    };
    return $timeout(preload, 250);
  });

}).call(this);

(function() {


}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.controller('Search_Controller', function($rootScope, $scope, TM_API) {
    console.log(" IN Search_Controller");
    $scope.text = 'xss....';
    return $scope.submit = function() {
      console.log("IN Search_Controller submit");
      return TM_API.query_from_text_search($scope.text, function(query_id) {
        console.log(query_id);
        return TM_API.query_tree(query_id, function(data) {
          console.log(data);
          if (data) {
            data.href = '#/navigate/';
            console.log('broadcasting: ' + 'New_Results_Data');
            return $rootScope.$broadcast('New_Results_Data', data);
          }
        });
      });
    };
  });

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.directive('leftNavigation', function($parse, $timeout) {
    return {
      templateUrl: '/angular/jade-html/component/left_navigation'
    };
  });

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.directive('searchBar', function($parse, $timeout) {
    return {
      templateUrl: '/angular/jade-html/component/search_bar'
    };
  });

}).call(this);

(function() {
  var app;

  app = angular.module('App');

}).call(this);

(function() {
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

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.service('User', function() {
    var user;
    user = {
      name: '...',
      logged_In: true
    };
    return user;
  });

  app.config(function($stateProvider, $urlRouterProvider) {
    var NavBar_Controller, Navigate_Controller, View_Controller, i, len, resolve_Navbar, resolve_View, view_Name, view_Names;
    $urlRouterProvider.otherwise('/index');
    resolve_Navbar = function(Load_Jade, User) {
      var file, name;
      if (User.logged_In) {
        name = 'logged_in';
      } else {
        name = 'anonymous';
      }
      file = "navbar/" + name;
      return Load_Jade(file, name, function(method, resolve) {
        return resolve(method());
      });
    };
    resolve_View = function(page) {
      return function(Load_Jade, User) {
        return Load_Jade("views/" + page, page, function(method, resolve) {
          return resolve('<span ng-bind-html="content_HTML"></span>');
        });
      };
    };
    View_Controller = function(page) {
      return function($rootScope, $scope, User, $sce, $state, $stateParams, TM_API) {
        var method_Name;
        window.state = $state;
        window.scope = $scope;
        if (page === 'logout') {
          User.logged_In = false;
          return $state.go('index');
        }
        if (page === 'get_started') {
          User.logged_In = true;
          page = 'main';
          return $state.go('navigate');
        }
        method_Name = "jade_" + page;
        if (page === 'navigate') {
          return Navigate_Controller($rootScope, $scope, $sce, $stateParams, TM_API);
        } else {
          if (window[method_Name]) {
            return $scope.content_HTML = $sce.trustAsHtml(window[method_Name]());
          }
        }
      };
    };
    Navigate_Controller = function($rootScope, $scope, $sce, $stateParams, TM_API) {
      TM_API.query_tree($stateParams.query_Id, function(data) {
        data.href = '#/navigate/';
        return $scope.content_HTML = $sce.trustAsHtml(jade_navigate(data));
      });
      return $rootScope.$on('New_Results_Data', function(event, data) {
        console.log('Received New_Results_Data');
        return $scope.content_HTML = $sce.trustAsHtml(jade_navigate(data));
      });
    };
    NavBar_Controller = function() {};
    view_Names = ['about', 'docs', 'index', 'features', 'get_started', 'logout', 'main', 'navigate', 'error', 'blank'];
    for (i = 0, len = view_Names.length; i < len; i++) {
      view_Name = view_Names[i];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        views: {
          'navbar': {
            templateProvider: resolve_Navbar,
            controller: NavBar_Controller
          },
          'content': {
            templateProvider: resolve_View(view_Name),
            controller: View_Controller(view_Name)
          }
        }
      });
    }
    $stateProvider.state('/navigate/:query_Id', {
      url: '/navigate/:query_Id',
      views: {
        'navbar': {
          templateProvider: resolve_Navbar,
          controller: NavBar_Controller
        },
        'content': {
          templateProvider: resolve_View('navigate'),
          controller: View_Controller('navigate')
        }
      }
    });
    return window.stateProvider = $stateProvider;
  });

  app.controller('Content_Controller', function($scope) {
    return $scope.content = '...TEAM mentor is loading....';
  });

}).call(this);

(function() {
  var app, config;

  app = angular.module('App');

  config = {
    cache_Jade_Js: true
  };

  app.service('Load_Jade', function($q, $document) {
    return function(jade_File, method_Name, callback) {
      var deferrer, error, script, src;
      method_Name = 'jade_' + method_Name;
      deferrer = $q.defer();
      if (config.cache_Jade_Js && window[method_Name]) {
        callback(window[method_Name], deferrer.resolve);
      } else {
        try {
          script = $document[0].createElement('script');
          src = "/angular/jade/" + jade_File;
          script.src = src;
          $document[0].body.appendChild(script);
          script.onload = function() {
            return callback(window[method_Name], deferrer.resolve);
          };
        } catch (_error) {
          error = _error;
          console.log(error);
        }
      }
      return deferrer.promise;
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
        id = id || 'query-6234f2d47eb7';
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
          cache_Query_Tree[id + filter] = data;
          return callback(data);
        });
      };
      _this;
      _this.query_from_text_search = function(text, callback) {
        var url;
        url = "/api/search/query_from_text_search/" + text;
        return $http.get(url).success(function(data) {
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
