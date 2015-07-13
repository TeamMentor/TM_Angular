app = angular.module('App')

config =
  cache_Jade_Js: false

app.service 'User', ()->
  console.log 'IN USER CONFIG'
  user =
    name:'...'
    logged_In: false
  return user

app.service 'Load_Jade', ($q, $document)->
  return (jade_File, method_Name, callback)->
    method_Name = 'jade_' + method_Name
    console.log 'on Load_Jade for: ' + jade_File
    deferrer = $q.defer()

    if config.cache_Jade_Js and window[method_Name]
      callback window[method_Name], deferrer.resolve
    else
      try
        script = $document[0].createElement('script');
        src  = '/angular/jade/_layouts/landing_navbar'
        script.src = src;

        $document[0].body.appendChild(script);
        script.onload = ()->
          callback window[method_Name], deferrer.resolve
      catch error
        console.log error

    return deferrer.promise


app.config ($stateProvider, $urlRouterProvider) ->

  $urlRouterProvider.otherwise '/index'

  resolve_Navbar = ()->
    console.log '------'
    if window.user and window.user.logged_In      # this is not a good way to set this value since we are using a global bar
      return 'navbar/logged-in.html'              # the prob is that resolve_Navbar doesn't seem to have access to the $scope
    else
      return 'navbar/anonymous.html'


  resolve_Navbar_2 = (Load_Jade)->
    return Load_Jade '_layouts/landing_navbar', 'landing_navbar', (method, resolve)->
      resolve method()

  resolve_Navbar_3 = (User,$http, $document, $q)->

    deferrer = $q.defer()

    script = $document[0].createElement('script');
    src  = '/angular/jade/_layouts/landing_navbar'
    script.src = src;

    $document[0].body.appendChild(script);
    script.onload = ()->
      deferrer.resolve jade_landing_navbar({user: User })
    return deferrer.promise

    return User.logged_In.toString()

  On_Index = ($scope,User) ->
    console.log 'on index'
    console.log User
    User.logged_In = not User.logged_In
    window.user = User

  $stateProvider.state 'about'    , url: '/about', views: { 'content': { templateUrl: 'views/about.html' }, 'navbar':  { templateProvider: resolve_Navbar_2 }}
  $stateProvider.state 'docs'     , url: '/docs' , views: { 'content': { templateUrl: 'views/docs.html' }, 'navbar':  { template: '<h1>Navbar 2</h1>' }}
  $stateProvider.state 'index'    , url: '/index', views: { 'content': { templateUrl: 'views/index.html' , controller: On_Index}, 'navbar':  { templateUrl: resolve_Navbar } }
  $stateProvider.state 'features' , { url: '/features', templateUrl: 'views/features.html' }
  $stateProvider.state 'start'    , { url: '/start'   , templateUrl: 'views/start.html' }
  $stateProvider.state 'main'     , { url: '/main'    , templateUrl: 'views/main.html' }
  $stateProvider.state 'navigate' , { url: '/navigate', templateUrl: 'views/navigate.html' }
  $stateProvider.state 'article'  , { url: '/article' , templateUrl: 'views/article.html' }


  $stateProvider.state 'contacts',
    views:
      #'navbar': { template: '<h1>Navbar</h1>' }
      'navbar':  { templateUrl:'navbar/anonymous.html'}
      #'content': { template: '<h1>My Contacts</h1>' }

  $stateProvider.state('go'      ,
    {
      url: '/go/:target',
      controller: ($scope, $stateParams, $state)->
        console.log $stateParams.target
        $state.go $stateParams.target
    })

  window.stateProvider = $stateProvider



  #$locationProvider.html5Mode(true)