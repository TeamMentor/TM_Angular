(function() {
  var app;

  app = angular.module('App', ['mm.foundation', 'ui.slider', 'ui.router']);

}).call(this);

(function() {
  var app;

  return;

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
  Array.prototype.first = function() {
    return this.item(0);
  };

  Array.prototype.item = function(index) {
    if (typeof index === 'number') {
      if ((this.length > index && index > -1)) {
        return this[index];
      }
    }
    return null;
  };

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

  String.prototype.upper_Case_First_Letter = function() {
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

}).call(this);

(function() {
  angular.module('App').controller('Article_Controller', function($sce, $scope, $stateParams, TM_API) {
    return TM_API.article($stateParams.article_Id, function(article_Data) {
      $scope.title = article_Data.title;
      return $scope.article_Html = $sce.trustAsHtml(article_Data.article_Html);
    });
  });

}).call(this);

(function() {
  angular.module('App').controller('Help_Controller', function($sce, $scope, TM_API) {
    return TM_API.docs_Library(function(library) {
      $scope.Views = library.Views;
      $scope.show_Doc = function(article) {
        return TM_API.docs_Page(article.Id, function(article_Data) {
          $scope.title = article.Title;
          return $scope.content = $sce.trustAsHtml(article_Data.html);
        });
      };
      return $scope.show_Doc(library.Views.first().Articles.first());
    });
  });

}).call(this);

(function() {
  angular.module('App').controller('Login_Controller', function($scope, TM_API, $location, $timeout) {
    $scope.login = function() {
      $scope.errorMessage = null;
      $scope.infoMessage = "...logging in ...";
      return TM_API.login($scope.username, $scope.password, function(data) {
        var ref;
        if (data.result === 'OK') {
          $scope.infoMessage = 'Login OK';
          return $timeout(function() {
            return window.location = '/angular/user/main';
          });
        } else {
          $scope.infoMessage = null;
          return $scope.errorMessage = ((ref = data.viewModel) != null ? ref.errorMessage : void 0) || 'Login Failed (Server error)';
        }
      });
    };
    $scope.showErrorMessage = function() {
      return $scope.errorMessage;
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);

(function() {
  angular.module('App').controller('Navigate_Controller', function($rootScope, $sce, $scope, TM_API) {
    $scope.previous_Query = null;
    $scope.load_Query = function(query_Id) {
      return TM_API.query_tree(query_Id, function(data) {
        data.previous_Query = $scope.previous_Query;
        $rootScope.$broadcast('show-query-data', data);
        return $scope.previous_Query = query_Id;
      });
    };
    return $scope.load_Query('query-6234f2d47eb7');
  });

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.controller('Search_Controller', function($rootScope, $scope, TM_API) {
    $scope.map_Search_Queries = function(data) {
      var article_Ids, result;
      if (data) {
        article_Ids = (function() {
          var i, len, ref, results;
          ref = data.results;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            result = ref[i];
            results.push(result.id);
          }
          return results;
        })();
        return TM_API.get_articles_parent_queries(article_Ids, [], function(containers) {
          data.containers = containers;
          return $rootScope.$broadcast('show-query-data', data);
        });
      }
    };
    return $scope.submit = function() {
      return TM_API.query_from_text_search($scope.text, function(query_id) {
        return TM_API.query_tree(query_id, function(data) {
          return $scope.map_Search_Queries(data);
        });
      });
    };
  });

}).call(this);

(function() {
  angular.module('App').controller('User_Navigation_Controller', function($scope, $state) {});

}).call(this);

(function() {
  var app, component, components, fn, i, len;

  app = angular.module('App');

  components = ['alert_ok', 'alert_bad', 'pwd_forgot_form', 'login_form', 'sign_up_form'];

  fn = function(component) {
    var directive_Name, index, j, len1, ref, segment;
    directive_Name = "";
    ref = component.split('_');
    for (index = j = 0, len1 = ref.length; j < len1; index = ++j) {
      segment = ref[index];
      directive_Name += index ? segment.upper_Case_First_Letter() : segment;
    }
    return app.directive(directive_Name, function() {
      return {
        templateUrl: "/angular/jade-html/component/" + component
      };
    });
  };
  for (i = 0, len = components.length; i < len; i++) {
    component = components[i];
    fn(component);
  }

}).call(this);

(function() {
  angular.module('App').directive('filters', function($compile, Load_Jade, TM_API) {
    return {
      link: function($scope, element) {
        return Load_Jade('component/filters', 'filters', function(filters) {
          return $scope.$on('show-query-data', function(event, data) {
            var compiled, content, html;
            html = filters(data);
            compiled = $compile(html);
            content = compiled($scope);
            element.children().remove();
            return element.append(content);
          });
        });
      }
    };
  });

}).call(this);

(function() {
  angular.module('App').directive('helpNavigation', function() {
    return {
      templateUrl: '/angular/jade-html/component/help_navigation'
    };
  });

}).call(this);

(function() {
  angular.module('App').directive('landingBar', function() {
    return {
      templateUrl: '/angular/jade-html/component/landing_bar'
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
  angular.module('App').directive('navigateQueries', function($compile, Load_Jade, TM_API) {
    return {
      link: function($scope, element) {
        return Load_Jade('component/navigate_queries', 'navigate_queries', function(navigate_queries) {
          return $scope.$on('show-query-data', function(event, data) {
            var compiled, content, html;
            html = navigate_queries(data);
            compiled = $compile(html);
            content = compiled($scope);
            element.children().remove();
            return element.append(content);
          });
        });
      }
    };
  });

}).call(this);

(function() {
  angular.module('App').directive('navigateResults', function($compile, Load_Jade, TM_API) {
    return {
      link: function($scope, element) {
        return Load_Jade('component/navigate_results', 'navigate_results', function(navigate_results) {
          return $scope.$on('show-query-data', function(event, data) {
            var compiled, content, html;
            html = navigate_results(data);
            compiled = $compile(html);
            content = compiled($scope);
            element.children().remove();
            return element.append(content);
          });
        });
      }
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

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('index');
    return $locationProvider.html5Mode(true);
  });

}).call(this);

(function() {
  var app;

  app = angular.module('App');

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    var i, len, results, view_Name, view_Names;
    view_Names = ['about', 'blank', 'docs', 'features', 'pwd_forgot', 'index', 'login', 'sign_up'];
    results = [];
    for (i = 0, len = view_Names.length; i < len; i++) {
      view_Name = view_Names[i];
      results.push($stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/" + view_Name
      }));
    }
    return results;
  });

}).call(this);

(function() {
  var app;

  return;

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
    view_Names = ['about', 'docs', 'index', 'features', 'logout', 'main', 'navigate', 'error', 'blank'];
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
  var app;

  app = angular.module('App');

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    var i, len, view_Name, view_Names;
    view_Names = ['navigate', 'main'];
    for (i = 0, len = view_Names.length; i < len; i++) {
      view_Name = view_Names[i];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/" + view_Name
      });
    }
    return $stateProvider.state('article', {
      url: "/article/:article_Id/:article_Title",
      controller: 'Article_Controller',
      templateUrl: '/angular/jade-html/views/article'
    });
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
    return function($q, $http, $timeout) {
      var cache_Articles, cache_Query_Tree;
      cache_Query_Tree = {};
      cache_Articles = {};
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
          return $timeout(function() {
            return callback(cache_Query_Tree[id]);
          });
        } else {
          url = "/api/data/query_tree/" + id;
          return $http.get(url).success(function(data) {
            cache_Query_Tree[id] = data;
            return callback(data);
          });
        }
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
          var key, matches, query, query_Data, ref, ref1;
          matches = [];
          ref = data.queries;
          for (key in ref) {
            query = ref[key];
            if (key.indexOf('query-') > -1) {
              query_Data = data.queries[key];
              if (((ref1 = query_Data.parent_Queries) != null ? ref1.first() : void 0) === 'query-6234f2d47eb7') {
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
      _this;
      _this.docs_Library = function(callback) {
        var url;
        url = "/json/docs/library";
        return $http.get(url).success(function(data) {
          return callback(data);
        });
      };
      _this;
      _this.docs_Page = function(article_Id, callback) {
        var url;
        url = "/json/docs/" + article_Id;
        return $http.get(url).success(callback);
      };
      _this;
      _this.article = function(article_Id, callback) {
        var url;
        if (cache_Articles[article_Id]) {
          return $timeout(function() {
            return callback(cache_Articles[article_Id]);
          });
        } else {
          url = "/json/article/" + article_Id;
          return $http.get(url).success(function(data) {
            cache_Articles[article_Id] = data;
            return callback(data);
          });
        }
      };
      _this;
      _this.login = function(username, password, callback) {
        var postData, url;
        url = "/json/user/login";
        postData = {
          username: username,
          password: password
        };
        return $http.post(url, postData).success(callback);
      };
      return _this;
    };
  })(this));

}).call(this);
