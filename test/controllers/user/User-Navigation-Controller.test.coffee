expect = chai.expect;

describe '| controllers | user | User-Navigation-Controller.test',->
  scope    = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('User_Navigation_Controller', { $scope: scope })

  afterEach ->
    inject ($httpBackend)->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()

  it 'constructor', ()->
    using scope, ->
      @.index_States.assert_Is ['index', 'index_query_id', 'index_query_id_filters']
      @.show_Loading_Image.assert_Is_False()
      @.$$listeners.keys().size().assert_Is 2
      expect(@.$$listeners['http_start'][0]).to.be.an('function')
      expect(@.$$listeners['http_end'  ][0]).to.be.an('function')
      expect(@.open_Query_State).to.be.an('function')

  it '$on http_start', ()->
    inject ($rootScope)->
      using scope, ->
        @.show_Loading_Image.assert_Is_False()
        $rootScope.$broadcast 'http_start'
        @.show_Loading_Image.assert_Is_True()

  it '$on http_end', ()->
    inject ($rootScope, $timeout)->
      using scope, ->
        @.show_Loading_Image.assert_Is_False()
        $rootScope.$broadcast 'http_start'
        @.show_Loading_Image.assert_Is_True()
        $rootScope.$broadcast 'http_end'
        @.show_Loading_Image.assert_Is_True()
        $timeout.flush()
        @.show_Loading_Image.assert_Is_False()


  it 'open_Query_State (check state change)', ->
    inject ($state, $httpBackend, $timeout)->
      using scope, ->
        $state.current.name.assert_Is ''
        @.open_Query_State()
        @.$digest()
        $timeout.flush()
        $state.current.name.assert_Is 'index'


  it 'open_Query_State (check events called)', ->
    inject ($rootScope, $state, $httpBackend, $timeout)->

      spyOn($rootScope, '$broadcast').and.callThrough()

      using scope, ->
        @.show_Loading_Image.assert_Is_False()

        using $rootScope.$broadcast.calls.all(), ->
          @.size().assert_Is 0

        @.open_Query_State()                    # the first time @.open_Query_State is called it should redirect to 'index'
        $state.current.name.assert_Is ''
        $timeout.flush()
        $state.current.name.assert_Is 'index'
        @.show_Loading_Image.assert_Is_False()  # and should not trigger any http requests

        using $rootScope.$broadcast.calls.all(), ->
          @.size().assert_Is 14
          @[ 0].args.assert_Is  [ '$locationChangeStart'  , 'http://server/', 'http://server/', undefined, undefined ]
          @[ 1].args.assert_Is  [ '$locationChangeSuccess', 'http://server/', 'http://server/', undefined, undefined ]
          @[ 2].args.assert_Is  [ '$stateChangeStart'     , { url: '/:article_Id', templateUrl: '/angular/jade-html/views/user/article', name: 'guid' }, { article_Id: '' }, { name: '', url: '^', views: null, abstract: true }, {} ]
          @[ 3].args[0].assert_Is '$viewContentLoading'
          @[ 3].args[1].locals.assert_Is $stateParams: article_Id: ''
          @[ 3].args[1].params.assert_Is article_Id: ''
          @[ 4].args.assert_Is  ['http_start']
          @[ 5].args.assert_Is  ['http_end']
          @[ 6].args.assert_Is  [ '$stateChangeSuccess'   , { url: '/:article_Id', templateUrl: '/angular/jade-html/views/user/article', name: 'guid' }, { article_Id: '' }, { name: '', url: '^', views: null, abstract: true }, {} ]
          @[ 7].args.assert_Is  [ '$stateChangeStart'     , { url: '/index', templateUrl: '/angular/jade-html/views/user/index',name: 'index' }, {}, { url: '/:article_Id', templateUrl: '/angular/jade-html/views/user/article', name: 'guid' }, { article_Id: '' } ]
          @[ 8].args[0].assert_Is '$viewContentLoading'
          @[ 8].args[1].locals.assert_Is $stateParams: {}
          @[ 8].args[1].params.assert_Is {}
          @[ 9].args.assert_Is  [ 'http_start']
          @[10].args.assert_Is  [ 'http_end']
          @[11].args.assert_Is  [ '$stateChangeSuccess'   , { url: '/index', templateUrl: '/angular/jade-html/views/user/index',name: 'index' }, {}, { url: '/:article_Id', templateUrl: '/angular/jade-html/views/user/article', name: 'guid' }, { article_Id: '' } ]
          @[12].args.assert_Is  [ '$locationChangeStart'  , 'http://server/index', 'http://server/', undefined, undefined ]
          @[13].args.assert_Is  [ '$locationChangeSuccess', 'http://server/index', 'http://server/', null     , undefined ]


        @.open_Query_State()                    # the 2nd time @.open_Query_State is called it should trigger a number of broadcasts
        $httpBackend.expectGET('/api/data/query_view_model/query-6234f2d47eb7/0/10').respond {}
        $httpBackend.flush()
        $timeout.flush()
        @.show_Loading_Image.assert_Is_False()

        using $rootScope.$broadcast.calls.all(), ->
          @.size().assert_Is 22
          @[13].args.assert_Is  [ '$locationChangeSuccess', 'http://server/index', 'http://server/', null     , undefined ]
          @[14].args.assert_Is  [ 'clear_filter', 'All']
          @[15].args.assert_Is  [ 'loading_query', null, null]
          @[16].args.assert_Is  [ 'clear_filters']
          @[17].args.assert_Is  [ 'clear_query']
          @[18].args.assert_Is  [ 'loading_query', 'query-6234f2d47eb7', undefined, 0, 10 ]
          @[19].args.assert_Is  [ 'http_start']
          @[20].args.assert_Is  [ 'http_end']
          @[21].args.assert_Is  [ 'view_model_data', {}]
