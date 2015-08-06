expect = chai.expect;

describe '| controllers | Search-Bar-Controller.test',->
  scope    = null
  window   = location : href : '....'

  default_Technology = [{ title: 'All', id: 'query-6234f2d47eb7' }]
  url_Query_Tree     = '/api/data/query_tree/query-6234f2d47eb7'

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Search_Bar_Controller', { $scope: scope })


  it 'Check setup', ()->
    expect(scope.$$listeners['query_data'][0]).to.be.an('function')


  it 'Check query_data broadcast (when query_tree returns no data)', ()->
    inject ($httpBackend)->
      $httpBackend.whenGET url_Query_Tree
                  .respond ()-> [200, { }]
      $httpBackend.flush()
      expect(scope.technologies).to.equal(undefined)

  it 'Check query_data broadcast (when query_tree returns filters but not technology)', ()->
    inject ($httpBackend)->
      $httpBackend.whenGET url_Query_Tree
                  .respond ()-> [200, { filters: [] }  ]
      $httpBackend.flush()
      expect(scope.technologies).to.deep.equal default_Technology

  it 'Check query_data broadcast (when query_tree returns Technology filters but no results)', ()->
    inject ($httpBackend)->
      $httpBackend.whenGET url_Query_Tree
                  .respond ()-> [200, { filters: [{ title: 'Technology'} ] }  ]
      $httpBackend.flush()
      expect(scope.technologies).to.deep.equal [{ title: 'All', id: 'query-6234f2d47eb7' }]

  it 'Check query_data broadcast (when query_tree returns Technology filters with results)', ()->
    results = [{title:'tech 1', id: 'id_1'}, {title: 'tech 2', id: 'id_2'}]
    inject ($httpBackend)->
      $httpBackend.whenGET  url_Query_Tree
                  .respond ()-> [200, { filters: [{ title: 'Technology', results: results } ] } ]
      $httpBackend.flush()

      expect(scope.technologies).to.deep.equal default_Technology.concat(results)