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

  it 'open_Query_State (check state change)', ->
    inject ($state, $httpBackend, $timeout)->
      $httpBackend.expectGET('/json/user/currentuser').respond {}
      using scope, ->
        $state.current.name.assert_Is ''
        @.open_Query_State()
        @.$digest()
        $state.current.name.assert_Is 'index'
        $timeout.flush()

  it 'open_Query_State (check Loading image change)', ->
    inject ($state, $httpBackend, $timeout)->
      $httpBackend.expectGET('/json/user/currentuser').respond {}
      using scope, ->
        @.show_Loading_Image.assert_Is_False()
        @.open_Query_State()
        @.$digest()
        @.show_Loading_Image.assert_Is_True()
        $timeout.flush()
        @.show_Loading_Image.assert_Is_False()