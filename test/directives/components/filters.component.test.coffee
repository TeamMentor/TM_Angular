expect = chai.expect

describe '| directive | login-form', ->

  element     = null
  element_Raw = null
  scope       = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree/query-6234f2d47eb7').respond({})

    inject ($compile,$rootScope)->
      element_Raw = angular.element('<filters/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()
      scope  =  element_Raw.find('div').eq(0).scope()

  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('div'       ).$attr().assert_Is 'ng-controller': 'Filters_Controller', class: 'ng-scope'
        @('section'   ).$attr().assert_Is 'ng-show'      :'view_Filters'       , class: 'row ng-hide'


  it 'Check ng-show status on view_Filters broadcast',->
    inject ($$, $rootScope)->
      using $$(element).$query,->
        $rootScope.$broadcast 'view_Filters', true
        scope.$digest()
        @('section'   ).$attr().assert_Is 	{ 'ng-show': 'view_Filters', class: 'row' }

        $rootScope.$broadcast 'view_Filters', false
        scope.$digest()
        @('section'   ).$attr().assert_Is 	{ 'ng-show': 'view_Filters', class: 'row ng-hide' }