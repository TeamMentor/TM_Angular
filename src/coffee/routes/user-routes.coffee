return

app = angular.module('App')


app.service 'User', ()->
  user =
    name:'...'
    logged_In: true
  return user




app.config ($stateProvider, $urlRouterProvider) ->

  $urlRouterProvider.otherwise '/index'

  resolve_Navbar = (Load_Jade, User)->
    if User.logged_In
      name = 'logged_in'
    else
      name = 'anonymous'

    file = "navbar/#{name}"
    return Load_Jade file, name, (method, resolve)->
      resolve method()

  resolve_View = (page)->
    (Load_Jade, User)->
      return Load_Jade "views/#{page}", page, (method, resolve)->
        resolve '<span ng-bind-html="content_HTML"></span>'
        #resolve 'method()'

  View_Controller = (page)->
    ($rootScope, $scope,User, $sce, $state, $stateParams, TM_API) ->

      window.state = $state
      window.scope = $scope

      if page is 'logout'
        User.logged_In = false
        return $state.go 'index'
      if page is 'get_started'
        User.logged_In = true
        page = 'main'
        return $state.go 'navigate'

      method_Name = "jade_#{page}"
      if page is 'navigate'
        Navigate_Controller($rootScope, $scope, $sce, $stateParams, TM_API)
      else
        if window[method_Name]
          $scope.content_HTML =  $sce.trustAsHtml window[method_Name]()  # this is not working all the time
          #console.log $compile window[method_Name]()($scope)

  Navigate_Controller = ($rootScope, $scope,$sce, $stateParams, TM_API) ->

    TM_API.query_tree $stateParams.query_Id, (data)->
      data.href = '#/navigate/'
      $scope.content_HTML =  $sce.trustAsHtml(jade_navigate(data))

    $rootScope.$on 'New_Results_Data', (event, data)->
      console.log 'Received New_Results_Data'
      $scope.content_HTML =  $sce.trustAsHtml(jade_navigate(data))


  NavBar_Controller = ()->

  view_Names = ['about', 'docs', 'index','features', 'logout','main', 'navigate'
                'error', 'blank']
  for view_Name in view_Names
    $stateProvider.state view_Name ,
      url       : "/#{view_Name}"
      views:
        'navbar':  { templateProvider: resolve_Navbar , controller: NavBar_Controller}
        'content': { templateProvider: resolve_View(view_Name)   , controller: View_Controller(view_Name) },



  $stateProvider.state '/navigate/:query_Id'    ,
    url       : '/navigate/:query_Id'
    views:
      'navbar':  { templateProvider: resolve_Navbar , controller: NavBar_Controller}
      'content': { templateProvider: resolve_View('navigate')   , controller: View_Controller('navigate') },


  window.stateProvider = $stateProvider

app.controller 'Content_Controller', ($scope)->
  #console.log 'in content controller'
  $scope.content ='...TEAM mentor is loading....'

  #$locationProvider.html5Mode(true)