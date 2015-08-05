describe '| routes | user.routes' , ->
  beforeEach ->
    module('TM_App')

  it 'check routes (via routes_Names)', ->
    inject ($state,routes_Names) ->
      check_routes = (routes)->
        for route in routes
          $state.go route

      using routes_Names.views,->
        check_routes @.guest       # check that all routes exist
        check_routes @.user_Root
        check_routes @.user_User


  it 'check routes (templateUrl)', ->
    inject ($rootScope, $state,routes_Names, $httpBackend) ->
      $httpBackend.expectGET('/angular/jade-html/views/guest/blank'     ).respond ''
      $httpBackend.expectGET('/angular/jade-html/views/guest/pwd_forgot').respond ''

      for route in routes_Names.views.guest
        #console.log '-------------'
        #console.log 'route name: ' + route
        $state.go(route)
        $rootScope.$digest()
        #console.log $state.current.templateUrl