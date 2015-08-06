expect = chai.expect

describe '| directive | component | index', ->

  element     = null
  element_Raw = null
  scope       = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<results/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()
      scope = element_Raw.find('div').eq(0).scope()     # getting the scope for the Controller


  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('div').$attr().assert_Is { 'ng-controller': 'Results_Controller', class: 'ng-scope' }
        @('#view_Filters').$attr().assert_Is
                            id        : 'view_Filters'
                            href      : '#'
                            title     : 'View Filters'
                            'ng-click': 'toggle_Filters()'
                            class     : 'button btn-result icon-Filter'

        #@('#filters').$attr().assert_Is id: 'filters'

      using $$(element).$query_All,->
        @('#filters td').length.assert_Is 0