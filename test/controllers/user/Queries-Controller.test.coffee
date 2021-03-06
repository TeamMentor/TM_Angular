expect = chai.expect;

describe '| controllers | user | Queries-Controller',->
  scope = null
  beforeEach ->
    module('TM_App')

  beforeEach ->
    inject ($httpBackend)->
      $httpBackend.whenGET('/api/data/query_tree/query-6234f2d47eb7').respond ()->
        return [200, { title: 'el title' , containers: 42 } ]

  beforeEach ->
    inject ($controller, $rootScope, $httpBackend)->
      scope       = $rootScope.$new()
      $controller 'Queries_Controller', { $scope: scope}
      scope.$digest()

  it 'constructor', ->
    using scope, ->
      expect(@.$$listeners['view_model_data'][0]).to.be.an('function')
      expect(@.load_Query).to.be.an 'function'

  it 'apply_query', ->
    scope.$on 'apply_query', (event, query_Id)->
      query_Id.assert_Is 'an id'
    scope.load_Query('an id')