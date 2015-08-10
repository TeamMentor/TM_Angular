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

    #inject ($document)->
    #  body = angular.element $document[0].body
    #  body.find('pagination').remove()
    #  body.append element

  it 'constructor',->
    inject ($$)->
      using $$(element).$query,->
        console.log @('#current_Page')





