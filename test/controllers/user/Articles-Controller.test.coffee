expect = chai.expect;

describe '| controllers | user | Articles-Controller',->
  scope = null
  articles_Source      = [ { title:'tech 1', id: 'id_1' },
                           { title: 'tech 2', id: 'id_2' }]
  articles_Transformed = [ { title: 'tech 1', id: 'id_1', url: '/angular/user/article/id_1/tech-1' },
                           { title: 'tech 2', id: 'id_2', url: '/angular/user/article/id_2/tech-2' } ]
  beforeEach ->
    module('TM_App')

  beforeEach ->
    inject ($httpBackend)->
      $httpBackend.whenGET('/api/data/query_tree/query-6234f2d47eb7').respond ()->
        return [200, { results: articles_Source }  ]

  beforeEach ->
    inject ($controller, $rootScope, $httpBackend)->
      scope       = $rootScope.$new()
      $controller 'Articles_Controller', { $scope: scope}
      scope.$digest()

  it 'constructor', ->
    expect(scope.$$listeners['filter_data'][0]).to.be.an('function')

  it 'Check that query_Service.load_Data is called', ->
    inject ($httpBackend)->
      $httpBackend.flush()
      scope.articles.assert_Is articles_Transformed