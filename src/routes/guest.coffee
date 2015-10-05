app = angular.module('TM_App')

app.service 'ui_Routes',  ()->

app.config ($stateProvider, routes_Names) ->
  for view_Name in routes_Names.views.guest
    $stateProvider.state view_Name    ,
      url        : "/#{view_Name}"
      templateUrl: "/angular/jade-html/views/guest/#{view_Name}"

  $stateProvider.state 'pwd_reset'    ,
    url        : "/pwd_reset/:username/:token"
    templateUrl: "/angular/jade-html/views/guest/pwd_reset"

  $stateProvider.state 'docs_id'    ,
    url        : "/docs/:id"
    templateUrl: "/angular/jade-html/views/docs"
