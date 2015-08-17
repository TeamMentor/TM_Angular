expect = chai.expect

describe '| directive | search-bar', ->

  element      = null
  element_Raw  = null
  scope        = null
  filter_Data  = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope, graph_db_data)->

      element_Raw = angular.element('<search-bar/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()

      scope = element_Raw.find('div').eq(0).scope()     # getting the scope for the Controller

      filter_Data = graph_db_data['query_view_model_query-6234f2d47eb7_0_10']

  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('form'          ).$attr().assert_Is { 'ng-submit' : 'submit()', class: 'ng-pristine ng-valid' }
        @('select'        ).$attr().assert_Is { 'ng-model'  : 'selected_Technology', 'ng-change' : 'select_Technology(selected_Technology)','ng-options': 'technology as technology.title for technology in technologies', class       : 'ng-pristine ng-untouched ng-valid' }
        @('#search-text'  ).$attr().assert_Is { id: 'search-text'  , type: 'text'  , class: 'search-input ng-pristine ng-untouched ng-valid' , "ng-model": 'text', placeholder: 'Search TEAM Mentor', 'ng-change': 'get_Words(text)' , autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off'}
        @('#search-button').$attr().assert_Is { id: 'search-button', type: 'submit', class: 'btn-search' }

  it '| controller | $on query_data', ->

    using scope, ->
      @.$broadcast 'view_model_data', filter_Data
      @.$digest()

    using element_Raw.find('option'), ->
      #@.length      .assert_Is 12
      texts = (option.innerText for option in @)
      texts.first().assert_Is 'All'
      texts.assert_Is 	[ 'All', '.NET','Android','C++','HTML5',
                         'iOS','Java','PHP','Scala Play',
                         'Technology Independent','WCF','Web Application' , '....sugestions....']


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



  it 'Check options after filter_data $broadcast (with sample data)',->
    results      = [{title:'tech 1', id: 'id_1'}, {title: 'tech 2', id: 'id_2'}]
    scope.technologies.assert_Is {}
    scope.$broadcast 'view_model_data', { filters: {'Technology' : results   } }
    scope.$digest()
    inject ($$)->
      options = element_Raw.find('option')
      options.length.assert_Is 4
      seed = Number $$(options[0]).$attr().value.split(':')[1]  # need this since the object:{n} value can vary
      $$(options[0]).$attr().assert_Is 		{ value: 'object:' + seed++ , label: 'All'   , selected: 'selected' }
      $$(options[1]).$attr().assert_Is 		{ value: 'object:' + seed++ , label: 'tech 1'                       }
      $$(options[2]).$attr().assert_Is 		{ value: 'object:' + seed   , label: 'tech 2'                       }

      $$(options[3]).$attr().assert_Is    { 'ng-repeat': 'word in words', value: 'word', class: 'ng-binding ng-scope' }


# not completed
  #it 'Check selected option',->
  #  scope.$broadcast 'query_data', { filters: [{ title: 'Technology', results: results   } ] }
  #  #scope.$digest()
  #  inject ($$)->
  #    options = element_Raw.find('option')
  #    options[0].selected = true
  #    scope.$digest()

