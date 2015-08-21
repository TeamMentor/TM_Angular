describe '| routes | routes' , ->
  beforeEach ->
    module('TM_App')

  it 'Check routes (via routes_Names)', ->
    inject ($state,routes_Names,$rootScope, $httpBackend) ->

      $httpBackend.expectGET('/angular/jade-html/views/main'         ).respond {}
      $httpBackend.expectGET('/angular/jade-html/views/user/articles').respond {}

      check_routes = (routes)->
        for route in routes
          $state.go route
          $rootScope.$digest()

      using routes_Names.views,->
        check_routes @.guest       # check that all routes exist
        check_routes @.user_Root
        check_routes @.user_User

      $httpBackend.flush()
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()

  it 'Check GET request via $location.path()', ->
    inject ($state,$rootScope, $location,$httpBackend) ->
      $httpBackend.expectGET('/angular/jade-html/views/user/articles').respond {}

      $state.current.assert_Is { name: '', url: '^', views: null, abstract: true }
      $location.path('articles')
      $rootScope.$digest()

