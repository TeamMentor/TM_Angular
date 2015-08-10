expect = chai.expect

describe '| directives | design | login-form', ->

  element     = null
  element_Raw = null
  scope       = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope,$document)->
      element_Raw = angular.element('<events/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()
      scope  =  element_Raw.find('div').eq(0).scope()
      #angular.element($document[0].body).append(element)

  it 'check html elements',->
    inject ($$)->
      using $$(element).$query,->
        console.log element.$html()
        console.log @('h2')