expect = chai.expect;

describe '| controllers | Results-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Results_Controller', { $scope: scope })

  it 'constructor', ()->
    expect(scope.view_Filters).to.be.false
    expect(scope.toggle_Filters).to.be.an('function')

  it 'toggle_Filters (check value)', ()->

    scope.view_Filters.assert_Is_False()
    scope.toggle_Filters()
    scope.view_Filters.assert_Is_True()
    scope.toggle_Filters()
    scope.view_Filters.assert_Is_False()

  it 'toggle_Filters (check broadcast)', ()->

    scope.$on 'view_Filters' , (event,data)->
      data.assert_Is_True()
    scope.toggle_Filters()

  it 'Check that apply_Filter and clear_Filters broadcasts are correctly received',  ->
    scope.$broadcast 'clear_Filters'
    scope.current_Filters.assert_Is {}

    scope.$broadcast 'apply_Filter', 'id', 'title'
    scope.current_Filters['id'].assert_Is 'title'

    scope.$broadcast 'clear_Filters'
    scope.current_Filters.assert_Is {}



