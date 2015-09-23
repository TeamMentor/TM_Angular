describe '| routes | user.routes' , ->
  beforeEach ->
    module('TM_App')

  afterEach ->
    inject ($httpBackend)->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()

  it '/index', ->
    inject ($state,$rootScope) ->
      $state.go 'index'
      $rootScope.$digest()
      $state.current.assert_Is 	{ url: '/index', templateUrl: '/angular/jade-html/views/user/index', name: 'index' }

  it '/index_query_id', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model/an-query-id/0/10').respond {}

    inject ($state,$rootScope, $location, $controller, $timeout, $httpBackend, query_Service) ->
      $state.go 'index_query_id'
      $rootScope.$digest()
      $state.current.assert_Is 	{ url: '/index/:query_Id', templateUrl: '/angular/jade-html/views/user/index', name: 'index_query_id' }

      $location.path('/index/an-query-id')
      window = location : href : '/index/an-query-id'
      $rootScope.$digest()


      spyOn(query_Service, 'load_Query').and.callThrough()
      spyOn($rootScope   , '$broadcast').and.callThrough()

      scope = $rootScope.$new()
      $controller('Index_Controller', { $scope: scope , $window: window})
      scope.$digest()

      $timeout.flush()
      $httpBackend.flush()

      using query_Service.load_Query.calls.all(), ->
        @.size().assert_Is 1
        @[0].args[4] = 'function' if typeof @[0].args[4] is 'function'  # trick to make the assert below work
        @[0].args.assert_Is [ 'an-query-id', undefined, null,null, 'function']

      using $rootScope.$broadcast.calls.all(), ->
        @.size().assert_Is 5
        @[0].args.assert_Is [ 'loading_query', 'an-query-id', undefined, 0, 10 ]
        @[1].args.assert_Is [ 'http_start' ]
        @[2].args.assert_Is [ 'http_end' ]
        @[3].args.assert_Is [ 'view_model_data', {} ]
        @[4].args.assert_Is [ 'apply_filters', undefined ]
