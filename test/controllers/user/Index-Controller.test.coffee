expect = chai.expect;

describe '| controllers | Index-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Index_Controller', { $scope: scope })

  it 'constructor', ()->
    scope.history.assert_Is {}
