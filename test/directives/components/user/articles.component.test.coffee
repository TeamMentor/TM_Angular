expect = chai.expect

describe '| directive | components | user | queries', ->
  element     = null
  element_Raw = null
  scope       = null


  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<articles/>')
      scope       = $rootScope.$new()
      element     = $compile(element_Raw)(scope)[0]
      $rootScope.$digest()
      scope = element_Raw.find('div').eq(0).scope()             # getting the scope for the Controller

    # show element in screenshot
    #inject ($document)->
    #  body = angular.element $document[0].body
    #  body.find('articles').remove()
    #  body.append element

  it 'constructor',->
    inject ($$)->
      using $$(element).$query,->
        @('div'   ).$attr().assert_Is 'ng-controller': 'Articles_Controller', class: 'ng-scope'
        scope.$digest()
        @('.section').$attr().assert_Is class : 'section row'
        expect(@('article-box')).to.equal null

  it '| controller | $on query_data',->
    inject (graph_db_data,$httpBackend)->
      key = 'query_view_model_query-6234f2d47eb7_0_10'
      data = graph_db_data[key]
      scope.$broadcast 'query_view_model', data
      scope.$digest()
      #$httpBackend.flush()
      #scope.$digest()
