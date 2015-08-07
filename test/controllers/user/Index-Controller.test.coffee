expect = chai.expect;

describe '| controllers | Index-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Index_Controller', { $scope: scope })

  it 'constructor', ()->
    using scope, ->
      @.history      .assert_Is {}
      @.column_Left  .assert_Is 'col-3'
      @.column_Middle.assert_Is 'col-9'
      @.column_Right .assert_Is 'col-0'

  it '$on view_Filters', ()->
    using scope, ->
      @.$broadcast 'view_Filters', true
      @.column_Left  .assert_Is 'col-3'
      @.column_Middle.assert_Is 'col-6'
      @.column_Right .assert_Is 'col-3'

      @.$broadcast 'view_Filters', false
      @.column_Left  .assert_Is 'col-3'
      @.column_Middle.assert_Is 'col-9'
      @.column_Right .assert_Is 'col-0'