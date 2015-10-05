expect = chai.expect

describe '| services | Query-Service', ->

  beforeEach ()->
    module('TM_App')

    inject ($rootScope)->
      spyOn $rootScope, '$broadcast'

  afterEach ->
    inject ($httpBackend)->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()

  it 'constructor', ->
    inject (query_Service, TM_API, $rootScope)->
      using query_Service, ->
        @.TM_API      .assert_Is TM_API
        @.$rootScope  .assert_Is $rootScope
        @.index_Query .assert_Is 'query-6234f2d47eb7'

        expect(@.load_Data  ).to.be.an 'function'
        expect(@.load_Query ).to.be.an 'function'
        expect(@.reload_Data).to.be.an 'function'

  it 'load_Data', ->
    inject (query_Service, $rootScope, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model/query-6234f2d47eb7/0/10').respond  [{ a: 42 }]
      using query_Service, ->
        @.load_Data()
        $rootScope.$digest()
        $httpBackend.flush()

  it 'load_Query (no id)', ->
    inject (query_Service, $rootScope, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model/undefined/0/10').respond {}

      using query_Service, ->
        @.load_Query()
        $httpBackend.flush()

      using $rootScope.$broadcast.calls.all(), ->
        @.size().assert_Is 4
        @[0].args.assert_Is [ 'loading_query', undefined , undefined, 0, 10 ]
        @[1].args.assert_Is [ 'http_start' ]
        @[2].args.assert_Is [ 'http_end'   ]
        @[3].args.assert_Is [ 'view_model_data',  {} ]

  it 'load_Query (with query_Id, no filters)', ->
    inject (query_Service, $rootScope, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model/an-query-id/0/10').respond  { id: 42 }

      using query_Service, ->
        @.load_Query('an-query-id')
        $httpBackend.flush()

      using $rootScope.$broadcast.calls.all(), ->
        @.size().assert_Is 4
        @[0].args.assert_Is [ 'loading_query', 'an-query-id', undefined, 0, 10 ]
        @[1].args.assert_Is [ 'http_start' ]
        @[2].args.assert_Is [ 'http_end'   ]
        @[3].args.assert_Is [ 'view_model_data',  { id: 42 } ]

  it '@.load_Query  (with query_Id and filters)', ->
    inject (query_Service, $rootScope, $httpBackend)->

      $httpBackend.expectGET('/api/data/query_view_model_filtered/an-query-id/an-filter-id/0/10').respond  { id: 42 }

      using query_Service, ->
        @.load_Query('an-query-id', 'an-filter-id')
        $httpBackend.flush()

      using $rootScope.$broadcast.calls.all(), ->
        @.size().assert_Is 4
        @[0].args.assert_Is [ 'loading_query', 'an-query-id', 'an-filter-id', 0, 10 ]
        @[1].args.assert_Is [ 'http_start' ]
        @[2].args.assert_Is [ 'http_end'   ]
        @[3].args.assert_Is [ 'view_model_data',  { id: 42 } ]
#
  it 'reload_Data', ->

    inject (query_Service, $rootScope, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model/query-6234f2d47eb7/0/10').respond  { id: 42 }

      using query_Service, ->
        $rootScope.$digest()
        @.reload_Data()
        $rootScope.$digest()
        $httpBackend.flush()

      using $rootScope.$broadcast.calls.all(), ->
        @.size().assert_Is 6
        @[0].args.assert_Is [ 'clear_filters']
        @[1].args.assert_Is [ 'clear_query']
        @[2].args.assert_Is [ 'loading_query', 'query-6234f2d47eb7', undefined, 0, 10 ]
        @[3].args.assert_Is [ 'http_start']
        @[4].args.assert_Is [ 'http_end']
        @[5].args.assert_Is [ 'view_model_data',  { id: 42 } ]

