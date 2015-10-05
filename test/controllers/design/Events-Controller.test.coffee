expect = chai.expect;

describe '| controllers  | design | Events-Controller.test',->
  scope    = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Events_Controller', { $scope: scope })


  it 'constructor', ()->
    using scope, ->
      @.test.assert_Is 'asd'
