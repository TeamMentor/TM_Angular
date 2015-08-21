app = angular.module('TM_App')

app.config ($stateProvider, routes_Names) ->


  for view_Name in routes_Names.views.user_Root
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/#{view_Name}"


  for view_Name in routes_Names.views.user_User
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}",
      controller : 'Article_Controller'
      templateUrl: "/angular/jade-html/views/user/#{view_Name}"


  $stateProvider.state 'article',
    url        : "/article/:article_Id/:article_Title"
    controller : 'Article_Controller'
    templateUrl: '/angular/jade-html/views/user/article'

  $stateProvider.state 'article-box'    ,
    url        : "/article-box/:article_Id/:article_Title"
    controller : 'Article_Controller'
    templateUrl: '/angular/jade-html/views/user/article_box'

  $stateProvider.state 'index_query_id'    ,
    url        : "/index/:query_Id"
    #controller : 'Index_Controller'
    templateUrl: '/angular/jade-html/views/user/index'