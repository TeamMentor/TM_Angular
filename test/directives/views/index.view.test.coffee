expect = chai.expect

describe '| directive | |views | index', ->

  element     = null
  element_Raw = null
  scope       = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($httpBackend)->
      url_Query_Tree     = '/api/data/query_tree/query-6234f2d47eb7'
      $httpBackend.whenGET url_Query_Tree
                  .respond ()-> [200, { id: 'aaa-id' ,title: 'aaaa',  results: [] } ]


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
      $httpBackend.flush()

      using $$(element[0]).$query,->
        @('div'       ).$attr().assert_Is { class: 'ng-scope' , 'ng-controller': 'Index_Controller'}
        @('section'   ).$attr().assert_Is { class: 'row__label' }
        @('.main'     ).$attr().assert_Is { class: 'main'       }
        @('queries'   ).$attr().assert_Is {}
        @('articles'  ).$attr().assert_Is {}
        @('filters'   ).$attr().assert_Is {}
        #@('queries_breadcrumbs').$attr().assert_Is {}

