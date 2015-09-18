expect = chai.expect;

describe '| controllers | Article-Controller.test',->
  scope = null


  beforeEach ->
    module('TM_App')

  it 'constructor and check that the Controller will open the article provided in $stateParams', ()->
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
        @.article   .assert_Is { title: 'title_.abcd', id: 'id_abcd', url: '/angular/user/article/id_abcd/title_abcd' }
        console.log wallaby
        @.articleUrl.contains('http://localhost').assert_Is_True()


