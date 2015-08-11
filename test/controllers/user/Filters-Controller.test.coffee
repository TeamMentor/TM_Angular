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
    expect(scope.$$listeners['view_filters'][0]).to.be.an('function')

  it '$on filter_data (bad data)', ()->
    scope.$broadcast 'filter_data'
    scope.filters.assert_Is []

  it '$on filter_data (good data)', ()->
    data =
      filters : [ { results : [ { title: 'Java'  }] } ]
    scope.$broadcast 'filter_data', data
    scope.filters.assert_Is data.filters
    iconValue = scope.filters[0].results[0].icon.$$unwrapTrustedValue()
    expect(iconValue).to.contain 'icon-Java'

  it '$on view_filters',->
    inject ($rootScope)->
      expect(scope.view_Filters).to.be.undefined
      $rootScope.$broadcast 'view_filters', true
      expect(scope.view_Filters).to.be.true
      $rootScope.$broadcast 'view_filters', false
      expect(scope.view_Filters).to.be.false

  it '$on apply_filter',->
    scope.$on 'apply_filter', (event, filter_Id, filter_Title)->
      filter_Id.assert_Is 'filter_Id value'
      filter_Title.assert_Is 'filter_Title value'

    scope.apply_Filter('filter_Id value', 'filter_Title value')
