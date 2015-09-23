expect = chai.expect


  element      = null
  element_Raw  = null
  scope        = null
  filter_Data  = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    url = '/api/data/query_view_model/query-6234f2d47eb7/0/0'

    inject ($httpBackend, TM_API, graph_db_data)->
      index_Data = graph_db_data['query_view_model_query-6234f2d47eb7_0_10'] # for this test we can send the entire object (i.e. including articles)
      $httpBackend.expectGET(url).respond index_Data

    inject ($compile, $rootScope, graph_db_data)->
      element_Raw = angular.element('<search-bar/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()
      scope = element_Raw.find('div').eq(0).scope()     # getting the scope for the Controller
      filter_Data = graph_db_data['query_view_model_query-6234f2d47eb7_0_10']

    inject ($httpBackend, TM_API, graph_db_data)->
      $httpBackend.flush()
      TM_API.cache_Query_View_Model.keys().assert_Is [ url ]

  afterEach ->
    inject ($httpBackend)->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()


  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('form'          ).$attr().assert_Is { 'ng-submit' : 'submit()', class: 'ng-pristine ng-valid' }
        @('select'        ).$attr().assert_Is { 'ng-model'  : 'selected_Technology', 'ng-change' : 'select_Technology(selected_Technology)','ng-options': 'technology as technology.title for technology in technologies', class       : 'ng-pristine ng-untouched ng-valid' }
        @('#search-text'  ).$attr().assert_Is { id: 'search-text'  , type: 'text'  , class: 'search-input ng-pristine ng-untouched ng-valid' , "ng-model": 'text', placeholder: 'Search All of TEAM Mentor', 'ng-change': 'get_Words(text)' ,  'ng-focus': 'with_Focus(true)', 'ng-blur': 'with_Focus(false)',autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off'}
        @('#search-button').$attr().assert_Is { id: 'search-button', type: 'submit', class: 'btn-search' }

  it '| controller | $on query_data', ->

    using scope, ->
      #@.$broadcast 'view_model_data', filter_Data
      #@.$digest()

    console.log 'aaa12'

    using element_Raw.find('option'), ->
      #@.length      .assert_Is 12
      texts = (option.innerText for option in @)
      texts.first().assert_Is 'All Technologies'
      console.log texts
      texts.assert_Is [ 'All Technologies', 'Web Application', 'Technology Independent',
                        'C++', 'iOS', 'Java', 'Android', '.NET', 'Scala Play',
                        'PHP', 'WCF', 'HTML5' ]

# the test below represents the previous behaviour where the drop down was populated using the view_model_data (which has a number of side effects)
#  it 'Check options after filter_data $broadcast (with sample data)',->
#    results      = [{title:'tech 1', id: 'id_1'}, {title: 'tech 2', id: 'id_2'}]
#    scope.technologies.keys().size().assert_Is 12
#    #scope.$broadcast 'view_model_data', { filters: {'Technology' : results   } }
#    scope.$digest()
#    inject ($$)->
#      options = element_Raw.find('option')
#      options.length.assert_Is 12
#      seed = Number $$(options[0]).$attr().value.split(':')[1]  # need this since the object:{n} value can vary
#      console.log $$(options[1]).$attr()
#      $$(options[0]).$attr().assert_Is 		{ value: 'object:' + seed++ , label: 'All Technologies'   , selected: 'selected' }
#      $$(options[1]).$attr().assert_Is 		{ value: 'object:' + seed++ , label: 'tech 1'                       }
#      $$(options[2]).$attr().assert_Is 		{ value: 'object:' + seed   , label: 'tech 2'                       }



# this is not working (I can't seem to be able to trigger the select_Technology from the options)
  ###

  fit 'Check that selecting an option trigger $scope.select_Technology', ->
    scope.select_Technology = ->
      console.log scope.text

    using scope, ->
      @.$broadcast 'filter_data', filter_Data
      @.$digest()

    inject ($$)->
      using $$(element).$query,->
        console.log @('option').$attr()
        @('option[label=Java]').$html().assert_Is 'Java'
        #@('option[label=Java]').$click()
        technologies =  @('option[label=Java]').$scope().technologies

        #scope = @('select').$scope()
        scope.selected_Technology =  scope.technologies[4]
        #scope.$digest()
        #scope.selected_Technology =  scope.technologies[3]
        #scope.$digest()
        #console.log angular.element(@('select')).triggerHandler('change')
        #console.log @('option[label=Java]').$scope()
        #console.log angular.element(@('option[label=Java]')).scope()
        #angular.element(element).triggerHandler('click')

        console.log angular.element(@('select')).triggerHandler 'change'

        #scope.$digest()
        console.log scope.selected_Technology
  ###

# not completed
  #it 'Check selected option',->
  #  scope.$broadcast 'query_data', { filters: [{ title: 'Technology', results: results   } ] }
  #  #scope.$digest()
  #  inject ($$)->
  #    options = element_Raw.find('option')
  #    options[0].selected = true
  #    scope.$digest()

