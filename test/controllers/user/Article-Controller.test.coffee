expect = chai.expect;

fdescribe '| controllers | Article-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')

  new_Article_Controller = (callback)->
    inject ($controller, $rootScope)->
      scope       = $rootScope.$new()
      $controller('Article_Controller', { $scope: scope})
      callback scope if callback

  new_Article_Controller_With_TM_API = (TM_API, callback)->
    inject ($controller, $rootScope)->
      scope       = $rootScope.$new()
      $controller('Article_Controller', { $scope: scope, TM_API: TM_API})
      callback scope if callback

  it 'constructor', ->
    new_Article_Controller (scope)->
      using scope, ->
        @.articleUrl      .assert_Contains('http://localhost')
        @.showFeedback    .assert_Is_False()
        @.articleLoaded   .assert_Is_False()

  it 'show_Article_Data', ->
    new_Article_Controller (scope)->
      using scope, ->
        @.articleLoaded      .assert_Is_False()
        @.show_Article_Data().assert_Is_False()

        @.articleLoaded = true
        @.articleLoaded      .assert_Is_True()
        @.show_Article_Data().assert_Is_True()

  it 'load_Article (bad data)', ->
    TM_API =
      article : (article_Id, callback)-> callback(null)

    new_Article_Controller_With_TM_API TM_API, (scope)->
      using scope, ->
        (@.load_Article(         ) is null).assert_Is_True()
        (@.load_Article(null     ) is null).assert_Is_True()
        (@.load_Article(undefined) is null).assert_Is_True()
        @.load_Article 'aaaaa'


  it 'loadArticle (from $stateParams)', ()->
    inject ($controller, $rootScope)->
      scope       = $rootScope.$new()
      stateParams = article_Id: 'id_12345'
      article     = title : 'title_.abcd' , id: 'id_abcd'

      TM_API =
        article: (article_Id, callback)->
          article_Id.assert_Is stateParams.article_Id
          callback article

        currentuser     : (callback)-> callback {}
        gatewaysLibrary : (callback)-> callback {}


      $controller('Article_Controller', { $scope: scope , $stateParams: stateParams,  TM_API: TM_API})
      using scope, ->
        @.article         .assert_Is { title: 'title_.abcd', id: 'id_abcd', url: '/angular/user/article/id_abcd/title_abcd' }
        @.articleLoaded   .assert_Is_True()



