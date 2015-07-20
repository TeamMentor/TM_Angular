app = angular.module('App')

app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->

  view_Names = ['navigate', 'main']
  for view_Name in view_Names
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/#{view_Name}"


  $stateProvider.state 'user'    ,
    url        : "/user"
    template   : 'a user'
