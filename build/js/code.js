(function() {
  var app;

  app = angular.module('TM_App', ['ui.router']);

}).call(this);

(function() {


}).call(this);

(function() {
  angular.module('TM_App').run(function($templateCache, $browser, $log) {
    if (true) {
      if ($browser.isMock === false) {
        $log.info('Since we are running in a real browser, removing all template caches (for now)');
        return $templateCache.removeAll();
      }
    }
  });

}).call(this);

(function() {
  var slice = [].slice;

  angular.module('TM_App').run(function($rootScope, tm_angular_config) {
    var body, events, i, len, log_Event, name;
    body = angular.element(document.body);
    body.on('keydown', function(event) {
      if (event) {
        return $rootScope.$broadcast('keydown', event);
      }
    });
    body.on('keyup', function(event) {
      if (event) {
        return $rootScope.$broadcast('keyup', event);
      }
    });
    if (tm_angular_config.log_Events) {
      log_Event = function(name) {
        return $rootScope.$on(name, function() {
          var params;
          params = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return console.log({
            event: name,
            time: (new Date()).getMilliseconds(),
            params: params
          });
        });
      };
      events = ['apply_filter', 'apply_query', 'clear_articles', 'clear_filter', 'clear_query', 'clear_search', 'set_search', 'update_search', 'pop_state', 'query_data', 'article_data', 'filter_data', 'set_page', 'set_page_split', 'toggle_filters', 'view_filters', 'view_model_data', 'test'];
      for (i = 0, len = events.length; i < len; i++) {
        name = events[i];
        log_Event(name);
      }
    }
    return window.onpopstate = function(event) {
      var ref;
      if (event != null ? (ref = event.path[0].location) != null ? ref.pathname : void 0 : void 0) {
        return $rootScope.$broadcast('pop_state', event.path[0].location.pathname);
      }
    };
  });

  angular.module('TM_App').factory('httpInterceptor', function($q, tm_angular_config) {
    return {
      request: function(config) {
        if (config && tm_angular_config.log_Urls) {
          console.log(config.method + " " + config.url);
        }
        return $q.when(config);
      }
    };
  }).config(function($httpProvider) {
    return $httpProvider.interceptors.push('httpInterceptor');
  }).run(function($http, $rootScope) {
    var spinnerFunction_End, spinnerFunction_Start;
    spinnerFunction_Start = function(data) {
      $rootScope.$broadcast('http_start');
      return data;
    };
    spinnerFunction_End = function(data) {
      $rootScope.$broadcast('http_end');
      return data;
    };
    $http.defaults.transformRequest.push(spinnerFunction_Start);
    return $http.defaults.transformResponse.push(spinnerFunction_End);
  });

}).call(this);

(function() {
  var expect,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    hasProp = {}.hasOwnProperty;

  Array.prototype.contains = function(value) {
    var i, item, len;
    if (value instanceof Array) {
      for (i = 0, len = value.length; i < len; i++) {
        item = value[i];
        if (!(indexOf.call(this, item) >= 0)) {
          return false;
        }
      }
      return true;
    } else {

    }
    return indexOf.call(this, value) >= 0;
  };

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

  Object.defineProperty(Object.prototype, 'keys', {
    enumerable: false,
    writable: true,
    value: function() {
      var key;
      return (function() {
        var results;
        results = [];
        for (key in this) {
          if (!hasProp.call(this, key)) continue;
          results.push(key);
        }
        return results;
      }).call(this);
    }
  }, window.using = function(target, callback) {
    return callback.apply(target);
  });

  if (window['chai']) {
    expect = chai.expect;
    Object.defineProperty(Object.prototype, 'assert_Is', {
      enumerable: false,
      writable: true,
      value: function(target) {
        expect(this).to.deep.equal(target);
        return this;
      }
    });
    String.prototype.assert_Is = function(target, message) {
      expect(this.toString()).to.equal(target, message);
      return this;
    };
    Number.prototype.assert_Is = function(target, message) {
      expect(this.toString()).to.equal(target.toString(), message);
      return this;
    };
    Boolean.prototype.assert_Is_False = function() {
      expect(this.valueOf()).to.equal(false);
      return false;
    };
    Boolean.prototype.assert_Is_True = function() {
      expect(this.valueOf()).to.equal(true);
      return true;
    };
    Array.prototype.assert_Contains = function(value, message) {
      var i, item, len;
      message = message || "[assert_Contains]";
      if (value instanceof Array) {
        for (i = 0, len = value.length; i < len; i++) {
          item = value[i];
          this.contains(item).assert_Is_True(item + " not found in array: " + this);
        }
      } else {
        this.contains(value).assert_Is_True(message);
      }
      return this;
    };
  }

}).call(this);

(function() {
  angular.module('TM_App').controller('Help_Controller', function($sce, $scope, TM_API) {
    $scope.show_Doc = function(article) {
      if (article) {
        return TM_API.docs_Page(article.Id, function(article_Data) {
          $scope.title = article.Title;
          return $scope.content = $sce.trustAsHtml(article_Data.html);
        });
      }
    };
    $scope.load_Library = function() {
      return TM_API.docs_Library(function(library) {
        var ref, ref1, ref2;
        if (library != null ? library.Views : void 0) {
          $scope.Views = library.Views;
          return $scope.show_Doc((ref = library.Views) != null ? (ref1 = ref.first()) != null ? (ref2 = ref1.Articles) != null ? ref2.first() : void 0 : void 0 : void 0);
        }
      });
    };
    return $scope.load_Library();
  });

}).call(this);

(function() {
  var app, routes_Names;

  app = angular.module('TM_App');

  routes_Names = {
    components: {},
    views: {
      guest: ['about', 'features', 'home', 'login', 'pwd_forgot', 'sign_up'],
      user_Root: ['docs', 'terms_and_conditions'],
      user_User: ['main', 'index', 'articles']
    }
  };

  app.constant('routes_Names', routes_Names);

}).call(this);

(function() {
  var tm_angular_config;

  tm_angular_config = {
    log_Events: false,
    log_Urls: false
  };

  angular.module('TM_App').constant('tm_angular_config', tm_angular_config);

}).call(this);

(function() {
  var Map_Directives,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Map_Directives = (function() {
    function Map_Directives(options) {
      this.map_All = bind(this.map_All, this);
      this.map_Components = bind(this.map_Components, this);
      this.app = options.app;
      this.design_Components = ['all_icons', 'events'];
      this.guest_Components = ['login_form', 'pwd_forgot_form', 'sign_up_form', 'pwd_reset_form'];
      this.navigation_Components = ['landing_bar', 'left_navigation'];
      this.user_Components = ['active_filter', 'article', 'article_box', 'articles', 'breadcrumbs', 'filters', 'filters_active', 'found_issue', 'pagination', 'queries', 'queries_history', 'results', 'search_bar'];
      this.root_Components = ['alert_ok', 'alert_bad', 'help_navigation'];
    }

    Map_Directives.prototype.resolve_Directive_Name = function(name) {
      var directive_Name, i, index, len, ref, segment;
      directive_Name = "";
      ref = name.split('_');
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        segment = ref[index];
        directive_Name += index ? segment.upper_Case_First_Letter() : segment;
      }
      return directive_Name;
    };

    Map_Directives.prototype.map_Components = function(path, components) {
      var component, i, len, results;
      results = [];
      for (i = 0, len = components.length; i < len; i++) {
        component = components[i];
        results.push((function(_this) {
          return function(component) {
            return _this.app.directive(_this.resolve_Directive_Name(component), function() {
              return {
                templateUrl: "/angular/jade-html/component" + path + "/" + component
              };
            });
          };
        })(this)(component));
      }
      return results;
    };

    Map_Directives.prototype.map_All = function() {
      this.map_Components('', this.root_Components);
      this.map_Components('/design', this.design_Components);
      this.map_Components('/guest', this.guest_Components);
      this.map_Components('/navigation', this.navigation_Components);
      return this.map_Components('/user', this.user_Components);
    };

    return Map_Directives;

  })();

  String.prototype.upper_Case_First_Letter = function() {
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  new Map_Directives({
    app: angular.module('TM_App')
  }).map_All();

}).call(this);

(function() {
  angular.module('TM_App').directive('icon', function(icon_Service) {
    return {
      template: function(element, attribute) {
        if (attribute["class"]) {
          return icon_Service.simple_Element_Html("icon-" + attribute["class"], attribute.title);
        }
        if (attribute.type) {
          return icon_Service.element_Html(attribute.type);
        }
        return icon_Service.element_Html('Default');
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('showAllIcons', function(icon_Service) {
    return {
      template: function(element, attribute) {
        var all_Icons_Html, i, key, len, ref;
        all_Icons_Html = "";
        ref = icon_Service.mappings.keys();
        for (i = 0, len = ref.length; i < len; i++) {
          key = ref[i];
          all_Icons_Html += icon_Service.element_Html(key);
          if (attribute.$attr.withTitles) {
            all_Icons_Html += " " + key + " <br/>";
          }
        }
        return all_Icons_Html;
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('showComponent', function($compile, $location) {
    return {
      link: function($scope, element) {
        var component, component_Name;
        if ($location.$$path && $location.$$path !== '/') {
          component_Name = $location.$$path.substring(1);
          if (component_Name !== '') {
            component = document.createElement(component_Name);
            return element.replaceWith($compile(component)($scope));
          }
        }
      }
    };
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('index');
    return $locationProvider.html5Mode(true);
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.service('ui_Routes', function() {});

  app.config(function($stateProvider, routes_Names) {
    var i, len, ref, results, view_Name;
    ref = routes_Names.views.guest;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      view_Name = ref[i];
      results.push($stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/guest/" + view_Name
      }));
    }
    return results;
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.config(function($stateProvider, routes_Names) {
    var i, j, len, len1, ref, ref1, view_Name;
    ref = routes_Names.views.user_Root;
    for (i = 0, len = ref.length; i < len; i++) {
      view_Name = ref[i];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/" + view_Name
      });
    }
    ref1 = routes_Names.views.user_User;
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      view_Name = ref1[j];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/user/" + view_Name
      });
    }
    $stateProvider.state('guides', {
      url: "/guides",
      templateUrl: "/angular/jade-html/views/user/guides"
    });
    $stateProvider.state('guidehash', {
      url: "/guides#:id",
      templateUrl: "/angular/jade-html/views/user/guides"
    });
    $stateProvider.state('logout', {
      url: "/logout",
      controller: 'Logout_Controller'
    });
    $stateProvider.state('article', {
      url: "/article/:article_Id/:article_Title",
      templateUrl: '/angular/jade-html/views/user/article'
    });
    $stateProvider.state('guid', {
      url: "/:article_Id",
      templateUrl: '/angular/jade-html/views/user/article'
    });
    $stateProvider.state('articleguid', {
      url: "/article/:article_Id",
      templateUrl: '/angular/jade-html/views/user/article'
    });
    $stateProvider.state('article-box', {
      url: "/article-box/:article_Id/:article_Title",
      templateUrl: '/angular/jade-html/views/user/article_box'
    });
    $stateProvider.state('index_query_id', {
      url: "/index/:query_Id",
      templateUrl: '/angular/jade-html/views/user/index'
    });
    return $stateProvider.state('index_query_id_filters', {
      url: "/index/:query_Id/:filters",
      templateUrl: '/angular/jade-html/views/user/index'
    });
  });


  /*
  app.run ($rootScope,$window,TM_API, routes_Names) =>
    $rootScope.$on '$stateChangeStart', (event, next, current) =>
      if routes_Names.views.guest.indexOf(next.name) > -1 || next.name is "docs" || next.name is 'terms_and_conditions'
        return
      else
        TM_API.currentuser (userInfo) =>
          if (userInfo? && userInfo?.UserEnabled)
            return
          else
            $window.location.href = '/angular/guest/login'
    return
   */

}).call(this);

(function() {
  var Breadcrumbs_Service,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Breadcrumbs_Service = (function() {
    Breadcrumbs_Service.$inject = ['$rootScope'];

    function Breadcrumbs_Service(rootScope) {
      this.rootScope = rootScope;
      this.on_Selected = bind(this.on_Selected, this);
      this.move_Back = bind(this.move_Back, this);
      this.current_Breadcrumbs = bind(this.current_Breadcrumbs, this);
      this.clear_query = bind(this.clear_query, this);
      this.add_Breadcrumbs = bind(this.add_Breadcrumbs, this);
      this.add_Breadcrumb = bind(this.add_Breadcrumb, this);
      this.history = {};
      this.current_Path = '';
      this.now = new Date().getMilliseconds();
    }

    Breadcrumbs_Service.prototype.add_Breadcrumb = function(id, title) {
      if (id && title) {
        if (this.current_Path.indexOf(id) === -1) {
          this.current_Path += "/" + id;
          this.history[id] = {
            title: title,
            query_Id: id
          };
          return true;
        }
      }
      return false;
    };

    Breadcrumbs_Service.prototype.add_Breadcrumbs = function(breadcrumbs) {
      var breadcrumb, i, len, results;
      results = [];
      for (i = 0, len = breadcrumbs.length; i < len; i++) {
        breadcrumb = breadcrumbs[i];
        results.push(this.add_Breadcrumb(breadcrumb.id, breadcrumb.title));
      }
      return results;
    };

    Breadcrumbs_Service.prototype.clear_query = function() {
      return this.current_Path = '';
    };

    Breadcrumbs_Service.prototype.current_Breadcrumbs = function() {
      var breadcrumbs, i, item, key, len, path, ref;
      breadcrumbs = [];
      path = '';
      ref = this.current_Path.split('/');
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        if (!(key)) {
          continue;
        }
        item = this.history[key];
        if (item) {
          breadcrumbs.push({
            query_Id: item.query_Id,
            title: item.title,
            path: path
          });
          path += "/" + key;
        }
      }
      return breadcrumbs;
    };

    Breadcrumbs_Service.prototype.move_Back = function() {
      var path;
      path = this.current_Path.split('/');
      path.pop();
      return this.current_Path = path.join('/');
    };

    Breadcrumbs_Service.prototype.on_Selected = function(breadcrumb) {
      var ref;
      if (breadcrumb != null ? breadcrumb.query_Id : void 0) {
        this.current_Path = breadcrumb.path;
        this.rootScope.$broadcast('apply_query', breadcrumb.query_Id);
        if ((ref = breadcrumb.query_Id) != null ? ref.contains('search-') : void 0) {
          return this.rootScope.$broadcast('update_search', breadcrumb.title);
        }
      }
    };

    return Breadcrumbs_Service;

  })();

  angular.module('TM_App').service('breadcrumbs_Service', Breadcrumbs_Service);

}).call(this);

(function() {
  var Icon_Service, mappings,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  mappings = {
    '.NET': {
      "class": 'icon-Net',
      layers: 12
    },
    'ASP.NET 3.5': {
      "class": 'icon-Net',
      layers: 12
    },
    'ASP.NET 4.0': {
      "class": 'icon-Net',
      layers: 12
    },
    'Android': {
      "class": 'icon-Android',
      layers: 12
    },
    'C++': {
      "class": 'icon-C',
      layers: 12
    },
    'iOS': {
      "class": 'icon-iOS',
      layers: 12
    },
    'Java': {
      "class": 'icon-Java',
      layers: 12
    },
    'PHP': {
      "class": 'icon-PHP',
      layers: 12
    },
    'Scala Play': {
      "class": 'icon-Scala',
      layers: 12
    },
    'Scala with Play Framework': {
      "class": 'icon-Scala',
      layers: 12
    },
    'WCF': {
      "class": 'icon-WCF',
      layers: 12
    },
    'WCF 3.5': {
      "class": 'icon-WCF',
      layers: 12
    },
    'Web Application': {
      "class": 'icon-Web-App',
      layers: 12
    },
    'HTML5': {
      "class": 'icon-HTML5',
      layers: 12
    },
    'Deployment': {
      "class": 'icon-Deploy',
      layers: 12
    },
    'Design': {
      "class": 'icon-Design',
      layers: 12
    },
    'Implementation': {
      "class": 'icon-Implementation',
      layers: 12
    },
    'Test': {
      "class": 'icon-Test',
      layers: 12
    },
    'Checklist Item': {
      "class": 'icon-Checklist',
      layers: 12
    },
    'Code Example': {
      "class": 'icon-CodeExample',
      layers: 8
    },
    'Guideline': {
      "class": 'icon-Guideline',
      layers: 12
    },
    'How To': {
      "class": 'icon-HowTo',
      layers: 12
    },
    'Principle': {
      "class": 'icon-Principle',
      layers: 12
    },
    'Requirement': {
      "class": 'icon-Requirement',
      layers: 12
    },
    'Vulnerability': {
      "class": 'icon-Vulnerabilities',
      layers: 12
    },
    'Default': {
      "class": 'icon-Default',
      layers: 12
    }
  };

  Icon_Service = (function() {
    function Icon_Service() {
      this.simple_Element_Html = bind(this.simple_Element_Html, this);
      this.simple_Element = bind(this.simple_Element, this);
      this.element_Html = bind(this.element_Html, this);
      this.element = bind(this.element, this);
      this.mappings = mappings;
    }

    Icon_Service.prototype.element = function(key) {
      var element, i, j, mapping, ref;
      mapping = this.mappings[key];
      if (!mapping) {
        mapping = this.mappings['Default'];
      }
      element = this.simple_Element(mapping["class"], key);
      for (i = j = 1, ref = mapping.layers; j <= ref; i = j += 1) {
        element.append("<span class='path" + i + "'>");
      }
      return element;
    };

    Icon_Service.prototype.element_Html = function(key) {
      var ref;
      return (ref = this.element(key)[0]) != null ? ref.outerHTML : void 0;
    };

    Icon_Service.prototype.simple_Element = function(name, title) {
      var element;
      element = angular.element('<span>');
      using(element[0], function() {
        this.className = name;
        if (title) {
          return this.title = title;
        }
      });
      return element;
    };

    Icon_Service.prototype.simple_Element_Html = function(name, title) {
      return this.simple_Element(name, title)[0].outerHTML;
    };

    return Icon_Service;

  })();

  angular.module('TM_App').service('icon_Service', function() {
    return new Icon_Service();
  });

}).call(this);

(function() {
  var Query_Service, app,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  app = angular.module('TM_App');

  Query_Service = (function() {
    function Query_Service(options) {
      this.reload_Data = bind(this.reload_Data, this);
      this.load_Query = bind(this.load_Query, this);
      this.index_Query_Filters = bind(this.index_Query_Filters, this);
      this.load_Data = bind(this.load_Data, this);
      this.TM_API = options.TM_API;
      this.$rootScope = options.$rootScope;
      this.index_Query = 'query-6234f2d47eb7';
      this.default_Page_From = 0;
      this.default_Page_To = 10;
    }

    Query_Service.prototype.load_Data = function() {
      return this.load_Query(this.index_Query);
    };

    Query_Service.prototype.index_Query_Filters = function(callback) {
      return this.TM_API.query_view_model(this.index_Query, null, 0, 0, (function(_this) {
        return function(data) {
          return callback(data.filters);
        };
      })(this));
    };

    Query_Service.prototype.load_Query = function(query_Id, filters, from, to, callback) {
      from = from || this.default_Page_From;
      to = to || this.default_Page_To;
      this.$rootScope.$broadcast('loading_query', query_Id, filters, from, to);
      return this.TM_API.query_view_model(query_Id, filters, from, to, (function(_this) {
        return function(data) {
          _this.$rootScope.$broadcast('view_model_data', data);
          if (callback) {
            return callback();
          }
        };
      })(this));
    };

    Query_Service.prototype.reload_Data = function() {
      this.$rootScope.$broadcast('clear_filters');
      this.$rootScope.$broadcast('clear_query');
      return this.load_Data();
    };

    return Query_Service;

  })();

  app.service('query_Service', function($rootScope, TM_API) {
    return new Query_Service({
      TM_API: TM_API,
      $rootScope: $rootScope
    });
  });

}).call(this);

(function() {
  var TM_API, app,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  app = angular.module('TM_App');

  TM_API = (function() {
    function TM_API(q, http, timeout, state) {
      this.tmConfig = bind(this.tmConfig, this);
      this.gatewaysLibrary = bind(this.gatewaysLibrary, this);
      this.popular_Search = bind(this.popular_Search, this);
      this.pwd_reset = bind(this.pwd_reset, this);
      this.currentuser = bind(this.currentuser, this);
      this.signup = bind(this.signup, this);
      this.logout = bind(this.logout, this);
      this.login = bind(this.login, this);
      this.top_Articles = bind(this.top_Articles, this);
      this.recent_Articles = bind(this.recent_Articles, this);
      this.article = bind(this.article, this);
      this.docs_Page = bind(this.docs_Page, this);
      this.docs_Library = bind(this.docs_Library, this);
      this.get_articles_parent_queries = bind(this.get_articles_parent_queries, this);
      this.query_from_text_search = bind(this.query_from_text_search, this);
      this.query_view_model = bind(this.query_view_model, this);
      this.get_Words = bind(this.get_Words, this);
      this.$q = q;
      this.$http = http;
      this.$timeout = timeout;
      this.cache_Articles = {};
      this.cache_Guides = null;
      this.cache_Query_View_Model = {};
      this.currentUser = null;
      this.config = null;
      this.tmrecentArticles = null;
      this.topArticles = null;
    }

    TM_API.prototype.get_Words = function(term, callback) {
      var url;
      url = "/angular/api/auto-complete?term=" + term;
      return this.$http.get(url).success(function(data) {
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

    TM_API.prototype.query_view_model = function(id, filters, from, to, callback) {
      var url;
      if (filters) {
        url = "/api/data/query_view_model_filtered/" + id + "/" + filters + "/" + from + "/" + to;
      } else {
        url = "/api/data/query_view_model/" + id + "/" + from + "/" + to;
      }
      if (this.cache_Query_View_Model[url]) {
        return callback(this.cache_Query_View_Model[url]);
      } else {
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.cache_Query_View_Model[url] = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.query_from_text_search = function(text, callback) {
      var url;
      url = "/api/search/query_from_text_search/" + text;
      return this.$http.get(url).success(function(data) {
        return callback(data);
      });
    };

    TM_API.prototype.get_articles_parent_queries = function(article_Ids, ignore_Titles, callback) {
      var url;
      url = "/api/data/articles_parent_queries/" + (article_Ids.join(','));
      return this.$http.get(url).success(function(data) {
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

    TM_API.prototype.docs_Library = function(callback) {
      var url;
      url = "/jade/json/docs/library";
      return this.$http.get(url).success(function(data) {
        return callback(data);
      });
    };

    TM_API.prototype.docs_Page = function(article_Id, callback) {
      var url;
      url = "/jade/json/docs/" + article_Id;
      return this.$http.get(url).success(callback);
    };

    TM_API.prototype.article = function(article_Id, callback) {
      var url;
      if (this.cache_Articles[article_Id]) {
        return this.$timeout((function(_this) {
          return function() {
            return callback(_this.cache_Articles[article_Id]);
          };
        })(this));
      } else {
        url = "/jade/json/article/" + article_Id;
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.cache_Articles[article_Id] = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.recent_Articles = function(callback) {
      var url;
      if (this.tmrecentArticles) {
        return callback(this.tmrecentArticles);
      } else {
        url = "/jade/json/recentarticles";
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.tmrecentArticles = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.top_Articles = function(callback) {
      var url;
      if (this.topArticles) {
        return callback(this.topArticles);
      } else {
        url = "/jade/json/toparticles";
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.topArticles = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.login = function(username, password, callback) {
      var postData, url;
      url = "/json/user/login";
      postData = {
        username: username,
        password: password
      };
      return this.$http.post(url, postData).success(callback);
    };

    TM_API.prototype.logout = function(callback) {
      var postData, url;
      url = "/json/user/logout";
      postData = {};
      return this.$http.post(url, postData).success(callback);
    };

    TM_API.prototype.signup = function(username, password, confirmpassword, email, firstname, lastname, company, title, country, state, callback) {
      var postData, url;
      url = "/json/user/signup";
      postData = {
        username: username,
        password: password,
        'confirm-password': confirmpassword,
        email: email,
        firstname: firstname,
        lastname: lastname,
        company: company,
        title: title,
        country: country,
        state: state
      };
      return this.$http.post(url, postData).success(callback);
    };

    TM_API.prototype.currentuser = function(callback) {
      var url;
      url = "/json/user/currentuser";
      if ((this.currentUser != null) && this.currentUser.UserEnabled) {
        return callback(this.currentUser);
      } else {
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.currentUser = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.pwd_reset = function(email, callback) {
      var postData, url;
      url = "/json/user/pwd_reset";
      postData = {
        email: email
      };
      return this.$http.post(url, postData).success(callback);
    };

    TM_API.prototype.popular_Search = function(callback) {
      var url;
      url = "/jade/json/search/recentsearch";
      return this.$http.get(url).success((function(_this) {
        return function(data) {
          return callback(data);
        };
      })(this));
    };

    TM_API.prototype.gatewaysLibrary = function(callback) {
      var url;
      if (this.cache_Guides) {
        return callback(this.cache_Guides);
      } else {
        url = "/jade/json/gateways/library";
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.tmConfig = function(callback) {
      var url;
      url = "/json/tm/config";
      if (this.config) {
        return callback(this.config);
      } else {
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.config = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.verifyInternalUser = function(userEmail, callback) {
      this.tmConfig((function(_this) {
        return function(configFile) {
          var allowedEmailDomains, email;
          allowedEmailDomains = configFile.allowedEmailDomains;
          email = userEmail;
          return allowedEmailDomains != null ? allowedEmailDomains.some(function(domain) {
            if (email != null ? email.match(domain.toString()) : void 0) {
              return callback(configFile.githubContentUrl);
            }
          }) : void 0;
        };
      })(this));
      return callback(null);
    };

    return TM_API;

  })();

  app.service('TM_API', (function(_this) {
    return function($q, $http, $timeout) {
      return new TM_API($q, $http, $timeout);
    };
  })(this));

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.service('$$', function() {
    var $$;
    $$ = function(element) {
      if (element) {
        if (!element.$attr) {
          element.$attr = function() {
            var attr, i, len, ref, result;
            result = {};
            if (element) {
              ref = element.attributes;
              for (i = 0, len = ref.length; i < len; i++) {
                attr = ref[i];
                result[attr.name] = attr.value;
              }
            }
            return result;
          };
          element.$query = function(selector) {
            return $$(element.querySelector(selector));
          };
          element.$query_All = function(selector) {
            return $$(element.querySelectorAll(selector));
          };
          element.$html = function() {
            return element.innerHTML;
          };
          element.$text = function() {
            return element.innerText;
          };
          element.$click = function() {
            return angular.element(element).triggerHandler('click');
          };
          element.$scope = function() {
            return angular.element(element).scope();
          };
        }
      }
      return element;
    };
    return $$;
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Events_Controller', function($scope) {
    return $scope.test = 'asd';
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Article_Box_Controller', function($sce, $scope, icon_Service) {
    return using($scope, function() {
      var ref, ref1, ref2;
      this.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html((ref = this.article) != null ? ref.technology : void 0));
      this.icon_Type = $sce.trustAsHtml(icon_Service.element_Html((ref1 = this.article) != null ? ref1.type : void 0));
      return this.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html((ref2 = this.article) != null ? ref2.phase : void 0));
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Article_Controller', (function(_this) {
    return function($sce, $scope, $state, $stateParams, $window, $timeout, TM_API, icon_Service) {
      $scope.articleUrl = $window.location.href;
      $scope.showFeedback = false;
      $scope.articleLoaded = false;
      $scope.top_Articles = [];
      $scope.recent_Articles = [];
      $scope.topArticles = function() {
        return TM_API.top_Articles(function(articles) {
          if ((articles != null)) {
            return angular.forEach(articles, function(article) {
              var id, title;
              article.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article.technology));
              article.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article.type));
              article.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article.phase));
              id = article.id.remove('article-');
              title = article.title.replace(new RegExp(' ', 'g'), '-').remove('.');
              article.url = '/angular/user/article/' + id + '/' + title;
              return $scope.top_Articles.push(article);
            });
          }
        });
      };
      $scope.recentArticles = function() {
        return TM_API.recent_Articles(function(articles) {
          if ((articles != null)) {
            return angular.forEach(articles, function(article) {
              var id, title;
              article.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article.technology));
              article.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article.type));
              article.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article.phase));
              id = article.id.remove('article-');
              title = article.title.replace(new RegExp(' ', 'g'), '-').remove('.');
              article.url = '/angular/user/article/' + id + '/' + title;
              return $scope.recent_Articles.push(article);
            });
          }
        });
      };
      TM_API.article($stateParams.article_Id, function(article) {
        var id, title;
        if ($state.current.name === "main") {
          $scope.topArticles();
          $scope.recentArticles();
        }
        if (!angular.isObject(article)) {
          return;
        }
        $scope.mapGuideArticle(article);
        id = article.id.remove('article-');
        title = article.title.replace(new RegExp(' ', 'g'), '-').remove('.');
        article.url = '/angular/user/article/' + id + '/' + title;
        $scope.article = article;
        $scope.article_Html = $sce.trustAsHtml(article.article_Html);
        $scope.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article.technology));
        $scope.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article.type));
        $scope.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article.phase));
        $scope.articleLoaded = true;
        return TM_API.currentuser(function(userInfo) {
          if ((userInfo != null) && (userInfo != null ? userInfo.UserEnabled : void 0)) {
            return TM_API.verifyInternalUser(userInfo.Email, function(callback) {
              if (callback != null) {
                $scope.showFeedback = true;
                return $scope.githubContentUrl = callback;
              }
            });
          }
        });
      });
      $scope.mapGuideArticle = function(article) {
        return TM_API.gatewaysLibrary(function(data) {
          var i, len, ref, results, rowArticle, view;
          if (data) {
            ref = data.Views;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              view = ref[i];
              results.push((function() {
                var j, len1, ref1, results1;
                ref1 = view.Articles;
                results1 = [];
                for (j = 0, len1 = ref1.length; j < len1; j++) {
                  rowArticle = ref1[j];
                  if ((article.id === rowArticle.id) || (article.id === rowArticle.guid)) {
                    results1.push($timeout(function() {
                      return $window.location.href = '/angular/user/guides#' + article.id;
                    }));
                  } else {
                    results1.push(void 0);
                  }
                }
                return results1;
              })());
            }
            return results;
          }
        });
      };
      $scope.showFeedbackBanner = function() {
        return $scope.showFeedback;
      };
      $scope.fullArticleLoaded = function() {
        return $scope.articleLoaded;
      };
      return $scope.showGeneralFeedback = function() {
        return !$scope.showFeedback;
      };
    };
  })(this));

}).call(this);

(function() {
  angular.module('TM_App').controller('Articles_Controller', function($scope) {
    $scope.$on('apply_query', function(event, query_id) {
      if (!query_id) {
        return $scope.articles = [];
      }
    });
    $scope.$on('view_model_data', function(event, data) {
      var article, articles, i, id, len, ref, ref1, title;
      articles = [];
      if (data != null ? data.articles : void 0) {
        articles = data.articles;
        for (i = 0, len = articles.length; i < len; i++) {
          article = articles[i];
          if (article) {
            id = (ref = article.id) != null ? ref.remove('article-') : void 0;
            title = (ref1 = article.title) != null ? ref1.replace(new RegExp(' ', 'g'), '-').remove('.') : void 0;
            article.url = '/angular/user/article/' + id + '/' + title;
          }
        }
      }
      return $scope.articles = articles;
    });
    return $scope.$on('clear_articles', function() {
      return $scope.articles = [];
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Breadcrumbs_Controller', function($scope, $rootScope, breadcrumbs_Service) {
    return using($scope, function() {
      this.visible = false;
      this.breadcrumbs_Service = breadcrumbs_Service;
      this.$on('clear_query', (function(_this) {
        return function(event, data) {
          return _this.breadcrumbs_Service.clear_query();
        };
      })(this));
      this.$on('view_model_data', (function(_this) {
        return function(event, data) {
          _this.breadcrumbs_Service.add_Breadcrumb(data.id, data.title);
          return _this.refresh_Breadcrumbs();
        };
      })(this));
      this.$on('pop_state', (function(_this) {
        return function(event, url) {
          _this.breadcrumbs_Service.move_Back();
          return _this.refresh_Breadcrumbs();
        };
      })(this));
      this.$on('refresh_breadcrumbs', (function(_this) {
        return function(event, data) {
          return _this.refresh_Breadcrumbs();
        };
      })(this));
      this.refresh_Breadcrumbs = (function(_this) {
        return function() {
          _this.breadcrumbs = _this.breadcrumbs_Service.current_Breadcrumbs();
          return _this.visible = true;
        };
      })(this);
      return this.load_Query = this.breadcrumbs_Service.on_Selected;
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Filters_Active_Controller', function($sce, $scope, $rootScope, query_Service, icon_Service) {
    $scope.current_Filters = {};
    $scope.current_Query_Id = null;
    $scope.$on('apply_filter', function(event, filter_Id, filter_Title, metadata_Title, filter_Refresh) {
      var icon;
      if (filter_Refresh == null) {
        filter_Refresh = true;
      }
      if (filter_Id) {
        icon = $sce.trustAsHtml(icon_Service.element_Html(filter_Title));
        $scope.current_Filters[filter_Id] = {
          filter_Title: filter_Title,
          filter_Icon: icon,
          metadata_Title: metadata_Title
        };
        if (filter_Refresh) {
          return $scope.refresh_Filters();
        }
      }
    });
    $scope.$on('clear_filter', function(event, filter_Id, metadata_Title) {
      var key, ref, results, value;
      if (metadata_Title) {
        ref = $scope.current_Filters;
        results = [];
        for (key in ref) {
          value = ref[key];
          if (value.metadata_Title === metadata_Title) {
            results.push(delete $scope.current_Filters[key]);
          } else {
            results.push(void 0);
          }
        }
        return results;
      } else {
        return delete $scope.current_Filters[filter_Id];
      }
    });
    $scope.$on('clear_filters', function() {
      return $scope.current_Filters = {};
    });
    $scope.$on('view_model_data', function(event, data) {
      return $scope.current_Query_Id = data != null ? data.id : void 0;
    });
    $scope.$on('apply_query', function(event, query_Id) {
      $scope.current_Query_Id = query_Id;
      return $scope.refresh_Filters();
    });
    $scope.$on('set_page', function(event, page, from, to) {
      return $scope.refresh_Filters(from, to);
    });
    $scope.refresh_Filters = function(from, to) {
      var filters, query_Id;
      query_Id = $scope.current_Query_Id;
      filters = $scope.current_Filters.keys().join(',');
      if (filters === '') {
        return query_Service.load_Query(query_Id, null, from, to);
      } else {
        return query_Service.load_Query(query_Id, filters, from, to);
      }
    };
    return $scope.clear_Filter = function(filter_Id) {
      $rootScope.$broadcast('clear_filter', filter_Id);
      delete $scope.current_Filters[filter_Id];
      return $scope.refresh_Filters();
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Filters_Controller', function($sce, $scope, $rootScope, query_Service, icon_Service) {
    $scope.current_Filters = {};
    $scope.hide_Metadata = {};
    $scope.visible = false;
    $scope.$on('view_model_data', function(event, data) {
      var key, ref, result, results, value;
      $scope.visible = true;
      if (data != null ? data.filters : void 0) {
        $scope.filters = data.filters;
        ref = $scope.filters;
        results = [];
        for (key in ref) {
          value = ref[key];
          results.push((function() {
            var i, len, results1;
            results1 = [];
            for (i = 0, len = value.length; i < len; i++) {
              result = value[i];
              results1.push(result.icon = $sce.trustAsHtml(icon_Service.element_Html(result.title)));
            }
            return results1;
          })());
        }
        return results;
      } else {
        return $scope.filters = [];
      }
    });
    $scope.$on('view_filters', function(event, data) {
      return $scope.view_Filters = data;
    });
    $scope.$on('apply_filter', function(event, filter_Id, filter_Title, metadata_Title) {
      $scope.current_Filters[filter_Id] = {
        filter_Id: filter_Id,
        filter_Title: filter_Title,
        metadata_Title: metadata_Title
      };
      return $scope.map_Visibility();
    });
    $scope.$on('clear_filter', function(event, filter_Id) {
      delete $scope.current_Filters[filter_Id];
      return $scope.map_Visibility();
    });
    $scope.apply_Filter = function(filter_Id, filter_Title, metadata_Title) {
      var div;
      div = document.querySelector('.scrolling-results');
      angular.element(div).css('height', '75%');
      return $rootScope.$broadcast('apply_filter', filter_Id, filter_Title, metadata_Title);
    };
    return $scope.map_Visibility = function() {
      var div, item, ref, results, value;
      delete $scope.hide_Metadata['Technology'];
      delete $scope.hide_Metadata['Type'];
      delete $scope.hide_Metadata['Phase'];
      if (Object.keys($scope.current_Filters).length > 0) {
        ref = $scope.current_Filters;
        results = [];
        for (item in ref) {
          value = ref[item];
          results.push($scope.hide_Metadata[value.metadata_Title] = true);
        }
        return results;
      } else {
        div = document.querySelector('.scrolling-results');
        return angular.element(div).css('height', '80%');
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('dynamic', function($compile) {
    return {
      restrict: 'A',
      replace: true,
      link: function(scope, ele, attrs) {
        scope.$watch(attrs.dynamic, function(html) {
          ele.html(html);
          $compile(ele.contents())(scope);
        });
      }
    };
  }).controller('Gateways_Controller', function($sce, $scope, TM_API, $location) {
    $scope.Library = {};
    $scope.show_Article = function(article) {
      if (article) {
        return TM_API.article(article, function(article_Data) {
          var attr, href, i, len, link, links, originalHtml, value;
          if (article_Data) {
            $scope.article = article_Data;
            $scope.title = article_Data.title;
            links = angular.element(article_Data.article_Html).find('a');
            if ((links != null) && links.length > 0) {
              for (i = 0, len = links.length; i < len; i++) {
                link = links[i];
                originalHtml = link.outerHTML;
                href = link.attributes.href;
                if (href.value.contains("/article/")) {
                  href.value = href.value.replace("/article/", '');
                }
                if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(href.value)) {
                  value = href.value.split('-')[4];
                  attr = "show_Article('" + value + "')";
                  link.attributes.href.value = link.attributes.href.value.replace(href.value, '#article-' + value);
                  link.setAttribute("ng-click", attr);
                  article_Data.article_Html = article_Data.article_Html.replace(originalHtml, link.outerHTML);
                }
              }
            }
            $scope.content = article_Data.article_Html;
            return TM_API.currentuser(function(userInfo) {
              if ((userInfo != null) && (userInfo != null ? userInfo.UserEnabled : void 0)) {
                return TM_API.verifyInternalUser(userInfo.Email, function(callback) {
                  $scope.articleLoaded = true;
                  if (callback != null) {
                    $scope.showFeedback = true;
                    return $scope.githubContentUrl = callback;
                  }
                });
              }
            });
          }
        });
      }
    };
    $scope.showFeedbackBanner = function() {
      return $scope.showFeedback;
    };
    $scope.fullArticleLoaded = function() {
      return $scope.articleLoaded;
    };
    $scope.showGeneralFeedback = function() {
      return !$scope.showFeedback;
    };
    $scope.load_Library = function() {
      return TM_API.gatewaysLibrary(function(data) {
        var articleId, ref, ref1, ref2, ref3;
        if (data) {
          $scope.Library.title = data.title;
          $scope.Library.Views = data.Views;
          articleId = $location.$$hash;
          if (articleId) {
            return $scope.show_Article(articleId);
          } else {
            return $scope.show_Article(data != null ? (ref = data.Views) != null ? (ref1 = ref.first()) != null ? (ref2 = ref1.Articles) != null ? (ref3 = ref2.first()) != null ? ref3.id : void 0 : void 0 : void 0 : void 0 : void 0);
          }
        }
      });
    };
    $scope.showMetadata = function() {
      var ref, ref1, ref2;
      return (((ref = $scope.article) != null ? ref.phase : void 0) != null) || (((ref1 = $scope.article) != null ? ref1.technology : void 0) != null) || (((ref2 = $scope.article) != null ? ref2.technology : void 0) != null);
    };
    return $scope.load_Library();
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Index_Controller', function($scope, query_Service, $stateParams, $location, $state, $window, $rootScope, $timeout) {
    window._state = $state;
    window._scope = $scope;
    window._stateParams = $stateParams;
    window._location = $location;
    window._window = $window;
    window._rootScope = $rootScope;
    using($scope, function() {
      this.history = {};
      this.view_Filters = false;
      this.column_Left = 'col-3';
      this.column_Middle = 'col-9';
      this.column_Right = 'col-0';
      this.current_Query_Id = null;
      this.current_Filters = null;
      return this.$on('toggle_filters', (function(_this) {
        return function(event) {
          $scope.view_Filters = !$scope.view_Filters;
          if ($scope.view_Filters) {
            _this.column_Middle = 'col-6';
            return _this.column_Right = 'col-3';
          } else {
            _this.column_Middle = 'col-9';
            return _this.column_Right = 'col-0';
          }
        };
      })(this));
    });
    $scope.load_Index_Data = function() {
      var filters, query_Id, search_Text;
      search_Text = $location != null ? typeof $location.search === "function" ? $location.search().text : void 0 : void 0;
      query_Id = $stateParams.query_Id;
      filters = $stateParams.filters;
      if (search_Text) {
        return $rootScope.$broadcast('set_search', search_Text);
      } else if (query_Id) {
        return $timeout(function() {
          return query_Service.load_Query(query_Id, filters, null, null, function() {
            return $rootScope.$broadcast('apply_filters', filters);
          });
        });
      } else {
        return $timeout(function() {
          return query_Service.reload_Data();
        });
      }
    };
    $scope.resolve_Index_State = function(query_Id, filters) {
      var value;
      value = 'index';
      if (query_Id && filters) {
        value += '_query_id_filters';
      }
      if (query_Id && !filters) {
        value += '_query_id';
      }
      return value;
      if (query_Id && filters) {
        return 'index_query_id_filters';
      }
      if (query_Id && !filters) {
        return 'index_query_id';
      }
      return 'index';
    };
    $scope.update_Location_Url = function(query_Id, filters) {
      if ((!filters) && query_Id === 'query-6234f2d47eb7') {
        return;
      }
      $state.go($scope.resolve_Index_State(query_Id, filters), {
        query_Id: query_Id,
        filters: filters
      }, {
        notify: false,
        reload: false
      });
      $scope.current_Query_Id = query_Id;
      return $scope.current_Filters = filters;
    };
    $scope.$on('loading_query', function(event, query_Id, filters, from, to) {
      if ($scope.current_Query_Id !== query_Id || $scope.current_Filters !== filters) {
        return $scope.update_Location_Url(query_Id, filters);
      }
    });
    if ($window.location.href && !$window.location.href.contains('index')) {
      return;
    }
    if ($stateParams.filters && $stateParams.query_Id && $location.url() !== ("/index/" + $stateParams.query_Id + "/" + $stateParams.filters)) {
      return;
    }
    if ($stateParams.query_Id && !$stateParams.filters && $location.url() !== ("/index/" + $stateParams.query_Id)) {
      return;
    }
    return $scope.load_Index_Data();
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Logout_Controller', function(TM_API, $window) {
    return TM_API.logout(function(callback) {
      $window.sessionStorage["userInfo"] = null;
      $window.sessionStorage.clear();
      return $window.location.href = '/angular/guest/home';
    });
  });

}).call(this);

(function() {
  var modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  angular.module('TM_App').controller('Pagination_Controller', function($scope, $rootScope) {
    var model;
    model = {
      page: 1,
      page_Split: 10,
      data_Size: 0,
      pages: [],
      page_Splits: [4, 10, 20, 50, 100]
    };
    $scope.query_Id = null;
    $scope.model = model;
    $scope.visible = false;
    $scope.set_Paging_Message = function() {
      var currentPage, endNo, recordsPerPage, remainingArticles, startNo, totalRecords;
      recordsPerPage = model.page_Split;
      totalRecords = model.data_Size;
      currentPage = model.page;
      if (currentPage === 1 && recordsPerPage > totalRecords) {
        if (totalRecords === 1) {
          $rootScope.pagginMessage = "Showing " + totalRecords + " article";
        } else {
          $rootScope.pagginMessage = "Showing " + totalRecords + " articles";
        }
        return;
      }
      if (currentPage === 1) {
        return $rootScope.pagginMessage = "Showing articles 1 to " + recordsPerPage + " out of " + totalRecords;
      } else {
        startNo = ((currentPage - 1) * recordsPerPage) + 1;
        if ((currentPage * recordsPerPage) + 1 > totalRecords) {
          endNo = totalRecords;
          remainingArticles = (((currentPage - 1) * recordsPerPage) + 1) - endNo;
          if (remainingArticles === 0) {
            $rootScope.pagginMessage = "Showing article " + totalRecords + " out of  " + totalRecords;
          } else {
            $rootScope.pagginMessage = "Showing article " + (((currentPage - 1) * recordsPerPage) + 1) + " to " + totalRecords + " out of " + totalRecords;
          }
          return;
        } else {
          endNo = currentPage * recordsPerPage;
        }
        return $rootScope.pagginMessage = "Showing articles  " + startNo + " to " + endNo + " out of " + totalRecords;
      }
    };
    $scope.$on('view_model_data', function(event, data) {
      var i, results, split;
      $scope.visible = true;
      if (!(data != null ? data.size : void 0)) {
        return model.pages = null;
      } else {
        model.data_Size = data != null ? data.size : void 0;
        $scope.query_Id = data.id;
        if (data.size < model.page_Split) {
          split = 1;
        } else {
          split = ~~(data.size / model.page_Split);
          if ((modulo(data.size, model.page_Split)) > 0) {
            split++;
          }
        }
        model.pages = (function() {
          results = [];
          for (var i = 1; 1 <= split ? i <= split : i >= split; 1 <= split ? i++ : i--){ results.push(i); }
          return results;
        }).apply(this);
        return $scope.set_Paging_Message();
      }
    });
    $scope.set_Page = function() {
      var from, to;
      if (model.page) {
        from = (model.page - 1) * model.page_Split;
        to = model.page * model.page_Split;
        return $rootScope.$broadcast('set_page', model.page, from, to);
      } else {
        model.page = 1;
        return $scope.set_Paging_Message();
      }
    };
    $scope.set_Page_Split = function(recordsPerPage) {
      model.page = 1;
      if (recordsPerPage) {
        model.page_Split = recordsPerPage;
      }
      $scope.set_Page();
      return $rootScope.$broadcast('set_page_split', model.page_Split);
    };
    $scope.previous_Page = function() {
      if (model.page > 1) {
        model.page--;
        return $scope.set_Page();
      }
    };
    $scope.next_Page = function() {
      if (model.page < model.pages.size()) {
        model.page++;
        return $scope.set_Page();
      }
    };
    $scope.$on('keyup', function(event, data) {
      if (data.keyIdentifier === 'Left') {
        $scope.previous_Page();
      }
      if (data.keyIdentifier === 'Right') {
        return $scope.next_Page();
      }
    });
    $scope.goToTop = function() {
      var div;
      div = document.querySelector('.scrolling-results');
      if (angular.element(div)[0]) {
        return angular.element(div)[0].scrollTop = 0;
      }
    };
    return $scope.ShowTopButton = function() {
      var div;
      div = document.querySelector('.scrolling-results');
      if (angular.element(div)[0]) {
        return angular.element(div)[0].scrollHeight > angular.element(div)[0].clientHeight;
      } else {
        return false;
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Queries_Controller', function($scope, $rootScope, $window) {
    $scope.visible = false;
    $scope.$on('view_model_data', function(event, data) {
      $scope.visible = true;
      $scope.title = data.title;
      return $scope.containers = data.queries;
    });
    $scope.load_Query = function(query_Id) {
      return $rootScope.$broadcast('apply_query', query_Id);
    };
    return $scope.show_Previous_Query = function() {
      return $window.history.back();
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Recommendations_Controller', function($scope, $rootScope, TM_API) {
    $scope.$on('apply_query', function(event, term) {
      return $scope.words = [];
    });
    $scope.$on('search_term', function(event, term, selected_Technology) {
      if ((selected_Technology != null ? selected_Technology.title : void 0) !== "All Technologies") {
        return $scope.words = [];
      } else {
        if (term === '') {
          return $scope.words = [];
        } else {
          return TM_API.get_Words(term, function(words) {
            return $scope.words = words;
          });
        }
      }
    });
    $scope.select_Word = function(word) {
      return $rootScope.$broadcast('set_search', word);
    };
    return $scope.words = [];
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Results_Controller', function($scope, $rootScope, query_Service) {
    $scope.current_Page = 1;
    $scope.current_Page_Split = 10;
    $scope.results_Size = 0;
    $scope.visible = false;
    $scope.$on('view_model_data', function(event, data) {
      $scope.visible = true;
      return $scope.results_Size = data != null ? data.size : void 0;
    });
    $scope.$on('set_page', (function(_this) {
      return function(event, data) {
        return $scope.current_Page = data;
      };
    })(this));
    $scope.$on('set_page_split', (function(_this) {
      return function(event, data) {
        return $scope.current_Page_Split = data;
      };
    })(this));
    $scope.toggle_Filters = function() {
      return $rootScope.$broadcast('toggle_filters', null);
    };
    return $scope.toggle_Filters();
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Search_Bar_Controller', function($rootScope, $scope, $state, $location, $timeout, query_Service, $element, $document, TM_API) {
    using($scope, function() {
      this.query_Id = null;
      this.selected_Technology = null;
      this.previous_Filter_Id = null;
      this.technologies = {};
      this.technologies_By_Id = {};
      this.text = '';
      this.words = [];
      this.searchPlaceholder = "Search All of TEAM Mentor";
      return this.index_States = ['index', 'index_query_id', 'index_query_id_filters'];
    });
    $scope.$on('clear_search', function() {
      return $scope.text = '';
    });
    $scope.$on('clear_filter', function(event, filter_Id) {
      if (filter_Id) {
        if ($scope.technologies_By_Id[filter_Id]) {
          $scope.selected_Technology = $scope.technologies_By_Id['All'];
        }
      }
      return $scope.select_Technology();
    });
    $scope.$on('apply_filter', function(event, filter_Id, filter_Title, metadata_Title) {
      var ref;
      if (metadata_Title === 'Technology') {
        if (filter_Title !== ((ref = $scope.selected_Technology) != null ? ref.title : void 0)) {
          $scope.selected_Technology = $scope.technologies_By_Id[filter_Id];
          $scope.previous_Filter_Id = filter_Id;
          return $scope.select_Technology();
        }
      }
    });
    $scope.$on('apply_filters', function(event, filters) {
      var filter, filter_Id, i, len, ref, results;
      if (!$scope.filters_By_Id) {
        console.log('$scope.filters_By_Id NOT READY');
        return;
      }
      if (filters) {
        ref = filters.split(',');
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          filter_Id = ref[i];
          filter = $scope.filters_By_Id[filter_Id];
          if (filter) {
            results.push($rootScope.$broadcast('apply_filter', filter.id, filter.title, filter.metadata_Title, false));
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    });
    $scope.$on('set_search', function(event, text) {
      $scope.text = text;
      return $scope.submit();
    });
    $scope.$on('update_search', function(event, text) {
      return $scope.text = text;
    });
    $scope.set_technologies_By_Id = function() {
      return query_Service.index_Query_Filters(function(filters) {
        var filter, i, j, key, len, len1, value;
        $scope.technologies = [
          {
            title: 'All Technologies',
            id: query_Service.index_Query
          }
        ];
        $scope.technologies_By_Id = {
          'All': $scope.technologies[0]
        };
        $scope.filters_By_Id = {};
        if (filters) {
          for (key in filters) {
            value = filters[key];
            for (i = 0, len = value.length; i < len; i++) {
              filter = value[i];
              filter.metadata_Title = key;
              $scope.filters_By_Id[filter.id] = filter;
            }
            if (key === 'Technology' && value.size) {
              for (j = 0, len1 = value.length; j < len1; j++) {
                filter = value[j];
                $scope.technologies.push(filter);
                $scope.technologies_By_Id[filter.id] = filter;
              }
            }
          }
        }
        $scope.selected_Technology = $scope.technologies[0];
        return $scope.previous_Filter_Id = $scope.technologies[0].id;
      });
    };
    $scope.update_Placeholder_Text = function() {
      $scope.searchPlaceholder = "Search All of TEAM Mentor";
      if ($scope.selected_Technology) {
        if ($scope.selected_Technology.title !== 'All Technologies') {
          return $scope.searchPlaceholder = "Search " + $scope.selected_Technology.title;
        }
      }
    };
    $scope.update_Select_List = function() {
      var flex_Extra_Size, input_Size, ref, ref1, select_Size, title_Size;
      title_Size = ((ref = $scope.selected_Technology) != null ? (ref1 = ref.title) != null ? ref1.length : void 0 : void 0) * 1.2 || 16;
      flex_Extra_Size = title_Size;
      select_Size = (5 + flex_Extra_Size) + '%';
      input_Size = (85 - flex_Extra_Size) + '%';
      $element.find('select').css('flex', select_Size);
      return $element.find('input').css('flex', input_Size);
    };
    $scope.select_Technology = function() {
      $scope.update_Placeholder_Text();
      return $scope.update_Select_List();
    };
    $scope.submit = function() {
      var after_Timeout, ref;
      if (!this.index_States.contains((ref = $state.current) != null ? ref.name : void 0)) {
        $state.go('index');
        $scope.previous_Filter_Id = null;
      }
      after_Timeout = function() {
        if ($scope.text === '') {
          $rootScope.$broadcast('loading_query', null, null);
          return $scope.submit_Event($scope.selected_Technology.id, query_Service.index_Query);
        } else {
          return TM_API.query_from_text_search($scope.text, function(query_Id) {
            return $scope.submit_Event($scope.selected_Technology.id, query_Id);
          });
        }
      };
      return $timeout(after_Timeout, 250);
    };
    $scope.submit_Event = function(technology_Id, query_Id) {
      if (technology_Id !== $scope.previous_Filter_Id) {
        $rootScope.$broadcast('clear_filter', query_Id, 'Technology');
        if ($scope.selected_Technology.title !== 'All Technologies') {
          $rootScope.$broadcast('apply_filter', $scope.selected_Technology.id, $scope.selected_Technology.title, 'Technology', false);
        }
      }
      $rootScope.$broadcast('apply_query', query_Id);
      return $scope.previous_Filter_Id = technology_Id;
    };
    $scope.get_Words = function(term) {
      return $rootScope.$broadcast('search_term', term, $scope.selected_Technology);
    };
    $scope.set_technologies_By_Id();
    return $scope.select_Technology();
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Search_Controller', function($sce, $scope, TM_API) {
    return TM_API.popular_Search(function(search) {
      var baseUrl;
      baseUrl = "/angular/user/index?text=";
      angular.forEach(search, function(searchItem) {
        return searchItem.url = baseUrl + searchItem.title;
      });
      return $scope.top_Search = search;
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('User_Navigation_Controller', function($scope, $state, $window, $timeout, $rootScope, query_Service) {
    $scope.index_States = ['index', 'index_query_id', 'index_query_id_filters'];
    $scope.open_Query_State = function() {
      var ref;
      if (this.index_States.contains((ref = $state.current) != null ? ref.name : void 0)) {
        $rootScope.$broadcast('clear_filter', 'All');
        $rootScope.$broadcast('loading_query', null, null);
        return query_Service.reload_Data();
      } else {
        return $timeout(function() {
          return $state.go('index');
        });
      }
    };
    $scope.show_Loading_Image = false;
    $scope.$on('http_start', function() {
      return $scope.show_Loading_Image = true;
    });
    return $scope.$on('http_end', function() {
      return $timeout(function() {
        return $scope.show_Loading_Image = false;
      });
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Login_Controller', function($scope, TM_API, $window, $timeout, $rootScope) {
    $scope.login = function() {
      $scope.errorMessage = null;
      $scope.supportEmail = false;
      $scope.infoMessage = "...logging in ...";
      return TM_API.login($scope.username, $scope.password, (function(_this) {
        return function(data) {
          var ref, ref1, ref2;
          if (data.result === 'OK') {
            return TM_API.currentuser(function(userInfo) {
              if ((userInfo != null ? userInfo.UserEnabled : void 0)) {
                $scope.infoMessage = 'Login OK';
                $rootScope.loggedInUser = true;
                return $timeout(function() {
                  return $window.location.href = '/angular/user/index';
                });
              } else {
                $scope.infoMessage = null;
                return $scope.errorMessage = 'User account is disabled';
              }
            });
          } else {
            $scope.infoMessage = null;
            if (data != null ? (ref = data.viewModel) != null ? (ref1 = ref.errorMessage) != null ? ref1.contains('please contact us at') : void 0 : void 0 : void 0) {
              $scope.supportEmail = true;
            }
            return $scope.errorMessage = ((ref2 = data.viewModel) != null ? ref2.errorMessage : void 0) || 'Login Failed (Server error)';
          }
        };
      })(this));
    };
    $scope.showErrorMessage = function() {
      return $scope.errorMessage;
    };
    $scope.showSupportEmail = function() {
      return $scope.supportEmail;
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Pwd_Forgot_Controller', function($scope, TM_API, $location, $timeout) {
    $scope.get_Password = function() {
      $scope.infoMessage = "...sending request ...";
      return TM_API.pwd_reset($scope.email, function(data) {
        return $scope.infoMessage = data != null ? data.message : void 0;
      });
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Signup_Controller', function($scope, TM_API, $window, $timeout) {
    $scope.signup = function() {
      $scope.errorMessage = null;
      $scope.supportEmail = false;
      $scope.infoMessage = "...Signing  up ...";
      return TM_API.signup($scope.username, $scope.password, $scope.confirmpassword, $scope.email, $scope.firstname, $scope.lastname, $scope.company, $scope.title, $scope.country, $scope.state, function(data) {
        var ref, ref1, ref2;
        if ((data != null ? data.result : void 0) === 'OK') {
          $scope.infoMessage = 'Signup OK';
          return $timeout(function() {
            return $window.location.href = '/angular/user/index';
          });
        } else {
          $scope.infoMessage = null;
          if (data != null ? (ref = data.viewModel) != null ? (ref1 = ref.errorMessage) != null ? ref1.contains('please contact us at') : void 0 : void 0 : void 0) {
            $scope.supportEmail = true;
          }
          return $scope.errorMessage = (data != null ? (ref2 = data.viewModel) != null ? ref2.errorMessage : void 0 : void 0) || 'Signup Failed (Server error)';
        }
      });
    };
    $scope.showErrorMessage = function() {
      return $scope.errorMessage;
    };
    $scope.showSupportEmail = function() {
      return $scope.supportEmail;
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);
