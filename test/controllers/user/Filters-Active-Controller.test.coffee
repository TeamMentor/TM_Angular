expect = chai.expect;

describe '| controllers | user | Filters-Active-Controller.test',->

  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Filters_Active_Controller', { $scope: scope })

  it 'constructor', ()->
    using scope, ->
      expect(@.current_Filters ).to.deep.equal {}

      expect(@.$$listeners['apply_Filter' ][0]).to.be.an('function')
      expect(@.$$listeners['clear_Filters'][0]).to.be.an('function')
      expect(@.$$listeners['query_data'   ][0]).to.be.an('function')
      expect(@.$$listeners['apply_Query'  ][0]).to.be.an('function')


      expect(@.refresh_Filters).to.be.an('function')
      expect(@.clear_Filter   ).to.be.an('function')

  it '$on apply_Filter', ->
    using scope, ->
      @.$broadcast 'apply_Filter', 'an id', 'an title'
      @.current_Filters.assert_Is 'an id' : 'an title'

  it '$on query_data', ->
    using scope, ->
      data = id: 'an id', results: length: 42
      @.$broadcast 'query_data',data
      @.current_Query_Id.assert_Is 'an id'


  it '$on apply_Query', ->
    using scope, ->
      @.$broadcast 'apply_Query', 'an id'
      @.current_Query_Id.assert_Is 'an id'

  it 'refresh_Filters (no current filters)', ()-> 
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree_queries/an-id'      ).respond {}
      $httpBackend.expectGET('/api/data/query_tree_articles/an-id/0/10').respond {}
      $httpBackend.expectGET('/api/data/query_tree_filters/an-id'      ).respond {}
      using scope, ->
        @.current_Query_Id = 'an-id'
        @.refresh_Filters()
        @.$digest()

  it 'refresh_Filters (with current filters)', ()->
    inject ($httpBackend)->
      inject ($httpBackend)->
      $httpBackend.whenGET '/api/data/query_tree_filtered/an-id/aaa,bbb'
                  .respond {}
      using scope, ->
        @.current_Query_Id = 'an-id'
        @.current_Filters = aaa: 'a', 'bbb' : 'b'
        @.refresh_Filters()
        @.$digest()

  it 'clear_Filter', ->
    using scope, ->
      @.current_Filters = aaa: 'a', 'bbb' : 'b'
      @.clear_Filter 'aaa'
      @.current_Filters.assert_Is bbb: 'b'



  it 'Check that apply_Filter and clear_Filters broadcasts are correctly received',  ->
    using scope, ->
      @.$broadcast 'clear_Filters'
      @.current_Filters.assert_Is {}

      @.$broadcast 'apply_Filter', 'id', 'title'
      @.current_Filters['id'].assert_Is 'title'

      @.$broadcast 'clear_Filters'
      @.current_Filters.assert_Is {}