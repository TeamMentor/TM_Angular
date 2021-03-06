expect = chai.expect;

describe '| controllers | user | Pagination-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Pagination_Controller', { $scope: scope })

      scope.model.page       = 42
      scope.model.page_Split = 43

  it 'constructor',->

    using scope, ->
      @.$digest()
      #@.model assert_Is { current_Page : 1, articles_Per_Page: 10 }

      expect(@.set_Page      ).to.be.an 'function'
      expect(@.set_Page_Split).to.be.an 'function'
      expect(@.previous_Page ).to.be.an 'function'
      expect(@.next_Page     ).to.be.an 'function'


  it '$on view_model_data', ->
    using scope , ->
      @.model.page_Split =  10
      event_Name = 'view_model_data'

      @.$broadcast event_Name, { size: 100 }
      @.model.pages.assert_Is [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

      @.$broadcast event_Name, { size: 50 }
      @.model.pages.assert_Is [ 1, 2, 3, 4,5]

      @.$broadcast event_Name, { size: 9 }
      @.model.pages.assert_Is [ 1 ]

      @.$broadcast event_Name, { size: 9 }
      @.model.pages.assert_Is [ 1 ]


      @.model.page_Split =  30

      @.$broadcast event_Name, { size: 99 }
      @.model.pages.assert_Is [ 1, 2, 3, 4]

      @.$broadcast event_Name, { size: 50 }
      @.model.pages.assert_Is [ 1, 2]

      @.$broadcast event_Name, { size: 30 }
      @.model.pages.assert_Is [ 1 ]

      @.$broadcast event_Name, { size: 9 }
      @.model.pages.assert_Is [ 1 ]

      @.$broadcast event_Name, null
      expect(@.model.pages).to.equal null



  it 'set_Page', ->
    inject ($httpBackend)->
      using scope,->
        scope.$on 'set_page', (event, page)->
          page.assert_Is 42
        @.set_Page()

  it 'set_Page_Split', ->
    using scope,->
      scope.$on 'set_page_split', (event, page)->
        page.assert_Is 43
      @.set_Page_Split()

  it 'previous_Page',->
    using scope,->
      @.previous_Page()
      @.model.page.assert_Is 41

  it 'next_Page',->
    using scope,->
      @.next_Page()
      @.model.page.assert_Is 42

      @.model.pages = [1..44]
      @.next_Page()
      @.model.page.assert_Is 43

  it '$scope.$on', ->
    using scope,->
      @.model.pages = [0..50]

      expected_Page = 41
      @.$on 'set_page', (event, page)->
        page.assert_Is expected_Page

      @.$broadcast 'keyup', keyIdentifier : 'Left'

      expected_Page = 42
      @.$broadcast 'keyup', keyIdentifier : 'Right'