expect = chai.expect;

describe '| controllers | Search-Bar-Controller.test',->
  scope    = null
  window   = location : href : '....'

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope, $httpBackend)->
      scope = $rootScope.$new()
      $controller('Search_Bar_Controller', { $scope: scope })


  it 'Check setup', ()->
    expect(scope.$$listeners['query_data'][0]).to.be.an('function')


  it 'Check query_data broadcast (when query_tree returns no data)', ()->
    inject ($httpBackend)->
      $httpBackend.whenGET('/api/data/query_tree/query-6234f2d47eb7').respond ()->
        return [200, { }]
      expect(scope.technologies).to.equal(undefined)

  it 'Check query_data broadcast (when query_tree returns filters but not technology)', ()->
    inject ($httpBackend)->
      $httpBackend.whenGET('/api/data/query_tree/query-6234f2d47eb7').respond ()->
        return [200, { filters: [] }  ]
      $httpBackend.flush()
      expect(scope.technologies).to.deep.equal [{ title: 'All', query_Id: null }]

  it 'Check query_data broadcast (when query_tree returns Technology filters but no results)', ()->
    inject ($httpBackend)->
      $httpBackend.whenGET('/api/data/query_tree/query-6234f2d47eb7').respond ()->
        return [200, { filters: [{ title: 'Technology'} ] }  ]
      $httpBackend.flush()
      expect(scope.technologies).to.deep.equal [{ title: 'All', query_Id: null }]

  it 'Check query_data broadcast (when query_tree returns Technology filters with results)', ()->
    results = [{title:'tech 1', query_Id: 'id_1'}, {title: 'tech 2', query_Id: 'id_2'}]
    inject ($httpBackend)->
      $httpBackend.whenGET('/api/data/query_tree/query-6234f2d47eb7').respond ()->
        return [200, { filters: [{ title: 'Technology', results: results } ] } ]
      $httpBackend.flush()
      expect(scope.technologies).to.deep.equal [{ title: 'All', query_Id: null }].concat(results)