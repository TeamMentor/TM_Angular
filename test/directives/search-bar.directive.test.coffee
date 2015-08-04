expect = chai.expect

describe '| directive | search-bar', ->

  element      = null
  element_Raw  = null
  scope        = null
  results      = [{title:'tech 1', query_Id: 'id_1'}, {title: 'tech 2', query_Id: 'id_2'}]
  default_Tech = [{title: 'All'  , query_Id: null  }]

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope, $httpBackend)->

      $httpBackend.whenGET('/api/data/query_tree/query-6234f2d47eb7').respond ()->
        return [200, { filters: [{ title: 'Technology', results: results   } ] }  ]

      element_Raw = angular.element('<search-bar/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()

      scope = element_Raw.find('div').eq(0).scope()     # getting the scope for the Controller

  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('form'          ).$attr().assert_Is { 'ng-submit': 'submit()', class: 'ng-pristine ng-valid' }
        @('select'        ).$attr().assert_Is {}
        @('#search-text'  ).$attr().assert_Is { id: 'search-text'  , type: 'text'  , class: 'search-input ng-pristine ng-untouched ng-valid' , "ng-model": 'text', placeholder: 'Type keywords here'}
        @('#search-button').$attr().assert_Is { id: 'search-button', type: 'submit', class: 'btn-search' }

  it 'Check options after first digest (should trigger query_data broadcast) ',->

    inject ($$, $httpBackend)->
      expect(scope.technologies).to.equal(undefined)
      $httpBackend.flush()
      options = element_Raw.find('option')
      options.length.assert_Is 3

      $$(options[0]).$attr().assert_Is 		{ 'ng-repeat': 'technology in technologies', value  : '{"title":"All","query_Id":null}'     , class : 'ng-binding ng-scope' }
      $$(options[1]).$attr().assert_Is 		{ 'ng-repeat': 'technology in technologies', value  : '{"title":"tech 1","query_Id":"id_1"}', class : 'ng-binding ng-scope' }
      $$(options[2]).$attr().assert_Is 		{ 'ng-repeat': 'technology in technologies', value  : '{"title":"tech 2","query_Id":"id_2"}', class : 'ng-binding ng-scope' }

  it 'Check selected option',->
    inject ($$, $httpBackend)->
      $httpBackend.flush()
      scope.$digest()
      console.log scope.technologies
      console.log scope.technology

      options = element_Raw.find('option')
      options[0].selected = true
      console.log $$(options[0])
      scope.$digest()
      console.log scope.technology

