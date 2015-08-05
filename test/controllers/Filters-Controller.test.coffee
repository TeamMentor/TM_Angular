expect = chai.expect;

describe '| controllers | Filters-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Filters_Controller', { $scope: scope })

  it 'constructor', ()->
    expect(scope.apply_Filter).to.be.an('function')
    expect(scope.$$listeners['filter_data' ][0]).to.be.an('function')
    expect(scope.$$listeners['view_Filters'][0]).to.be.an('function')

  it 'check receive of view_Filters event',->
    inject ($rootScope)->
      expect(scope.view_Filters).to.be.undefined
      $rootScope.$broadcast 'view_Filters', true
      expect(scope.view_Filters).to.be.true
      $rootScope.$broadcast 'view_Filters', false
      expect(scope.view_Filters).to.be.false

  it 'check emit of apply_Filter event',->
    scope.$on 'apply_Filter', (event, filter_Id, filter_Title)->
      filter_Id.assert_Is 'filter_Id value'
      filter_Title.assert_Is 'filter_Title value'

    scope.apply_Filter('filter_Id value', 'filter_Title value')
