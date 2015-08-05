expect = chai.expect;

describe '| controllers | Results-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Results_Controller', { $scope: scope })

  it 'constructor', ()->

