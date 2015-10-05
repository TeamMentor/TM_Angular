expect = chai.expect

describe '| directive | components | user | pagination', ->
  element     = null
  element_Raw = null
  scope       = null


  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<pagination/>')
      scope       = $rootScope.$new()
      element     = $compile(element_Raw)(scope)[0]
      $rootScope.$digest()
      scope = element_Raw.find('div').eq(0).scope()             # getting the scope for the Controller

  it 'constructor',->
    inject ($$)->
      using $$(element).$query,->
        @('#current_Page').$attr().assert_Is { id: 'current_Page', class: 'number' }