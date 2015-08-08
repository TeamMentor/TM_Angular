expect = chai.expect;

describe '| controllers | user | Pagination-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Pagination_Controller', { $scope: scope })

  it 'constructor',->
    using scope, ->
      @.currentPage.assert_Is 1
      expect(@.show_Page).to.be.an 'function'
      expect(@.previous_Page).to.be.an 'function'
      expect(@.next_Page).to.be.an 'function'


  it 'show_Page', ->
    using scope,->
      @.$on 'show_page', (event, page)->
        page.assert_Is 1

      @.show_Page()

  it 'previous_Page',->
    using scope,->
      @.previous_Page()
      @.currentPage.assert_Is 0

  it 'next_Page',->
    using scope,->
      @.next_Page()
      @.currentPage.assert_Is 2