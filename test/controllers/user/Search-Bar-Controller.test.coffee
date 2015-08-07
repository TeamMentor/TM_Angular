expect = chai.expect;

describe '| controllers | user | Search-Bar-Controller.test',->
  scope    = null
  window   = location : href : '....'

  default_Technology = { title: 'All', id: 'query-6234f2d47eb7' }
  url_Query_Tree     = '/api/data/query_tree/query-6234f2d47eb7'

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Search_Bar_Controller', { $scope: scope })


  it 'constructor', ()->
    using scope, ->
      expect(@.query_Id           ).to.equal null
      expect(@.selected_Technology).to.equal null
      expect(@.$$listeners['clear_Search'][0]).to.be.an('function')
      expect(@.$$listeners['query_data'  ][0]).to.be.an('function')

      expect(@.select_Technology).to.be.an('function')
      expect(@.submit           ).to.be.an('function')

  it '$on clear_Search', ->
    using scope, ->
      @.text = 'aaaa'
      @.$broadcast 'clear_Search'
      @.text.assert_Is ''

  it '$on query_data (null data)', ->
    using scope, ->
      data = null
      @.$broadcast 'query_data'
      expect(@.query_Id).to.equal undefined
      @.selected_Technology.assert_Is { title: 'All', id: 'query-6234f2d47eb7' }

  it 'select_Technology', ->
    using scope, ->
      @.selected_Technology = id : 'an id', title : 'an title'

      @.$on 'clear_Filters', (event)->
        event.name.assert_Is 'clear_Filters'

      @.$on 'apply_Filter' , (event, id, title)->
        id.assert_Is 'an id'
        title.assert_Is 'an title'

      @.select_Technology()

  it 'submit (check state change)', ->
    inject ($state, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree/query-6234f2d47eb7').respond {}
      using scope, ->
        $state.current.name.assert_Is ''
        @.submit()
        @.$digest()
        $state.current.name.assert_Is 'index'

  it 'submit (no text)', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree/query-6234f2d47eb7').respond {}
      using scope, ->
        @.$on 'clear_Query', (event)->
          event.name.assert_Is 'clear_Query'
        @.$on 'apply_Query', (event, query_Id)->
          query_Id.assert_Is 'query-6234f2d47eb7'
        @.submit()
        @.$digest()
        $httpBackend.flush()

  it 'submit (valid text)', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree/query-6234f2d47eb7').respond {}
      $httpBackend.expectGET('/api/search/query_from_text_search/xss').respond 'search-xss'
      using scope, ->
        scope.text = 'xss'
        @.$on 'apply_Query', (event, query_Id)->
          query_Id.assert_Is 'search-xss'
        @.submit()
        $httpBackend.flush()


  it 'Check query_data broadcast (when query_tree returns no data)', ()->
    inject ($httpBackend)->
      $httpBackend.whenGET url_Query_Tree
                  .respond ()-> [200, { }]
      $httpBackend.flush()
      console.log scope.technologies
      scope.technologies.assert_Is [default_Technology]

  it 'Check query_data broadcast (when query_tree returns filters but not technology)', ()->
    inject ($httpBackend)->
      $httpBackend.whenGET url_Query_Tree
                  .respond ()-> [200, { filters: [] }  ]
      $httpBackend.flush()
      expect(scope.technologies).to.deep.equal [default_Technology]

  it 'Check query_data broadcast (when query_tree returns Technology filters but no results)', ()->
    inject ($httpBackend)->
      $httpBackend.whenGET url_Query_Tree
                  .respond ()-> [200, { filters: [{ title: 'Technology'} ] }  ]
      $httpBackend.flush()
      expect(scope.technologies).to.deep.equal [{ title: 'All', id: 'query-6234f2d47eb7' }]

  it 'Check query_data broadcast (when query_tree returns Technology filters with results)', ()->
    results = [{title:'tech 1', id: 'id_1'}, {title: 'tech 2', id: 'id_2'}]
    inject ($httpBackend)->
      $httpBackend.whenGET  url_Query_Tree
                  .respond ()-> [200, { filters: [{ title: 'Technology', results: results } ] } ]
      $httpBackend.flush()

      expect(scope.technologies).to.deep.equal [default_Technology].concat(results)