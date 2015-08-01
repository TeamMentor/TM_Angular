describe '| directive | search-bar', ->

  element     = null
  element_Raw = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      scope       = $rootScope.$new();
      element_Raw = angular.element('<search-bar/>')
      element     = $compile(element_Raw)(scope)[0]
      scope.$digest()

  it 'check html elements',->

    inject ($$)->
      $$(element).$query('input').$attr().assert_Is {id: 'search-text', type: 'text', "ng-model": 'text', placeholder: 'Type keywords here', class: 'search-input ng-pristine ng-untouched ng-valid'}
