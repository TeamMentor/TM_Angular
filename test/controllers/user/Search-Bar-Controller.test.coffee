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
      $controller('Search_Bar_Controller', { $scope: scope, $element: {} })

  beforeEach ->
    inject ($httpBackend)=>
      $httpBackend.expectGET('/api/data/query_view_model/query-6234f2d47eb7/0/0').respond {}
      #$httpBackend.expectGET('/json/user/currentuser').respond {}
      $httpBackend.flush()
      #$httpBackend.expectGET('/json/user/currentuser').respond {}
    #inject ($httpBackend)->
    #  $httpBackend.flush()

  afterEach ->
    inject ($httpBackend)->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()

  it 'constructor', ()->                          # some of these already have values due to the auto invocation of @.set_technologies_By_Id and @select_Technology
    using scope, ->
      expect(@.query_Id           ).to.     equal null
      expect(@.selected_Technology).to.deep.equal { title: 'All Technologies', id: 'query-6234f2d47eb7' }
      expect(@.previous_Filter_Id ).to.     equal 'query-6234f2d47eb7'
      expect(@.technologies       ).to.deep.equal [{ title: 'All Technologies', id: 'query-6234f2d47eb7' }]
      expect(@.technologies_By_Id ).to.deep.equal { All: { title: 'All Technologies', id: 'query-6234f2d47eb7' } }
      expect(@.text               ).to.     equal ''
      expect(@.words              ).to.deep.equal []

      expect(@.$$listeners.keys().size()).to.equal 6

      expect(@.$$listeners['clear_search' ][0]).to.be.an('function')
      expect(@.$$listeners['clear_filter' ][0]).to.be.an('function')
      expect(@.$$listeners['apply_filter' ][0]).to.be.an('function')
      expect(@.$$listeners['apply_filters'][0]).to.be.an('function')
      expect(@.$$listeners['set_search'   ][0]).to.be.an('function')
      expect(@.$$listeners['update_search'][0]).to.be.an('function')

      expect(@.get_Words        ).to.be.an('function')
      expect(@.select_Technology).to.be.an('function')
      expect(@.submit           ).to.be.an('function')

  it '$on clear_search', ->
    using scope, ->
      @.text = 'aaaa'
      @.$broadcast 'clear_search'
      @.text.assert_Is ''

  it '$on clear_filter', ->
    using scope, ->
      @.technologies_By_Id  =
        an_id : 'an id'
        All   : 'all'

      @.$broadcast 'clear_filter'
      @.selected_Technology.assert_Is { title: 'All Technologies', id: 'query-6234f2d47eb7' }

      @.ignore_Events      = true
      @.$broadcast 'clear_filter', 'an_id'
      @.selected_Technology.assert_Is 'all'

  it '$on apply_filter', ->
    using scope, ->
      @.$broadcast 'apply_filter', 'filter_Id', 'filter_Title', 'metadata_Title'
      @.selected_Technology.assert_Is { title: 'All Technologies', id: 'query-6234f2d47eb7' }
      @.previous_Filter_Id .assert_Is 'query-6234f2d47eb7'

      @.technologies_By_Id = 'filter_Id' : 'abc'
      @.$broadcast 'apply_filter', 'filter_Id', 'filter_Title', 'Technology'
      @.selected_Technology.assert_Is 'abc'
      @previous_Filter_Id.assert_Is 'filter_Id'


  it 'select_Technology', ->
    using scope, ->
      @.selected_Technology = id : 'an id', title : 'an title'

      @.select_Technology()
      @.searchPlaceholder.assert_Is 'Search an title'

      @.selected_Technology = null
      @.select_Technology()
      @.searchPlaceholder.assert_Is 'Search All of TEAM Mentor'


  it 'select_Technology (when title is All)', ->
    using scope, ->
      @.selected_Technology = id : 'an id', title : 'All'

      @.$on 'apply_query' , (event, query_Id)->
        query_Id.assert_Is 'query-6234f2d47eb7'

      @.$on 'clear_query' , (event, data)->
        expect(data).to.equal null

      @.select_Technology()
      @.searchPlaceholder.assert_Is 'Search All'


  it 'submit (check state change)', ->
    inject ($state, $httpBackend)->
      $httpBackend.expectGET('/json/user/currentuser').respond {}
      using scope, ->
        console.log $state.current
        $state.current.name.assert_Is ''
        @.submit()
        @.$digest()
        $state.current.name.assert_Is 'index'

  it 'submit (no text)', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/json/user/currentuser').respond {}
      using scope, ->
        @.$on 'clear_query', (event)->
          event.name.assert_Is 'clear_query'
        @.$on 'apply_query', (event, query_Id)->
          query_Id.assert_Is 'query-6234f2d47eb7'
        @.submit()
        @.$digest()
        $httpBackend.flush()

  it 'submit (valid text)', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/json/user/currentuser').respond {}
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
        $httpBackend.expectGET('/json/user/currentuser').respond {}
        #$httpBackend.expectGET('/angular/api/auto-complete?term=a').respond { a : 'aaa', b: 'bbb'}
        @.words.assert_Is []
        @.get_Words 'a'
        $httpBackend.flush()
        @.words.assert_Is []

        @.get_Words ''

        @.words.assert_Is []

