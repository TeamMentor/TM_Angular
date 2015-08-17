expect = chai.expect;

describe '| controllers | user | Results-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Results_Controller', { $scope: scope })

  it 'constructor', ()->
    using scope, ->
      @.current_Page      .assert_Is 1
      @.current_Page_Split.assert_Is 10
      @.results_Size      .assert_Is 0

      @.$$listeners.keys().size().assert_Is 3
      expect(@.$$listeners['view_model_data'][0]).to.be.an('function')
      expect(@.$$listeners['set_page'       ][0]).to.be.an('function')
      expect(@.$$listeners['set_page_split' ][0]).to.be.an('function')

      expect(@.toggle_Filters).to.be.an 'function'

  it '$on view_model_data', ->
    using scope, ->
      data = id: 'an id', size: 42
      @.$broadcast 'view_model_data',data
      @.results_Size    .assert_Is 42

  it '$on set_page', ->
    using scope, ->
      @.$broadcast 'set_page', 'abc'
      @.current_Page.assert_Is 'abc'

  it '$on set_page_Split', ->
    using scope, ->
      @.$broadcast 'set_page_split', 'abc'
      @.current_Page_Split.assert_Is 'abc'

  it 'toggle_Filters',->
    inject ($rootScope)->
      spyOn $rootScope , '$broadcast'

      using scope, ->
        @.toggle_Filters()
        using $rootScope.$broadcast.calls.all(),->
          @.size().assert_Is 1
          @[0].args.assert_Is [ 'toggle_filters', null ]





