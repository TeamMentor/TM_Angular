expect = chai.expect;

describe '| controllers | user | Articles-Controller',->
  scope = null
  articles_Source      = [ { title:'tech 1', id: 'id_1' },
                           { title: 'tech 2', id: 'id_2' }]
  articles_Transformed = [ { title: 'tech 1', id: 'id_1', url: '/angular/user/article/id_1/tech-1' },
                           { title: 'tech 2', id: 'id_2', url: '/angular/user/article/id_2/tech-2' } ]
  beforeEach ->
    module('TM_App')

  beforeEach ->
    inject ($controller, $rootScope)->
      scope       = $rootScope.$new()
      $controller 'Articles_Controller', { $scope: scope}
      scope.$digest()

  it 'constructor', ->
    expect(scope.$$listeners['view_model_data'][0]).to.be.an('function')

  it '$on article_data', ->
    using scope, ->
      @.$broadcast 'view_model_data', { articles: articles_Source }
      @.articles.assert_Is articles_Transformed

  it '$on apply_query', ->
    using scope, ->
      @.articles = ['a','a']
      @.$broadcast 'apply_query', 'an-id'
      @.articles.assert_Is ['a','a']

      @.$broadcast 'apply_query', null
      @.articles.assert_Is []

  it '$on clear_articles', ->
    using scope, ->
      @.articles = [0..10]
      @.$broadcast 'clear_articles'
      @.articles.assert_Is []