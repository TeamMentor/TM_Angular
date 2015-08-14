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
        expect(@.data_Articles).to.equal null
        expect(@.data_Filters).to.equal null
        expect(@.data_Queries).to.equal null

        expect(@.load_Data  ).to.be.an 'function'
        expect(@.load_Query ).to.be.an 'function'
        expect(@.reload_Data).to.be.an 'function'

  it 'load_Data', ->
    inject (query_Service, $rootScope, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree_queries/query-6234f2d47eb7'      ).respond  [{ a: 42 }]
      $httpBackend.expectGET('/api/data/query_tree_articles/query-6234f2d47eb7/0/10').respond  [{ a: 43 }]
      $httpBackend.expectGET('/api/data/query_tree_filters/query-6234f2d47eb7'      ).respond  [{ a: 44 }]
      using query_Service, ->
        @.load_Data()
        $rootScope.$digest()
        @.data_Queries.assert_Is []
        @.data_Articles.assert_Is []
        @.data_Filters.assert_Is []
        $httpBackend.flush()
        @.data_Queries.assert_Is  [{ a: 42 }]
        @.data_Articles.assert_Is [{ a: 43 }]
        @.data_Filters.assert_Is  [{ a: 44 }]

  it 'load_Query (no id)', ->
    inject (query_Service, $rootScope, $httpBackend)->

      $rootScope.$on 'query_data', (event, data)->
        data.assert_Is {}
      $rootScope.$on 'filter_data', (event, data)->
        data.assert_Is {}

      using query_Service, ->
        @.load_Query()
        expect(@.data_Queries ).to.equal null
        expect(@.data_Articles).to.equal null
        expect(@.data_Filters ).to.equal null

  it 'load_Query (with query_Id, no filters)', ->
    inject (query_Service, $rootScope, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree_queries/an-query-id'      ).respond  [{ a: 42 }]
      $httpBackend.expectGET('/api/data/query_tree_articles/an-query-id/0/10').respond  [{ a: 43 }]
      $httpBackend.expectGET('/api/data/query_tree_filters/an-query-id'      ).respond  [{ a: 44 }]

      $rootScope.$on 'query_data', (event, data)->
        data.assert_Is  [{ a: 42 }]
      $rootScope.$on 'article_data', (event, data)->
        data.assert_Is  [{ a: 43 }]
      $rootScope.$on 'filter_data', (event, data)->
        data.assert_Is [{ a: 44 }]

      using query_Service, ->
        @.load_Query('an-query-id')
        expect(@.data_Queries ).to.equal null
        $httpBackend.flush()
        @.data_Queries .assert_Is [{ a: 42 }]
        @.data_Articles.assert_Is [{ a: 43 }]
        @.data_Filters .assert_Is [{ a: 44 }]

  it '@.load_Query  (with query_Id and filters)', ->
    inject (query_Service, $rootScope, $httpBackend)->

      $httpBackend.expectGET('/api/data/query_tree_filtered_queries/an-query-id/an-filter-id'      ).respond  { a: 42 }
      $httpBackend.expectGET('/api/data/query_tree_filtered_articles/an-query-id/an-filter-id/0/10').respond  { a: 43 }
      $httpBackend.expectGET('/api/data/query_tree_filtered_filters/an-query-id/an-filter-id'      ).respond  { a: 44 }

      $rootScope.$on 'query_data', (event, data)->
        data.assert_Is  { a: 42 }
      $rootScope.$on 'article_data', (event, data)->
        data.assert_Is  { a: 43 }
      $rootScope.$on 'filter_data', (event, data)->
        data.assert_Is  { a: 44 }

      using query_Service, ->
        @.load_Query('an-query-id', 'an-filter-id')
        $httpBackend.flush()
        @.data_Queries.assert_Is   { a: 42 }
        @.data_Filters.assert_Is   { a: 44 }
        @.data_Articles.assert_Is  { a: 43 }

#  it 'load_Query (check results size mapping)', ->
#    inject (query_Service, $rootScope, $httpBackend)->
#
#      $httpBackend.expectGET('/api/data/query_tree_filtered_queries/an-query-id/an-filter-id'      ).respond  { a: 42 }
#      $httpBackend.expectGET('/api/data/query_tree_filtered_articles/an-query-id/an-filter-id/0/10').respond  { a: 42 , size: 2 }
#      $httpBackend.expectGET('/api/data/query_tree_filtered_filters/an-query-id/an-filter-id'      ).respond  { a: 42 }
#
#
#      using query_Service, ->
#        @.load_Query('an-query-id', 'an-filter-id')
#        $httpBackend.flush()
#        @.data_Articles.size.assert_Is 2
#
  it 'reload_Data', ->

    inject (query_Service, $rootScope, $httpBackend)->

      $httpBackend.expectGET('/api/data/query_tree_queries/query-6234f2d47eb7'      ).respond  [{ a: 42 }]
      $httpBackend.expectGET('/api/data/query_tree_articles/query-6234f2d47eb7/0/10').respond  [{ a: 43 }]
      $httpBackend.expectGET('/api/data/query_tree_filters/query-6234f2d47eb7'      ).respond  [{ a: 44 }]

      $rootScope.$on 'clear_filters', (event, data)-> expect(data).to.equal undefined
      $rootScope.$on 'clear_query'  , (event, data)-> expect(data).to.equal undefined
      $rootScope.$on 'clear_search' , (event, data)-> expect(data).to.equal undefined

      using query_Service, ->
        $rootScope.$digest()
        @.reload_Data()
        @.data_Queries .assert_Is []
        @.data_Articles.assert_Is []
        @.data_Filters .assert_Is []
        $rootScope.$digest()
        $httpBackend.flush()
        @.data_Queries .assert_Is [{ a: 42 }]
        @.data_Articles.assert_Is [{ a: 43 }]
        @.data_Filters .assert_Is [{ a: 44 }]

