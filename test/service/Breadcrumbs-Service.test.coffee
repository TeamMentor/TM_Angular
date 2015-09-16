describe '| services | TM-API', ->

  breadcrumbs  = null

  beforeEach ()->
    module('TM_App')
    inject ($injector)->
      breadcrumbs = $injector.get('breadcrumbs_Service')

  it 'constructor', ()->
    using breadcrumbs, ->
      @.rootScope.constructor.name.assert_Is 'Scope'
      @.history.assert_Is {}
      @.current_Path.assert_Is ''

  it 'add_Breadcrumb', ->
    using breadcrumbs, ->
      @.add_Breadcrumb().assert_Is_False()
      @.add_Breadcrumb('aa', null).assert_Is_False()
      @.add_Breadcrumb(null, 'aa').assert_Is_False()
      @.add_Breadcrumb('an_Id', 'an_Title').assert_Is_True()
      @.history.assert_Is { an_Id: { title: 'an_Title', query_Id: 'an_Id'}}
      @.current_Path.assert_Is '/an_Id'
      @.add_Breadcrumb('an_Id', 'an_Title').assert_Is_False()           # adding the same thing again should not work
      @.add_Breadcrumb('an_Id_2', 'an_Title_2').assert_Is_True()
      @.history.assert_Is { an_Id: { title: 'an_Title', query_Id: 'an_Id'}, an_Id_2: { title: 'an_Title_2', query_Id: 'an_Id_2'}}
      @.current_Path.assert_Is '/an_Id/an_Id_2'

  it 'add_Breadcrumbs', ->
    using breadcrumbs, ->
      @.add_Breadcrumbs [ {id: 'an_Id_1', title: 'an_Title_1'}, {id: 'an_Id_2', title: 'an_Title_2'}, {id: 'an_Id_3', title: 'an_Title_3'}]
      @.current_Path.assert_Is '/an_Id_1/an_Id_2/an_Id_3'
      @.history.keys().assert_Is ['an_Id_1', 'an_Id_2', 'an_Id_3' ]

  it 'current_Breadcrumbs', ->
    using breadcrumbs, ->
      @.add_Breadcrumb('an_Id', 'an_Title').assert_Is_True()
      @.current_Breadcrumbs().assert_Is [ { query_Id: 'an_Id', title: 'an_Title', path: '' } ]
      @.add_Breadcrumb('an_Id_2', 'an_Title_2').assert_Is_True()
      @.current_Breadcrumbs().assert_Is [ { query_Id: 'an_Id', title: 'an_Title', path: '' } , { query_Id: 'an_Id_2', title: 'an_Title_2', path: '/an_Id' }]

  it 'move_Back', ->
    using breadcrumbs, ->
      @.add_Breadcrumbs [ {id: 'an_Id_1', title: 'an_Title_1'}, {id: 'an_Id_2', title: 'an_Title_2'}, {id: 'an_Id_3', title: 'an_Title_3'}]
      @.move_Back()
      @.current_Path.assert_Is  '/an_Id_1/an_Id_2'


  it 'on_Selected', ->
    inject ($rootScope)->
      using breadcrumbs, ->
        spyOn($rootScope, '$broadcast')

        @.on_Selected()

        breadcrumb = query_Id: 'el_Id', title: 'el_title', path:'el_path'
        @.on_Selected breadcrumb
        using $rootScope.$broadcast.calls.all(), ->
          @.size().assert_Is 1
          @.first().args.assert_Is ['apply_query', 'el_Id' ]

        breadcrumb_Search = query_Id: 'search-Id', title: 'el_title', path:'el_path'
        @.on_Selected breadcrumb_Search
        using $rootScope.$broadcast.calls.all(), ->
          @.size().assert_Is 3
          @[1].args.assert_Is ['apply_query', 'search-Id' ]
          @[2].args.assert_Is ['update_search', 'el_title' ]





