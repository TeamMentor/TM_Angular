expect = chai.expect;

describe '| controllers | Article-Controller.test',->
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

  it '$scope.load_Article (check metadata icons',->
    article_TM_API =
      title       : 'title_.abcd' ,
      id          : 'id_abcd',
      phase       : 'Test'
      technology  : 'Java'
      type        : 'Guideline'
      article_Html: '<b>html</b>'

    article_In_Scope =
      title        : 'title_.abcd'
      id           : 'id_abcd'
      phase       : 'Test'
      technology  : 'Java'
      type        : 'Guideline'
      article_Html : '<b>html</b>'
      url          : '/angular/user/article/id_abcd/title_abcd'

    TM_API  = article: (article_Id, callback)-> callback article_TM_API

    new_Article_Controller_With_TM_API TM_API, (scope)->
      using scope, ->
        @.articleLoaded.assert_Is_False()
        @.load_Article article_TM_API.id
        @.icon_Phase     .$$unwrapTrustedValue().assert_Contains '<span class="icon-Test" title="Test">'
        @.icon_Technology.$$unwrapTrustedValue().assert_Contains '<span class="icon-Java" title="Java">'
        @.icon_Type      .$$unwrapTrustedValue().assert_Contains '<span class="icon-Guideline" title="Guideline">'
        @.article.assert_Is article_In_Scope
        @.article.article_Html.assert_Is article_TM_API.article_Html
        @.articleLoaded.assert_Is_True()

  it '$scope.map_Article_Url', ->
    new_Article_Controller (scope)->
      using scope, ->
        @.map_Article_Url null
        @.map_Article_Url {}
        article =
          id   : 'an-id'
          title: 'an-title'
        @.map_Article_Url article
        article.url.assert_Is '/angular/user/article/an-id/an-title'

        article =
          id   : 'article-id'
          title: 'an-title'
        @.map_Article_Url article
        article.url.assert_Is '/angular/user/article/id/an-title'

        article =
          id   : 'article-id'
          title: 'this is an.. ..title'
        @.map_Article_Url article
        article.url.assert_Is '/angular/user/article/id/this-is-an-title'

  it 'map_Current_User', ->
    userInfo = null
    TM_API  =
        currentuser       : (callback)->callback userInfo
        verifyInternalUser: (email, callback)->
          if email
            email.assert_Is userInfo.Email
          callback if userInfo.Email.contains('securityinnovation.com') then {} else null

    new_Article_Controller_With_TM_API TM_API, (scope)->
      using scope, ->
        @.map_Current_User()
        @.showFeedback.assert_Is_False()
        (@.githubContentUrl is undefined).assert_Is_True()
        userInfo = UserEnabled: false

        @.map_Current_User()
        @.showFeedback.assert_Is_False()

        userInfo =
          UserEnabled: true
          Email: 'aaa@bbb.com'

        @.map_Current_User()
        @.showFeedback.assert_Is_False()

        userInfo =
          UserEnabled: true
          Email: 'aaa@securityinnovation.com'
        @.map_Current_User()
        @.showFeedback.assert_Is_True()

  it 'map_Current_User (with mocked $httpBackend)', ->
    inject ($httpBackend)->
      new_Article_Controller (scope)->
        using scope, ->
          $httpBackend.expectGET('/json/user/currentuser', {"Accept":"application/json, text/plain, */*"}).respond {}
          $httpBackend.flush()
          @.showFeedback.assert_Is_False()

          $httpBackend.expectGET('/json/user/currentuser', {"Accept":"application/json, text/plain, */*"}).respond UserEnabled : false
          @.map_Current_User()
          @.showFeedback.assert_Is_False()
          $httpBackend.flush()

          $httpBackend.expectGET('/json/user/currentuser', {"Accept":"application/json, text/plain, */*"}).respond UserEnabled : true , Email: 'test@securityinnovation.com'
          $httpBackend.expectGET('/json/tm/config'       , {"Accept":"application/json, text/plain, */*"}).respond null
          @.map_Current_User()
          $httpBackend.flush()
          @.showFeedback.assert_Is_False()

          $httpBackend.expectGET('/json/tm/config'       , {"Accept":"application/json, text/plain, */*"}).respond allowedEmailDomains: ['@securityinnovation.com'] , githubContentUrl: 'www.github.com'
          @.map_Current_User()
          $httpBackend.flush()
          @.map_Current_User()
          @.showFeedback.assert_Is_True()
          @.githubContentUrl.assert_Is 'www.github.com'

  it 'map_Guide_Article  (with mocked $httpBackend)', ->
    inject ($rootScope, $controller, $httpBackend, $timeout, $window)->
      scope       = $rootScope.$new()
      window      = location : href: '/aaa/bbb/ccc'

      $controller('Article_Controller', { $scope: scope , $window: window})
      #new_Article_Controller (scope)->
      using scope, ->
        $httpBackend.expectGET('/json/user/currentuser', {"Accept":"application/json, text/plain, */*"}).respond {}
        @.map_Guide_Article()
        $httpBackend.flush()

        $httpBackend.expectGET('/jade/json/gateways/library', {"Accept":"application/json, text/plain, */*"}).respond {}
        @.map_Guide_Article {}
        $httpBackend.flush()

        $httpBackend.expectGET('/jade/json/gateways/library', {"Accept":"application/json, text/plain, */*"}).respond { Views: null}
        @.map_Guide_Article {}
        $httpBackend.flush()

        $httpBackend.expectGET('/jade/json/gateways/library', {"Accept":"application/json, text/plain, */*"}).respond { Views: [ Articles: [ { id : 'an-id'}]] }
        @.map_Guide_Article { id:'an-id-2' }
        $httpBackend.flush()
        $timeout.flush()
        window.location.href.assert_Is '/aaa/bbb/ccc'

        $httpBackend.expectGET('/jade/json/gateways/library', {"Accept":"application/json, text/plain, */*"}).respond { Views: [ Articles: [ { id : 'an-id-2'}]] }
        @.map_Guide_Article { id:'an-id-2' }
        $httpBackend.flush()
        $timeout.flush()
        window.location.href.assert_Is '/angular/user/guides#an-id-2'

  it 'show_Article_Data', ->
    new_Article_Controller (scope)->
      using scope, ->
        @.articleLoaded      .assert_Is_False()
        @.show_Article_Data().assert_Is_False()

        @.articleLoaded = true
        @.articleLoaded      .assert_Is_True()
        @.show_Article_Data().assert_Is_True()

  it 'showGeneralFeedback', ->
    new_Article_Controller (scope)->
      using scope, ->
        @.showFeedback      .assert_Is_False()
        @.showGeneralFeedback().assert_Is_True()

        @.showFeedback  = true
        @.showGeneralFeedback().assert_Is_False()

  it 'showFeedbackBanner', ->
    new_Article_Controller (scope)->
      using scope, ->
        @.showFeedback        .assert_Is_False()
        @.showFeedbackBanner().assert_Is_False()

        @.showFeedback = true
        @.showFeedbackBanner().assert_Is_True()
