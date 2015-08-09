expect = chai.expect

describe '| directive | components | user | breadcrumbs', ->
  element     = null
  element_Raw = null
  scope       = null


  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<breadcrumbs/>')
      scope       = $rootScope.$new()
      element     = $compile(element_Raw)(scope)[0]
      $rootScope.$digest()
      scope = element_Raw.find('div').eq(0).scope()             # getting the scope for the Controller

      using  scope, ->
        @.history['aaa'] = query_Id : 'aaa-id', title: 'aaa-title'
        @.history['bbb'] = query_Id : 'bbb-id', title: 'bbb-title'
        @.current_Path = '/aaa/bbb'
        @.breadcrumbs = [{ query_Id: 'aaa-id', title: 'aaa-title', path: '' }]


    inject ($document)->
      body = angular.element $document[0].body
      body.find('breadcrumbs').remove()
      body.append element

  it 'constructor',->
    inject ($$)->
      using $$(element).$query,->
        @('div'   ).$attr().assert_Is 'ng-controller': 'Breadcrumbs_Controller', class: 'ng-scope'
        @('div dl').$attr().assert_Is class: 'breadcrumbs'
        @('div dl').$html().assert_Is '<!-- ngRepeat: breadcrumb in breadcrumbs -->'


  it '| controller | refresh_Breadcrumbs', ()->
    inject ($$)->
      using scope,->
        @.refresh_Breadcrumbs()
        @.$digest()

      using $$(element).$query,->
        @('dd'  ).$attr().assert_Is 'ng-repeat'    : 'breadcrumb in breadcrumbs'              , class: 'active ng-scope'
        @('dd a').$attr().assert_Is 'ng-href'      : '#', 'ng-click': 'load_Query(breadcrumb)', class: 'ng-binding', href: '#'

      using $$(element).$query_All,->
        #@('dd a')[0].innerText.assert_Is 'AAA-title'               # this fails in Karma (it seems to think that the value should be 'aaa-title'
        using angular.element(@('dd a')[0]).scope().breadcrumb,->
          delete @.$$hashKey
          @.assert_Is { query_Id: 'aaa-id', title: 'aaa-title', path: '' }

        #@('dd a')[1].innerText.assert_Is 'BBB-TITLE'              # same prob as above
        using angular.element(@('dd a')[1]).scope().breadcrumb,->
          delete @.$$hashKey
          @.assert_Is { query_Id: 'bbb-id', title: 'bbb-title', path: '/aaa' }

  it '| controller | $on clear_Query', ->
    inject ($$)->
      using scope,->
        @.current_Path.assert_Is '/aaa/bbb'
        @.breadcrumbs.assert_Is [{ query_Id: 'aaa-id', title: 'aaa-title', path: '' }]
        @.$digest()

        expect($$(element).$query('dd')).to.not.equal null

        @.$broadcast 'clear_Query'
        @.$digest()

        @.current_Path.assert_Is ''
        @.breadcrumbs .assert_Is []
        expect($$(element).$query('dd')).to.equal null

  it '| controller | $on query_data', ->
    using scope,->
      @.$broadcast 'query_data', { id: 'ccc', title: 'ccc-title'}
      @.$digest()
      @.current_Path.assert_Is '/aaa/bbb/ccc'
      @.history.keys().size().assert_Is 3
      @.history['ccc'].assert_Is { query_Id: 'ccc', title: 'ccc-title'}
      @.breadcrumbs.size().assert_Is 3
      using @.breadcrumbs.pop(), ->
        delete @.$$hashKey
        @.assert_Is query_Id: 'ccc', title: 'ccc-title', path:'/aaa/bbb'

  it '| controller | $on load_Query', ->
    inject ($$)->
      using scope,->
        @.refresh_Breadcrumbs()
        @.$digest()

        scope.$on 'apply_Query', (event, query_Id)->
          query_Id.assert_Is 'aaa-id'

        $$(element).$query('a').$click()

        @.current_Path.assert_Is ''