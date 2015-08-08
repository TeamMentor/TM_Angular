expect = chai.expect

describe '| services | Query-Service', ->

  beforeEach ()->
    module('TM_App')
    #inject ($injector)->
    #  query_Service = $injector.get('query_Service')

  it 'constructor', ->
    inject (query_Service, TM_API, $rootScope)->
      using query_Service, ->
        @.TM_API      .assert_Is TM_API
        @.$rootScope  .assert_Is $rootScope
        @.index_Query .assert_Is 'query-6234f2d47eb7'
        expect(@.data).to.equal null

        expect(@.load_Data  ).to.be.an 'function'
        expect(@.load_Query ).to.be.an 'function'
        expect(@.load_Filter).to.be.an 'function'
        expect(@.reload_Data).to.be.an 'function'

  it 'load_Data', ->
    inject (query_Service, $rootScope, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree/query-6234f2d47eb7').respond  [{ a: 42 }]
      using query_Service, ->
        @.load_Data()
        $rootScope.$digest()
        @.data.assert_Is []
        $httpBackend.flush()
        @.data.assert_Is [{ a: 42 }]

  it 'load_Query (no id)', ->
    inject (query_Service, $rootScope, $httpBackend)->

      $rootScope.$on 'query_data', (event, data)->
        data.assert_Is {}
      $rootScope.$on 'filter_data', (event, data)->
        data.assert_Is {}

      using query_Service, ->
        @.load_Query()
        expect(@.data).to.equal null

  it 'load_Query (with id)', ->
    inject (query_Service, $rootScope, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree/an-query-id').respond  [{ a: 42 }]

      $rootScope.$on 'query_data', (event, data)->
        data.assert_Is  [{ a: 42 }]
      $rootScope.$on 'filter_data', (event, data)->
        data.assert_Is [{ a: 42 }]

      using query_Service, ->
        @.load_Query('an-query-id')
        expect(@.data).to.equal null
        $httpBackend.flush()
        @.data.assert_Is [{ a: 42 }]

  it 'load_Filter', ->
    inject (query_Service, $rootScope, $httpBackend)->

      $httpBackend.expectGET('/api/data/query_tree_filtered/an-query-id/an-filter-id').respond  [{ a: 42 }]

      $rootScope.$on 'query_data', (event, data)->
        data.assert_Is  [{ a: 42 }]
      $rootScope.$on 'filter_data', (event, data)->
        data.assert_Is [{ a: 42 }]

      using query_Service, ->
        @.load_Filter('an-query-id', 'an-filter-id')
        $httpBackend.flush()
        @.data.assert_Is [{ a: 42 }]

  it 'reload_Data', ->

    inject (query_Service, $rootScope, $httpBackend)->

      $httpBackend.expectGET('/api/data/query_tree/query-6234f2d47eb7').respond  [{ a: 42 }]

      $rootScope.$on 'clear_Filters', (event, data)-> expect(data).to.equal undefined
      $rootScope.$on 'clear_Query'  , (event, data)-> expect(data).to.equal undefined
      $rootScope.$on 'clear_Search' , (event, data)-> expect(data).to.equal undefined

      using query_Service, ->
        $rootScope.$digest()
        @.reload_Data()
        @.data.assert_Is []
        $rootScope.$digest()
        $httpBackend.flush()
        @.data.assert_Is [{ a: 42 }]

