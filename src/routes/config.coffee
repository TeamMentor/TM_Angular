app = angular.module('TM_App')

app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->
  $urlRouterProvider.otherwise 'error'
  $locationProvider.html5Mode(true)