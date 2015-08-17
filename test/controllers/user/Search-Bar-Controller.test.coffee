expect = chai.expect;

describe '| controllers | user | Search-Bar-Controller.test',->
  scope    = null
  window   = location : href : '....'

  default_Technology = { title: 'All', id: 'query-6234f2d47eb7' }

  #url_Query_Tree     = 'query_view_model_query-6234f2d47eb7_0_10'

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Search_Bar_Controller', { $scope: scope })

  afterEach ->
    inject ($httpBackend)->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()

  it 'constructor', ()->
    using scope, ->
      expect(@.query_Id           ).to.     equal null
      expect(@.selected_Technology).to.     equal null
      expect(@.previous_Filter_Id ).to.     equal null
      expect(@.technologies       ).to.deep.equal {}
      expect(@.technologies_By_Id ).to.deep.equal {}
      expect(@.text               ).to.     equal ''
      expect(@.words              ).to.deep.equal [ '....sugestions....' ]

      expect(@.$$listeners.keys().size()).to.equal 4

      expect(@.$$listeners['clear_Search'    ][0]).to.be.an('function')
      expect(@.$$listeners['clear_filter'    ][0]).to.be.an('function')
      expect(@.$$listeners['apply_filter'    ][0]).to.be.an('function')
      expect(@.$$listeners['view_model_data' ][0]).to.be.an('function')

      expect(@.get_Words        ).to.be.an('function')
      expect(@.select_Technology).to.be.an('function')
      expect(@.select_Word      ).to.be.an('function')
      expect(@.submit           ).to.be.an('function')

  it '$on clear_Search', ->
    using scope, ->
      @.text = 'aaaa'
      @.$broadcast 'clear_Search'
      @.text.assert_Is ''

  it '$on clear_filter', ->
    using scope, ->
      @.technologies_By_Id  =
        an_id : 'an id'
        All   : 'all'

      @.$broadcast 'clear_filter', 'an_id'
      @.technologies_By_Id
      @.selected_Technology.assert_Is 'all'

      @.selected_Technology = 'abc'
      @.ignore_Events      = true
      @.$broadcast 'clear_filter', 'an_id'
      @.selected_Technology.assert_Is 'abc'

  it '$on query_data (null data)', ->
    using scope, ->
      data = null
      @.$broadcast 'view_model_data'
      expect(@.query_Id).to.equal undefined
      @.selected_Technology.assert_Is { title: 'All', id: 'query-6234f2d47eb7' }


  it '$on apply_filter', ->
    using scope, ->
      @.$broadcast 'apply_filter', 'filter_Id', 'filter_Title', 'metadata_Title'
      expect(@.selected_Technology).to.equal null
      expect(@.previous_Filter_Id).to.equal null

      @.technologies_By_Id = 'filter_Id' : 'abc'
      @.$broadcast 'apply_filter', 'filter_Id', 'filter_Title', 'Technology'
      @.selected_Technology.assert_Is 'abc'
      @previous_Filter_Id.assert_Is 'filter_Id'


  it 'select_Technology', ->
    using scope, ->
      @.selected_Technology = id : 'an id', title : 'an title'

      @.$on 'apply_filter' , (event, id, title)->
        id.assert_Is 'an id'
        title.assert_Is 'an title'

      @.select_Technology()

  it 'select_Technology (when title is All)', ->
    using scope, ->
      @.selected_Technology = id : 'an id', title : 'All'

      @.$on 'apply_query' , (event, query_Id)->
        query_Id.assert_Is 'query-6234f2d47eb7'

      @.$on 'clear_query' , (event, data)->
        expect(data).to.equal null

      @.select_Technology()
      @.$digest()

  it 'submit (check state change)', ->
    inject ($state, $httpBackend)->
      using scope, ->
        $state.current.name.assert_Is ''
        @.submit()
        @.$digest()
        $state.current.name.assert_Is 'index'

  it 'submit (no text)', ->
    inject ($httpBackend)->
      #$httpBackend.expectGET('/api/data/query_tree/query-6234f2d47eb7').respond {}
      using scope, ->
        @.$on 'clear_query', (event)->
          event.name.assert_Is 'clear_query'
        @.$on 'apply_query', (event, query_Id)->
          query_Id.assert_Is 'query-6234f2d47eb7'
        @.submit()
        #@.$digest()
        #$httpBackend.flush()

  it 'submit (valid text)', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/search/query_from_text_search/xss').respond 'search-xss'
      #$httpBackend.expectGET('/api/data/query_view_model/search-xss/0/10').respond 'search-xss'
      using scope, ->
        scope.text = 'xss'
        @.$on 'apply_query', (event, query_Id)->
          query_Id.assert_Is 'search-xss'
        @.submit()
        $httpBackend.flush()


  it 'Check query_data broadcast', ()->
    # when query_tree returns no data
    scope.$broadcast 'view_model_data', {}
    scope.technologies.assert_Is [default_Technology]

    # when query_tree returns filters but not technology
    scope.$broadcast 'view_model_data',  { filters: [] }
    expect(scope.technologies).to.deep.equal [default_Technology]

    # when query_tree returns Technology filters but no results
    scope.$broadcast 'view_model_data',  { filters: { 'Technology' : [] }  }
    expect(scope.technologies).to.deep.equal [{ title: 'All', id: 'query-6234f2d47eb7' }]

    # when query_tree returns Technology filters with results
    scope.selected_Technology = null
    results = [{title:'tech 1', id: 'id_1'}, { title: 'tech 2', id: 'id_2' }]
    scope.$broadcast 'view_model_data', { filters: { 'Technology' : results }  }
    expect(scope.technologies).to.deep.equal [default_Technology].concat(results)


  it 'get_Words', ->
    inject ($httpBackend)->
      using scope, ->
        $httpBackend.expectGET('/angular/api/auto-complete?term=a').respond { a : 'aaa', b: 'bbb'}
        @.words.assert_Is ['....sugestions....']
        @.get_Words 'a'
        $httpBackend.flush()
        @.words.assert_Is [ 'a', 'b']

        @.get_Words ''

        @.words.assert_Is ['....sugestions....']


  it 'select_Word', ->
    using scope, ->
      @.text.assert_Is ''
      @.select_Word 'bbbb'
      @.text.assert_Is 'bbbb'


