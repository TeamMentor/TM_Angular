app = angular.module('TM_App')

app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->

  root_Views = ['navigate', 'main']
  user_Views = ['index', 'articles']

  for view_Name in root_Views
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/#{view_Name}"


  for view_Name in user_Views
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/user/#{view_Name}"


  $stateProvider.state 'article'    ,
    url        : "/article/:article_Id/:article_Title"
    controller : 'Article_Controller'
    templateUrl: '/angular/jade-html/views/article'

  $stateProvider.state 'article-box'    ,
      url        : "/article-box/:article_Id/:article_Title"
      controller : 'Article_Controller'
      templateUrl: '/angular/jade-html/views/user/article_box'