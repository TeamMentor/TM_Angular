expect = chai.expect;

describe '| controllers | user | Index-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Index_Controller', { $scope: scope })

  it 'constructor', ()->
    using scope, ->
      @.history      .assert_Is {}
      @.view_Filters .assert_Is_False()
      @.column_Left  .assert_Is 'col-3'
      @.column_Middle.assert_Is 'col-9'
      @.column_Right .assert_Is 'col-0'

  it '$on view_Filters', ()->
    using scope, ->
      @.$broadcast 'toggle_filters', true
      @.view_Filters .assert_Is_True()
      @.column_Left  .assert_Is 'col-3'
      @.column_Middle.assert_Is 'col-6'
      @.column_Right .assert_Is 'col-3'

      @.$broadcast 'toggle_filters', false
      @.view_Filters .assert_Is_False()
      @.column_Left  .assert_Is 'col-3'
      @.column_Middle.assert_Is 'col-9'
      @.column_Right .assert_Is 'col-0'

  it 'resolve_Index_State', ->

    using scope, ->
      query_Id = null
      filters = null
      @.resolve_Index_State(         ).assert_Is 'index'
      @.resolve_Index_State(null     ).assert_Is 'index'
      @.resolve_Index_State(null,null).assert_Is 'index'
      @.resolve_Index_State(null, 'a').assert_Is 'index'
      @.resolve_Index_State('a'      ).assert_Is 'index_query_id'
      @.resolve_Index_State('a', null).assert_Is 'index_query_id'
      @.resolve_Index_State('a', 'b' ).assert_Is 'index_query_id_filters'

