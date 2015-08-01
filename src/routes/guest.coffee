app = angular.module('TM_App')

app.service 'ui_Routes',  ()->

app.config ($stateProvider, routes_Names) ->
  for view_Name in routes_Names.guest
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/#{view_Name}"