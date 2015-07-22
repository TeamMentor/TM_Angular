app = angular.module('TM_App')

app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->

  root_Views = ['navigate', 'main']
  for view_Name in root_Views
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/#{view_Name}"

  user_Views = ['queries']
  for view_Name in user_Views
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/user/#{view_Name}"


  $stateProvider.state 'article'    ,
    url        : "/article/:article_Id/:article_Title"
    controller : 'Article_Controller'
    templateUrl: '/angular/jade-html/views/article'
