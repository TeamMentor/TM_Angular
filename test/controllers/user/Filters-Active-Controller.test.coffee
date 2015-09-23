expect = chai.expect;

describe '| controllers | user | Filters-Active-Controller.test',->

  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Filters_Active_Controller', { $scope: scope })

  afterEach ->
    inject ($httpBackend)->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()

  it 'constructor', ()->
    using scope, ->
      expect(@.current_Filters  ).to.deep.equal {}
      expect(@.current_Query_Id ).to     .equal null

      @.$$listeners.keys().size().assert_Is 6
      expect(@.$$listeners['apply_filter'   ][0]).to.be.an('function')
      expect(@.$$listeners['apply_query'    ][0]).to.be.an('function')
      expect(@.$$listeners['clear_filter'   ][0]).to.be.an('function')
      expect(@.$$listeners['clear_filters'  ][0]).to.be.an('function')
      expect(@.$$listeners['view_model_data'][0]).to.be.an('function')
      expect(@.$$listeners['set_page'       ][0]).to.be.an('function')

      expect(@.refresh_Filters).to.be.an('function')
      expect(@.clear_Filter   ).to.be.an('function')

  it '$on apply_Filter', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model_filtered/null/an_id/0/10'      ).respond {}
      using scope, ->
        @.$broadcast 'apply_filter', 'an_id', 'an title'

        @.current_Filters.an_id.filter_Icon =  @.current_Filters.an_id.filter_Icon.$$unwrapTrustedValue() # replace filter_Icon with its HTML code

        @.current_Filters.assert_Is { an_id:{ filter_Title: 'an title', filter_Icon: '<span class="icon-Default" title="an title"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></span>', metadata_Title: undefined } }
        $httpBackend.flush()


  it '$on query_data', ->
    using scope, ->
      data = id: 'an id', results: length: 42
      @.$broadcast 'view_model_data',data
      @.current_Query_Id.assert_Is 'an id'


  it '$on apply_query', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model/an_id/0/10'      ).respond { id: 'abc-id'}
      using scope, ->
        @.$broadcast 'apply_query', 'an_id'
        @.current_Query_Id.assert_Is 'an_id'
        $httpBackend.flush()

  it '$on set_page',->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model/null/11/22'      ).respond { id: 'abc-id'}

      using scope, ->
        @.$broadcast 'set_page', 2, 11, 22
        $httpBackend.flush()
        @.current_Query_Id.assert_Is 'abc-id'


  it 'refresh_Filters (no current filters)', ()->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model/an-id/0/10'      ).respond {}
      using scope, ->
        @.current_Query_Id = 'an-id'
        @.refresh_Filters()
        $httpBackend.flush()



  it 'refresh_Filters (with current filters)', ()->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model_filtered/an-id/aaa,bbb/0/10'      ).respond {}
      using scope, ->
        @.current_Query_Id = 'an-id'
        @.current_Filters = aaa: 'a', 'bbb' : 'b'
        @.refresh_Filters()
        $httpBackend.flush()

  it 'clear_Filter', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model_filtered/null/bbb/0/10'      ).respond {}
      using scope, ->
        @.current_Filters = aaa: 'a', 'bbb' : 'b'
        @.clear_Filter 'aaa'
        $httpBackend.flush()
        @.current_Filters.assert_Is bbb: 'b'

  it 'Check that apply_Filter and clear_Filters broadcasts are correctly received',  ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_view_model_filtered/null/id/0/10'      ).respond {}
      using scope, ->
        @.$broadcast 'clear_filters'
        @.current_Filters.assert_Is {}

        @.$broadcast 'apply_filter', 'id', 'title'
        @.current_Filters['id'].filter_Title.assert_Is 'title'

        @.$broadcast 'clear_filters'
        @.current_Filters.assert_Is {}
        $httpBackend.flush()