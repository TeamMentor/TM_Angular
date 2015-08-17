expect = chai.expect

describe '| directive | components | user | queries', ->
  element     = null
  element_Raw = null
  scope       = null


  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<queries/>')
      scope       = $rootScope.$new()
      element     = $compile(element_Raw)(scope)[0]
      $rootScope.$digest()
      scope = element_Raw.find('div').eq(0).scope()             # getting the scope for the Controller

      using  scope, ->
        @.title = 'an title'

    #inject ($document)->
    #  body = angular.element $document[0].body
    #  body.find('queries').remove()
    #  body.append element

  it 'constructor',->
    inject ($$)->
      using $$(element).$query,->
        @('div'   ).$attr().assert_Is 'ng-controller': 'Queries_Controller', class: 'ng-scope'
        scope.$digest()
        @('#query_title').$html().assert_Is 'an title'

  it '| controller | $on query_data',->
    inject (graph_db_data)->
      key = 'query_view_model_query-6234f2d47eb7_0_10'
      data = graph_db_data[key]
      scope.$broadcast 'view_model_data', data
      #scope.$broadcast 'query_data', data
      scope.$digest()
