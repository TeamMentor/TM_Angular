expect = chai.expect

describe '| directive | |views | index', ->

  element     = null
  element_Raw = null
  scope       = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($httpBackend)->
      #$httpBackend.expectGET('/api/data/query_view_model/query-6234f2d47eb7'      ).respond ()-> [200, { id: 'aaa-id' ,title: 'aaaa',  results: [] } ]
      $httpBackend.expectGET('/api/data/query_view_model/query-6234f2d47eb7/0/10'  ).respond ()-> {}


  it 'Confirm that expected directives are inserted in page', ->
    inject ($$, $compile, $rootScope, $state, $httpBackend)->
      element  = angular.element('<div>')
      scope = $rootScope.$new();
      element.append $compile('<ui-view/>')(scope)

      inject ($document)->
        body = angular.element $document[0].body
        body.find('breadcrumbs').remove()
        body.append element

      $state.go('index')
      scope.$digest()

      using $$(element[0]).$query,->
        @('ui-view'       ).$attr().assert_Is class: 'ng-scope'
        @('div.main'      ).$attr().assert_Is class: 'main ng-scope'  , 'ng-controller': 'Index_Controller'
        @('div.left-col'  ).$attr().assert_Is class: 'col-3 application-scroll left-col'
        @('div.middle-col').$attr().assert_Is class: 'col-6 middle-col'
        @('div.right-col' ).$attr().assert_Is class: 'col-3 application-scroll right-col'

        @('.display-desktop').$attr()                      .assert_Is class: 'display-desktop'
        @('.display-desktop').$query('breadcrumbs').$attr().assert_Is {}
        @('results'         ).$attr()                      .assert_Is {}
        @('filters_active'  ).$attr()                      .assert_Is {}

        @('.scrolling-results').$attr()                      .assert_Is class: 'scrolling-results'
        @('.scrolling-results').$query('articles'   ).$attr().assert_Is {}
        @('.scrolling-results').$query('pagination' ).$attr().assert_Is {}
        @('filters'           ).$attr()                      .assert_Is class: 'filters'

        @('.right-col .display-desktop').$query('found_issue').$attr().assert_Is {}