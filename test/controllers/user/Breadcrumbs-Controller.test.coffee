expect = chai.expect;

describe '| controllers | user | Breadcrumbs-Controller',->
  scope = null
  #articles_Source      = [ { title:'tech 1', id: 'id_1' },
  #  { title: 'tech 2', id: 'id_2' }]
  #articles_Transformed = [ { title: 'tech 1', id: 'id_1', url: '/angular/user/article/id_1/tech-1' },
  #  { title: 'tech 2', id: 'id_2', url: '/angular/user/article/id_2/tech-2' } ]

  beforeEach ->
    module('TM_App')

  beforeEach ->
  #  inject ($httpBackend)->
  #    $httpBackend.whenGET('/api/data/query_tree/query-6234f2d47eb7').respond ()->
  #      return [200, { results: articles_Source }  ]

  beforeEach ->
    inject ($controller, $rootScope, $httpBackend)->
      scope       = $rootScope.$new()
      $controller 'Breadcrumbs_Controller', { $scope: scope}
      scope.$digest()

  it 'constructor', ->
    using scope, ->
      expect(@.$$listeners['clear_Query'][0]).to.be.an('function')
      expect(@.$$listeners['query_data'][0] ).to.be.an('function')
      expect(@.refresh_Breadcrumbs).to.be.an 'function'
      expect(@.load_Query         ).to.be.an 'function'

      @.history     .assert_Is {}
      @.current_Path.assert_Is ''
      @.breadcrumbs .assert_Is []


  it 'refresh_Breadcrumbs', ->
    using scope, ->
      @.history =
          'aaa' : { query_Id : 'aaa_id', title : 'aaa_title' }
          'bbb' : { query_Id : 'bbb_id', title : 'bbb_title' }
          'ccc' : { query_Id : 'ccc_id', title : 'ccc_title' }
      @.current_Path = '/aaa/bbb/ccc'
      @.refresh_Breadcrumbs()
      @.breadcrumbs.assert_Is [ { query_Id: 'aaa_id', title: 'aaa_title', path: ''         }
                                { query_Id: 'bbb_id', title: 'bbb_title', path: '/aaa'     }
                                { query_Id: 'ccc_id', title: 'ccc_title', path: '/aaa/bbb' } ]

  it '$on clear_Query', ->
    using scope, ->
      @.current_Path = 'aaaa'
      @.breadcrumbs  = ['bbb']
      scope.$broadcast 'clear_Query'
      @.current_Path.assert_Is ''
      @.breadcrumbs.assert_Is []

  it '$on query_data', ->
    using scope, ->
      scope.$broadcast 'query_data', { id: 'aaa_id', title: 'aaa'}                      # on aaa_id
      @.current_Path.assert_Is '/aaa_id'
      @.breadcrumbs.assert_Is [ { query_Id: 'aaa_id', title: 'aaa', path: '' } ]

      scope.$broadcast 'query_data', { id: 'bbb_id', title: 'bbb'}                      # on bbb_id
      @.current_Path.assert_Is '/aaa_id/bbb_id'
      @.breadcrumbs.assert_Is [ { query_Id: 'aaa_id', title: 'aaa', path: '' }
                                { query_Id: 'bbb_id', title: 'bbb', path: '/aaa_id' } ]

      scope.$broadcast 'query_data', { id: 'ccc_id', title: 'ccc'}                      # on ccc_id
      @.current_Path.assert_Is '/aaa_id/bbb_id/ccc_id'
      @.breadcrumbs.assert_Is [ { query_Id: 'aaa_id', title: 'aaa', path: '' }
                                { query_Id: 'bbb_id', title: 'bbb', path: '/aaa_id' }
                                { query_Id: 'ccc_id', title: 'ccc', path: '/aaa_id/bbb_id' } ]

      scope.$broadcast 'query_data', { id: 'bbb_id', title: 'bbb'}                      # on bbb_id (again
      @.current_Path.assert_Is '/aaa_id/bbb_id/ccc_id'

  it 'load_Query',->
    using scope, ->
      @.current_Path = '....'
      @.load_Query()                    ; @.current_Path.assert_Is '....'
      @.load_Query { path: '1111'}      ; @.current_Path.assert_Is '....'
      @.load_Query { query_Id: '1111'}  ; @.current_Path.assert_Is '....'               # both values need to be provided

      @.$on 'apply_Query', (event, query_Id)->
        query_Id.assert_Is '2222'

      @.load_Query { path: '1111', query_Id: '2222'}
      @.current_Path.assert_Is '1111'

