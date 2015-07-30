expect = chai.expect;

describe '| controllers | Filters-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Filters_Controller', { $scope: scope })

  it 'constructor', ()->
    #console.log 'here'
