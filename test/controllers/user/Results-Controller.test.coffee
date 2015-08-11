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
      #expect(@.current_Query_Id).to.equal null
      expect(@.$$listeners['article_data'   ][0]).to.be.an('function')
      #expect(@.$$listeners['apply_Query'  ][0]).to.be.an('function')
      expect(@.toggle_Filters).to.be.an 'function'

  it '$on article_data', ->
    using scope, ->
      data = id: 'an id', size: 42
      @.$broadcast 'article_data',data
      #@.current_Query_Id.assert_Is 'an id'
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
    using scope, ->
      @.$on 'toggle_filters', (event, data)->
        expect(data).to.equal null
      @.toggle_Filters()




