app = angular.module('App')

app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->

  view_Names = ['index', 'about', 'blank', 'docs','features', 'get_started']
  for view_Name in view_Names
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/#{view_Name}"