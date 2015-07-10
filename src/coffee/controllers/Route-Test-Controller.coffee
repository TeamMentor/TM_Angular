app = angular.module('App')


app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->
#
# For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise '/index'
  #
  # Now set up the states

  $stateProvider.state 'about'    , { url: '/about'   , templateUrl: '../views/about.html' }
  $stateProvider.state 'docs'     , { url: '/docs'    , templateUrl: '../views/docs.html' }
  $stateProvider.state 'index'    , { url: '/index'   , templateUrl: '../views/index.html' }
  $stateProvider.state 'features' , { url: '/features', templateUrl: '../views/features.html' }
  $stateProvider.state 'start'    , { url: '/start'   , templateUrl: '../views/start.html' }
  $stateProvider.state 'main'     , { url: '/main'    , templateUrl: '../views/main.html' }
  $stateProvider.state 'navigate' , { url: '/navigate', templateUrl: '../views/navigate.html' }
  $stateProvider.state 'article'  , { url: '/article' , templateUrl: '../views/article.html' }


  $stateProvider.state('contacts', { template: '<h1>My Contacts</h1>' })
  window.stateProvider = $stateProvider

  #$locationProvider.html5Mode(true)

app.controller 'Route_Test_Controller', ($scope, $timeout, $sce, TM_API, $state)->


  $scope.test = 1231234512

  window.scope = $scope
  window.state = $state

