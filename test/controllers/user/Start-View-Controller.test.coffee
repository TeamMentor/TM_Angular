expect = chai.expect;

describe '| controllers | Start-View-Controller.test',->
  scope = null
  top_Articles : []
  my_Articles : []
  top_Searches: []

  beforeEach ->
    module('TM_App')

  new_Start_View_Controller = (callback)->
    inject ($controller, $rootScope, $httpBackend)->
      $httpBackend.expectGET('/jade/json/my-articles/10').respond []
      $httpBackend.expectGET('/jade/json/toparticles').respond []
      $httpBackend.expectGET('/jade/json/recentarticles').respond []
      $httpBackend.expectGET('/jade/json/search/recentsearch/10').respond []
      scope       = $rootScope.$new()
      $controller('Start_View_Controller', { $scope: scope})
      $httpBackend.flush()
      callback scope

  it 'constructor', ->
    new_Start_View_Controller (scope)->
      using scope, ->
        @.top_Articles   .assert_Is []
        @.recent_Articles.assert_Is []

  it 'my_Top_Articles', ->
    inject ($httpBackend)->
      new_Start_View_Controller (scope)->
        using scope, ->
