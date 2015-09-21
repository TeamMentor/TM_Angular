expect = chai.expect;

fdescribe '| controllers | Start-View-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')

  new_Start_View_Controller = (callback)->
    inject ($controller, $rootScope)->
      scope       = $rootScope.$new()
      $controller('Start_View_Controller', { $scope: scope})
      callback scope

  it 'constructor', ->
    new_Start_View_Controller (scope)->
      using scope, ->
        @.top_Articles   .assert_Is []
        @.recent_Articles.assert_Is []
