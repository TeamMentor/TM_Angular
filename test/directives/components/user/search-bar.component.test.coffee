expect = chai.expect

describe '| directive | search-bar', ->

  element      = null
  element_Raw  = null
  scope        = null
  results      = [{title:'tech 1', id: 'id_1'}, {title: 'tech 2', id: 'id_2'}]

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope, $httpBackend)->

      #$httpBackend.whenGET('/api/data/query_tree_queries/query-6234f2d47eb7').respond ()->
      #  return [200, { filters: [{ title: 'Technology', results: results   } ] }  ]

      element_Raw = angular.element('<search-bar/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()

      scope = element_Raw.find('div').eq(0).scope()     # getting the scope for the Controller

  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('form'          ).$attr().assert_Is { 'ng-submit' : 'submit()', class: 'ng-pristine ng-valid' }
        @('select'        ).$attr().assert_Is { 'ng-model'  : 'selected_Technology', 'ng-change' : 'select_Technology(selected_Technology)','ng-options': 'technology as technology.title for technology in technologies', class       : 'ng-pristine ng-untouched ng-valid' }
        @('#search-text'  ).$attr().assert_Is { id: 'search-text'  , type: 'text'  , class: 'search-input ng-pristine ng-untouched ng-valid' , "ng-model": 'text', placeholder: 'Search TEAM Mentor'}
        @('#search-button').$attr().assert_Is { id: 'search-button', type: 'submit', class: 'btn-search' }

  it 'Check options after first digest (should trigger query_data broadcast) ',->

    expect(scope.technologies).to.equal(undefined)
    scope.$broadcast 'query_data', { filters: [{ title: 'Technology', results: results   } ] }
    scope.$digest()
    inject ($$)->
      options = element_Raw.find('option')
      options.length.assert_Is 3
      seed = Number $$(options[0]).$attr().value.split(':')[1]  # need this since the object:{n} value can vary
      $$(options[0]).$attr().assert_Is 		{ value: 'object:' + seed++ , label: 'All'   , selected: 'selected' }
      $$(options[1]).$attr().assert_Is 		{ value: 'object:' + seed++ , label: 'tech 1'                       }
      $$(options[2]).$attr().assert_Is 		{ value: 'object:' + seed   , label: 'tech 2'                       }

  # not completed
  #it 'Check selected option',->
  #  scope.$broadcast 'query_data', { filters: [{ title: 'Technology', results: results   } ] }
  #  #scope.$digest()
  #  inject ($$)->
  #    options = element_Raw.find('option')
  #    options[0].selected = true
  #    scope.$digest()

