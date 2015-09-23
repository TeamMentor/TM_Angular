expect = chai.expect;

describe '| controllers | user | Search-Bar-Controller.test',->
  scope    = null
  window   = location : href : '....'

  default_Technology = { title: 'All Technologies', id: 'query-6234f2d47eb7' }

  #url_Query_Tree     = 'query_view_model_query-6234f2d47eb7_0_10'

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Search_Bar_Controller', { $scope: scope, $element: {} })

  beforeEach ->
    inject ($httpBackend)=>
      $httpBackend.expectGET('/api/data/query_view_model/query-6234f2d47eb7/0/0').respond {}
      $httpBackend.flush()

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
    inject ($rootScope)->
      using scope, ->
        @.selected_Technology = id : 'an id', title : 'All ABC'

        spyOn($rootScope, '$broadcast')

        @.select_Technology()
        @.searchPlaceholder.assert_Is 'Search All ABC'
        $rootScope.$broadcast.calls.all().size().assert_Is 0   # confirm there were no events fired


  it 'submit (check $state change and empty $scope.text)', ()->
    inject ($rootScope, $state, $httpBackend, $timeout)->
      using scope, ->
        scope.text =''
        $state.current.assert_Is url: '/:article_Id', templateUrl: '/angular/jade-html/views/user/article', name: 'guid'
        @.submit()
        scope.$digest()
        $state.current.assert_Is url: '/index', templateUrl: '/angular/jade-html/views/user/index', name: 'index'
        spyOn($rootScope, '$broadcast').and.callThrough()
        $timeout.flush()

        using $rootScope.$broadcast.calls.all(), ->
          @.size().assert_Is 5
          @[0].args.assert_Is [ 'loading_query'         , null                 , null                                   ]
          @[1].args.assert_Is [ 'clear_filter'          , 'query-6234f2d47eb7' , 'Technology'                           ]
          @[2].args.assert_Is [ 'apply_query'           , 'query-6234f2d47eb7'                                          ]
          @[3].args.assert_Is [ '$locationChangeStart'  , 'http://server/index', 'http://server/', undefined, undefined ]
          @[4].args.assert_Is [ '$locationChangeSuccess', 'http://server/index', 'http://server/', null     , undefined ]



  it 'submit (valid text)', ->
    inject ($rootScope, $httpBackend, $timeout)->
      $httpBackend.expectGET('/api/search/query_from_text_search/xss').respond 'search-xss'
      using scope, ->
        spyOn($rootScope, '$broadcast').and.callThrough()
        scope.text = 'xss'
        @.$on 'apply_query', (event, query_Id)->
          query_Id.assert_Is 'search-xss'
        @.submit()
        $timeout.flush()
        $httpBackend.flush()

        using $rootScope.$broadcast.calls.all(), ->
          @.size().assert_Is 11
          @[0].args.assert_Is  [ '$stateChangeStart',  { url: '/index', templateUrl: '/angular/jade-html/views/user/index', name: 'index' }  , {}, { url: '/:article_Id', templateUrl: '/angular/jade-html/views/user/article',name: 'guid' }, { article_Id: '' } ]
          @[1].args[0].assert_Is '$viewContentLoading' # too many objects to map
          @[2].args.assert_Is  [ 'http_start']
          @[3].args.assert_Is  [ 'http_end']
          @[4].args.assert_Is  [ '$stateChangeSuccess', { url: '/index',templateUrl: '/angular/jade-html/views/user/index',name: 'index' },{},{ url: '/:article_Id',templateUrl: '/angular/jade-html/views/user/article',name: 'guid' },{ article_Id: '' } ]
          @[5].args.assert_Is  [ '$locationChangeStart'  , 'http://server/index', 'http://server/', undefined, undefined ]
          @[6].args.assert_Is  [ '$locationChangeSuccess', 'http://server/index', 'http://server/', null     , undefined ]
          @[7].args.assert_Is  [ 'http_start']
          @[8].args.assert_Is  [ 'http_end']
          @[9].args.assert_Is  [ 'clear_filter'          , 'search-xss' , 'Technology'                                   ]
          @[10].args.assert_Is [ 'apply_query'           , 'search-xss'                                                  ]

  it 'get_Words', ->
    inject ($rootScope, $httpBackend)->
      using scope, ->
        spyOn($rootScope, '$broadcast').and.callThrough()

        @.get_Words 'a'
        @.get_Words ''

        using $rootScope.$broadcast.calls.all(), ->
          @.size().assert_Is 2
          @[0].args.assert_Is [ 'search_term', 'a', { title: 'All Technologies', id: 'query-6234f2d47eb7' } ]
          @[1].args.assert_Is [ 'search_term', '', { title: 'All Technologies', id: 'query-6234f2d47eb7' } ]



