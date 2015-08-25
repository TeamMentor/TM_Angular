describe '| routes | routes' , ->
  $window = null

  beforeEach ->
    module('TM_App')

  #todo find why this test is failing with 	Error: One of your tests is trying to unload window object.
  xit 'Check routes (via routes_Names)', ->

    inject ($state,routes_Names,$rootScope, $httpBackend, $window) ->
      $httpBackend.expectGET('/json/user/currentuser'                ).respond {}
      $httpBackend.expectGET('/json/user/currentuser'                ).respond {}
      $httpBackend.expectGET('/json/user/currentuser'                ).respond {}
      $httpBackend.expectGET('/json/user/currentuser'                ).respond {}
      $httpBackend.expectGET('/angular/jade-html/views/user/articles').respond {}
      #$httpBackend.expectGET('/angular/jade-html/views/main'         ).respond {}

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

      $httpBackend.expectGET('/json/user/currentuser'                ).respond {}
      $httpBackend.expectGET('/angular/jade-html/views/user/articles').respond {}

      $state.current.assert_Is { name: '', url: '^', views: null, abstract: true }
      $location.path('articles')
      $rootScope.$digest()

