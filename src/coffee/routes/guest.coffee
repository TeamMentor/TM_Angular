app = angular.module('TM_App')

app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->

  view_Names = ['about', 'blank', 'docs', 'features', 'pwd_forgot', 'index', 'login', 'sign_up' ]
  for view_Name in view_Names
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/#{view_Name}"