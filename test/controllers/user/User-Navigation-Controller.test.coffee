expect = chai.expect;

describe '| controllers | user | User-Navigation-Controller.test',->
  scope    = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('User_Navigation_Controller', { $scope: scope })


  it 'constructor', ()->
    using scope, ->
      expect(@.open_Query_State).to.be.an('function')

  it 'submit (check state change)', ->
    inject ($state, $httpBackend)->
      $httpBackend.expectGET('/api/data/query_tree_queries/query-6234f2d47eb7').respond {}
      using scope, ->
        $state.current.name.assert_Is ''
        @.open_Query_State()
        @.$digest()
        $state.current.name.assert_Is 'index'