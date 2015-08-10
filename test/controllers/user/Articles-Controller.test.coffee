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
    expect(scope.$$listeners['article_data'][0]).to.be.an('function')

  it '$on article_data', ->
    scope.$broadcast 'article_data', { results: articles_Source }
    scope.articles.assert_Is articles_Transformed
