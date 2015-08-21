expect = chai.expect

describe '| directives | component | filters', ->

  element     = null
  element_Raw = null
  scope       = null

  query_Tree_Filters_Data =

    filters:  { 'Technology': [ { title: 'title', id: 'id' , size: 42 } ] }

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<filters/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()
      scope  =  element_Raw.find('div').eq(0).scope()

  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('div'          ).$attr().assert_Is 'ng-controller': 'Filters_Controller'  , class: 'ng-scope'
        @('.section'     ).$attr().assert_Is 'ng-show'      : 'view_Filters'        , class: 'section row ng-hide'

  it 'controller | $on view_model_data',->
    using scope, ->
      @.$broadcast 'view_model_data', query_Tree_Filters_Data
      @.$digest()

    inject ($$)->
      using $$(element).$query,->
        @('.filters'     ).$attr().assert_Is 'ng-repeat'    : '(title,filter) in filters'   , class: 'filters ng-scope'
        @('#results'     ).$attr().assert_Is id: 'results'
        @('#results div' ).$attr().assert_Is 'ng-repeat'    : 'result in filter', class: 'ng-scope'
        @('#results dd'  ).$attr().assert_Is 'ng-show'      : 'result.size > 0'
        @('#results dd a').$attr().assert_Is 'ng-click'     : 'apply_Filter(result.id, result.title, title)', href: '#'
        @('#results dd a').$text().assert_Is 'title42'

  it 'Check ng-show status on view_Filters broadcast',->
    inject ($$, $rootScope)->
      using $$(element).$query,->
        $rootScope.$broadcast 'view_filters', true
        scope.$digest()
        @('.section'  ).$attr().assert_Is 	{ 'ng-show': 'view_Filters', class: 'section row' }

        $rootScope.$broadcast 'view_filters', false
        scope.$digest()
        @('.section'  ).$attr().assert_Is 	{ 'ng-show': 'view_Filters', class: 'section row ng-hide' }


  it 'Check that ng-click on filter broadcasts an apply_Filter event',->
    using scope, ->
      @.$broadcast 'view_model_data', query_Tree_Filters_Data
      @.$digest()

    scope.$on 'apply_filter', (event,filter_Id, filter_Title, metadata_Title )->
      filter_Id   .assert_Is 'id'
      filter_Title.assert_Is 'title'
    element_Raw.find('a').triggerHandler('click')