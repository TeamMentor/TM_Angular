app = angular.module('App')

app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->

  $urlRouterProvider.otherwise 'index'
  $locationProvider.html5Mode(true)