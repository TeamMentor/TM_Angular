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

      element_Raw = angular.element('<recommendations/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()

      scope = element_Raw.find('div').eq(0).scope()     # getting the scope for the Controller

  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        #@('form'          ).$attr().assert_Is { 'ng-submit' : 'submit()', class: 'ng-pristine ng-valid' }
        console.log 'asd'