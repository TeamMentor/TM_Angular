expect = chai.expect;

describe '| controllers  | Help-Controller.test',->
  scope    = null

  beforeEach ->
    module('TM_App')



  it 'constructor', ()->
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Help_Controller', { $scope: scope })

    using scope, ->
      expect(@.show_Doc   ).to.be.an('function')
      expect(@.load_Library).to.be.an('function')

  it 'map_Doc_Titles', ()->
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Help_Controller', { $scope: scope })

    library = Views : [ {id: 'view-id' , title: 'view title', Articles: [ {Id:'article-id-1' , Title: 'article-title-1'}, {Id:'article-id-2' , Title: 'article-title-2'}]}]
    scope.map_Doc_Titles library
    scope.doc_Titles.assert_Is 'article-id-1': 'article-title-1', 'article-id-2' : 'article-title-2'

  it 'load_Library', (done)->

    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Help_Controller', { $scope: scope })

    library = Views : [ {id: 'view-id' , title: 'view title', Articles: [ {Id:'article-id' , Title: 'article-title'}]}]
    article = html: 'an <h1>html</h1>'
    inject ($httpBackend)->
      $httpBackend.expectGET('/jade/json/docs/library').respond library
      $httpBackend.expectGET('/jade/json/docs/article-id').respond article

      using scope, ->
        @.$digest()
        $httpBackend.flush()
        scope.first_Article_Id.assert_Is 'article-id'
        @.title.assert_Is 'article-title'
        @.content.$$unwrapTrustedValue().assert_Is 'an <h1>html</h1>'
        done()

  it 'load_Library (using stateParams)', (done)->

    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Help_Controller', { $scope: scope, $stateParams : { id:'article-id-2' } }) # this is why there is a bit of code repeat in the tests above

    library = Views : [ {id: 'view-id' , title: 'view title', Articles: [ {Id:'article-id-1' , Title: 'article-title-1'}, {Id:'article-id-2' , Title: 'article-title-2'}]}]
    article = html: 'an <h1>html 2</h1>'

    inject ($httpBackend)->

      $httpBackend.expectGET('/jade/json/docs/library').respond library
      $httpBackend.expectGET('/jade/json/docs/article-id-2').respond article


      using scope, ->
        @.$digest()
        $httpBackend.flush()
        @.id.assert_Is 'article-id-2'
        @.title.assert_Is 'article-title-2'
        @.content.$$unwrapTrustedValue().assert_Is 'an <h1>html 2</h1>'
        done()