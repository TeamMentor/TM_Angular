expect = chai.expect;

describe '| controllers | user | Breadcrumbs-Controller',->
  scope = null

  beforeEach ->
    module('TM_App')

  beforeEach ->
    inject ($controller, $rootScope, $httpBackend)->
      scope       = $rootScope.$new()
      $controller 'Breadcrumbs_Controller', { $scope: scope}
      scope.$digest()

  it 'constructor', ->
    using scope, ->
      #@.history     .assert_Is {}
      #@.current_Path.assert_Is ''
      #@.breadcrumbs .assert_Is []
      @.visible.assert_Is_False
      @.breadcrumbs_Service.constructor.name.assert_Is 'Breadcrumbs_Service'

      @.$$listeners.keys().size().assert_Is 2
      expect(@.$$listeners['clear_query'    ][0]).to.be.an('function')
      expect(@.$$listeners['view_model_data'][0] ).to.be.an('function')

      expect(@.refresh_Breadcrumbs).to.be.an 'function'
      expect(@.load_Query         ).to.be.an 'function'

      @.breadcrumbs_Service.history     .assert_Is {}
      @.breadcrumbs_Service.current_Path.assert_Is ''
      @.breadcrumbs_Service.breadcrumbs .assert_Is []


  it 'refresh_Breadcrumbs', ->
    using scope, ->
      @.breadcrumbs_Service.history =
          'aaa' : { query_Id : 'aaa_id', title : 'aaa_title' }
          'bbb' : { query_Id : 'bbb_id', title : 'bbb_title' }
          'ccc' : { query_Id : 'ccc_id', title : 'ccc_title' }
      @.breadcrumbs_Service.current_Path = '/aaa/bbb/ccc/ddd'                         # the last /ddd should be ignored because it is not on the @.history
      @.refresh_Breadcrumbs()
      @.breadcrumbs.assert_Is [ { query_Id: 'aaa_id', title: 'aaa_title', path: ''         }
                                { query_Id: 'bbb_id', title: 'bbb_title', path: '/aaa'     }
                                { query_Id: 'ccc_id', title: 'ccc_title', path: '/aaa/bbb' } ]

  it '$on clear_query', ->
    using scope, ->
      @.breadcrumbs_Service.current_Path = 'aaaa'
      @.breadcrumbs_Service.add_Breadcrumb('a','b')
      scope.$broadcast 'clear_query'
      @.breadcrumbs_Service.current_Path.assert_Is ''
      @.breadcrumbs_Service.current_Breadcrumbs().assert_Is []

  it '$on query_data', ->
    using scope, ->
      scope.$broadcast 'view_model_data', { id: 'aaa_id', title: 'aaa'}                      # on aaa_id
      @.breadcrumbs_Service.current_Path.assert_Is '/aaa_id'
      @.breadcrumbs.assert_Is [ { query_Id: 'aaa_id', title: 'aaa', path: '' } ]

      scope.$broadcast 'view_model_data', { id: 'bbb_id', title: 'bbb'}                      # on bbb_id
      @.breadcrumbs_Service.current_Path.assert_Is '/aaa_id/bbb_id'
      @.breadcrumbs.assert_Is [ { query_Id: 'aaa_id', title: 'aaa', path: '' }
                                { query_Id: 'bbb_id', title: 'bbb', path: '/aaa_id' } ]

      scope.$broadcast 'view_model_data', { id: 'ccc_id', title: 'ccc'}                      # on ccc_id
      @.breadcrumbs_Service.current_Path.assert_Is '/aaa_id/bbb_id/ccc_id'
      @.breadcrumbs.assert_Is [ { query_Id: 'aaa_id', title: 'aaa', path: '' }
                                { query_Id: 'bbb_id', title: 'bbb', path: '/aaa_id' }
                                { query_Id: 'ccc_id', title: 'ccc', path: '/aaa_id/bbb_id' } ]

      scope.$broadcast 'view_model_data', { id: 'bbb_id', title: 'bbb'}                      # on bbb_id (again
      @.breadcrumbs_Service.current_Path.assert_Is '/aaa_id/bbb_id/ccc_id'

  it 'load_Query',->
    using scope, ->
      @.breadcrumbs_Service.current_Path = '....'
      @.load_Query()                    ; @.breadcrumbs_Service.current_Path.assert_Is '....'
      @.load_Query { path: '1111'}      ; @.breadcrumbs_Service.current_Path.assert_Is '....'     # query_Id value need to be provided

      @.$on 'apply_query', (event, query_Id)->
        query_Id.assert_Is '2222'

      @.load_Query { path: '1111', query_Id: '2222'}
      @.breadcrumbs_Service.current_Path.assert_Is '1111'

