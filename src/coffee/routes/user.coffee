app = angular.module('TM_App')

app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->

  view_Names = ['navigate', 'main']
  for view_Name in view_Names
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/#{view_Name}"


  $stateProvider.state 'article'    ,
    url        : "/article/:article_Id/:article_Title"
    controller : 'Article_Controller'
    templateUrl: '/angular/jade-html/views/article'
