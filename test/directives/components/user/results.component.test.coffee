expect = chai.expect

describe '| directive | components | user | index', ->

  element     = null
  element_Raw = null
  scope       = null


  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<results/>')
      scope = $rootScope.$new()
      element     = $compile(element_Raw)(scope)[0]
      $rootScope.$digest()
      scope = element_Raw.find('div').eq(0).scope()             # getting the scope for the Controller


    #inject ($document)->
    #  body = angular.element $document[0].body
    #  body.find('results').remove()
    #  body.append element

  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('div').$attr().assert_Is { 'ng-controller': 'Results_Controller', class: 'ng-scope' }
        @('#resultsTitle').$attr().assert_Is id: 'resultsTitle', class: 'label ng-binding'
        @('#resultsTitle').$html().assert_Is 'Query has  articles'
        @('#view_Filters').$attr().assert_Is
                            id        : 'view_Filters'
                            href      : '#'
                            title     : 'View Filters'
                            'ng-click': 'toggle_Filters()'
                            class     : 'button btn-result icon-Filter'

  it 'Check results_Size binding',->

    inject ($$)->
      using $$(element).$query,->
        scope.results_Size = 42
        scope.$digest()
        @('#resultsTitle').$html().assert_Is 'Query has 42 articles'