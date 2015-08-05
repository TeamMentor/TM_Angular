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
                  .respond ()-> [200, { }]

  it 'ui-route', ->
    inject ($$, $compile, $rootScope, $state, $httpBackend)->
      elem  = angular.element('<div>');
      scope = $rootScope.$new();
      elem.append $compile('<ui-view/>')(scope)

      #console.log elem.find('div')
      #console.log elem[0].outerHTML
      $state.go('index')
      $httpBackend.flush()
      #$rootScope.$digest()

      using $$(elem[0]).$query,->
        @('main'       ).$attr().assert_Is { class: 'ng-scope' }
        @('section'    ).$attr().assert_Is { class: 'row' }
        console.log @('queries')
      console.log elem[0].outerHTML

      console.log elem.find('main')[0].outerHTML

