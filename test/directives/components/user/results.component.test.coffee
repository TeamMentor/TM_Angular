expect = chai.expect

describe '| directive | components | user | index', ->

  element     = null
  element_Raw = null
  scope       = null


  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<results/>')
      scope = $rootScope.$new()
      element     = $compile(element_Raw)(scope)[0]
      $rootScope.$digest()
      scope = element_Raw.find('div').eq(0).scope()             # getting the scope for the Controller

    #inject ($document)->
    #  body = angular.element $document[0].body
    #  body.find('results').remove()
    #  body.append element

  it 'Check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('div'            ).$attr().assert_Is 'ng-controller': 'Results_Controller', class: 'ng-scope ng-hide', 'ng-show': 'visible'
        @('#noResultsTitle').$attr().assert_Is id: 'noResultsTitle', class: 'label'
        @('#noResultsTitle').$html().assert_Is 'Query has no results'
        @('#view_Filters'  ).$attr().assert_Is
                              id        : 'view_Filters'
                              href      : '#'
                              title     : 'View Filters'
                              'ng-click': 'toggle_Filters()'
                              class     : 'button btn-result'

  it 'Check default resultsTitle value',->
    inject ($$)->
      using $$(element).$query,->
        @('#resultsTitle').$attr().assert_Is { id: 'resultsTitle', class: 'label' }
        @('#resultsTitle div').$attr().assert_Is 'ng-controller' : 'Pagination_Controller' , class: 'ng-scope'
        @('#resultsTitle span').$html().assert_Is ''
        #@('#resultsTitle').$html().assert_Is 'Query has 42 articles , Page #1 (10 articles per page)'

  it 'Check resultsTitle value (via view_model_data)',->
    inject (graph_db_data)->
      article_Data = graph_db_data['query_view_model_query-6234f2d47eb7_0_10']
      expect(article_Data.size).to.be.above 2000
      scope.$broadcast 'view_model_data', article_Data
      scope.$digest()
      scope.results_Size.assert_Is article_Data.size
      inject ($$)->
        using $$(element).$query,->
          @('#resultsTitle span').$html().assert_Is "Showing articles 1 to 10 out of #{article_Data.size}"


  it 'Check View Filters click triggers event', ->
    inject ($$)->
      using $$(element).$query,->

        scope.$on 'toggle_filters', (event, data)->
          expect(data).to.equal null

        @('#view_Filters').$click()