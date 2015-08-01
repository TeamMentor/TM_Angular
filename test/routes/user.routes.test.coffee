describe '| routes | user.routes' , ->
  beforeEach ->
    module('TM_App')

  it 'check routes (via routes_Names)', ->
    inject ($state,routes_Names) ->
      check_routes = (routes)->
        for route in routes
          $state.go route

      check_routes routes_Names.guest       # check that all routes exist
      check_routes routes_Names.user_Root
      check_routes routes_Names.user_User


  it 'check routes (via routes_Names)', ->
    inject ($rootScope, $state,routes_Names) ->
      $state.go('navigate')
      $rootScope.$digest()
      #console.log $state