expect = chai.expect;

describe '| controllers  | Help-Controller.test',->
  scope    = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Help_Controller', { $scope: scope })


  it 'constructor', ()->
    using scope, ->
      expect(@.show_Doc   ).to.be.an('function')
      expect(@.load_Library).to.be.an('function')


  it 'load_Library', ()->
    library = Views : [ {id: 'view-id' , title: 'view title', Articles: [ {Id:'article-id' , Title: 'article-title'}]}]
    article = html: 'an <h1>html</h1>'
    inject ($httpBackend)->

      $httpBackend.expectGET('/jade/json/docs/library').respond library
      $httpBackend.expectGET('/jade/json/docs/article-id').respond article

      using scope, ->
        @.$digest()         # @.load_Library() is called by the controller
        $httpBackend.flush()
        @.title.assert_Is 'article-title'
        @.content.$$unwrapTrustedValue().assert_Is 'an <h1>html</h1>'