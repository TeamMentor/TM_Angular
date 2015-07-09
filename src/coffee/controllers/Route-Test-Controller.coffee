app = angular.module('App')


app.config ($stateProvider, $urlRouterProvider, $locationProvider) ->
#
# For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise '/index'
  #
  # Now set up the states

  $stateProvider.state 'about'    , { url: '/about'   , templateUrl: '../pages/about.html' }
  $stateProvider.state 'docs'     , { url: '/docs'    , templateUrl: '../pages/docs.html' }
  $stateProvider.state 'index'    , { url: '/index'   , templateUrl: '../pages/index.html' }
  $stateProvider.state 'features' , { url: '/features', templateUrl: '../pages/features.html' }
  $stateProvider.state 'start'    , { url: '/start'   , templateUrl: '../pages/start.html' }
  $stateProvider.state 'main'     , { url: '/main'    , templateUrl: '../pages/main.html' }
  $stateProvider.state 'navigate' , { url: '/navigate', templateUrl: '../pages/navigate.html' }
  $stateProvider.state 'article'  , { url: '/article' , templateUrl: '../pages/article.html' }


  $stateProvider.state('contacts', { template: '<h1>My Contacts</h1>' })
  window.stateProvider = $stateProvider

  #$locationProvider.html5Mode(true)

app.controller 'Route_Test_Controller', ($scope, $timeout, $sce, TM_API, $state)->


  $scope.test = 1231234512

  window.scope = $scope
  window.state = $state

