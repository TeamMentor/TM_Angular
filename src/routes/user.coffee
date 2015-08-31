app = angular.module('TM_App')

app.config ($stateProvider, routes_Names) ->


  for view_Name in routes_Names.views.user_Root
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/#{view_Name}"


  for view_Name in routes_Names.views.user_User
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}",
      templateUrl: "/angular/jade-html/views/user/#{view_Name}"


  $stateProvider.state 'logout'    ,
    url        : "/logout"
    controller : 'Logout_Controller'

  $stateProvider.state 'article',
    url        : "/article/:article_Id/:article_Title"
    templateUrl: '/angular/jade-html/views/user/article'

  $stateProvider.state 'guid',
    url        : "/:article_Id"
    templateUrl: '/angular/jade-html/views/user/article'


  $stateProvider.state 'article-box'    ,
    url        : "/article-box/:article_Id/:article_Title"
    templateUrl: '/angular/jade-html/views/user/article_box'

  $stateProvider.state 'index_query_id'    ,
    url        : "/index/:query_Id"
    #controller : 'Index_Controller'
    templateUrl: '/angular/jade-html/views/user/index'

app.run ($rootScope,$window,AuthService,routes_Names) =>
  $rootScope.$on '$stateChangeStart', (event, next, current) =>
    if routes_Names.views.guest.indexOf(next.name) > -1 || next.name =="docs"
      return
    else
      userInfo = AuthService.currentUser()
      if (userInfo? && userInfo?.UserEnabled)
        return
      else
        $window.location.href = '/angular/guest/login'
  return