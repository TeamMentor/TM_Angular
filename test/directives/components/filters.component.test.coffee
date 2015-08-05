expect = chai.expect

describe '| directive | component | filters', ->

  element     = null
  element_Raw = null
  scope       = null
  query_Tree_Url  = '/api/data/query_tree/query-6234f2d47eb7'
  query_Tree_Data =
    filters: [ { results: [ { title: 'title', id: 'id' , size: 42}]}]
  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($httpBackend)->
      $httpBackend.expectGET(query_Tree_Url).respond query_Tree_Data

    inject ($compile,$rootScope)->
      element_Raw = angular.element('<filters/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()
      scope  =  element_Raw.find('div').eq(0).scope()

    inject ($httpBackend)->
      $httpBackend.flush()

  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('div'          ).$attr().assert_Is 'ng-controller': 'Filters_Controller'  , class: 'ng-scope'
        @('section'      ).$attr().assert_Is 'ng-show'      : 'view_Filters'        , class: 'row ng-hide'
        @('#filters'     ).$attr().assert_Is 'ng-repeat'    : 'filter in filters'   , class: 'ng-scope'   , id: 'filters'
        @('#results'     ).$attr().assert_Is                                                                id: 'results'
        @('#results a'   ).$attr().assert_Is 'ng-repeat': 'result in filter.results', class: 'ng-scope'
        @('#results a dd').$attr().assert_Is 'ng-click' : 'apply_Filter(result.id, result.title)', 'ng-show': 'result.size >0', href: '#'
        @('#results a dd').outerText.assert_Is 'title42'

  it 'Check ng-show status on view_Filters broadcast',->
    inject ($$, $rootScope)->
      using $$(element).$query,->
        $rootScope.$broadcast 'view_Filters', true
        scope.$digest()
        @('section'   ).$attr().assert_Is 	{ 'ng-show': 'view_Filters', class: 'row' }

        $rootScope.$broadcast 'view_Filters', false
        scope.$digest()
        @('section'   ).$attr().assert_Is 	{ 'ng-show': 'view_Filters', class: 'row ng-hide' }


  it 'Check that ng-click on filter broadcasts an apply_Filter event',->
    scope.$on 'apply_Filter', (event,filter_Id, filter_Title )->
      filter_Id   .assert_Is 'id'
      filter_Title.assert_Is 'title'
    element_Raw.find('dd').triggerHandler('click')