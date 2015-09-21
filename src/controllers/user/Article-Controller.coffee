angular.module('TM_App')
       .controller 'Article_Controller', ($sce, $scope,$state, $stateParams,$window,$timeout, TM_API, icon_Service)=>
          using $scope, ->
            @.articleUrl      = $window.location.href
            @.showFeedback    = false
            @.articleLoaded   = false

          $scope.fullArticleLoaded = ->
            return $scope.articleLoaded

          $scope.load_Article = (article_Id)->
            if not article_Id
              return null
            TM_API.article article_Id, (article)->

              if !angular.isObject(article)
                return;

              $scope.mapGuideArticle(article)

              id    = article.id.remove('article-')
              title = article.title.replace(new RegExp(' ','g'),'-').remove('.')
              article.url = '/angular/user/article/' + id + '/' + title


              $scope.article      = article
              $scope.article_Html =  $sce.trustAsHtml article.article_Html

              $scope.icon_Technology = $sce.trustAsHtml icon_Service.element_Html(article.technology)
              $scope.icon_Type       = $sce.trustAsHtml icon_Service.element_Html(article.type)
              $scope.icon_Phase      = $sce.trustAsHtml icon_Service.element_Html(article.phase)

              $scope.articleLoaded = true

              TM_API.currentuser (userInfo) ->
                if (userInfo? && userInfo?.UserEnabled)
                  TM_API.verifyInternalUser userInfo.Email, (callback)->
                    if callback?
                      $scope.showFeedback     = true
                      $scope.githubContentUrl = callback

          $scope.mapGuideArticle =(article)->
            TM_API.gatewaysLibrary (data)->
              if data?.size
                for view in data.Views
                  for rowArticle in view.Articles
                    if ((article.id == rowArticle.id) || (article.id==rowArticle.guid))
                      $timeout ->
                        $window.location.href ='/angular/user/guides#'+ article.id


          $scope.showGeneralFeedback =  ->
            return !$scope.showFeedback

          $scope.showFeedbackBanner =  ->
            return $scope.showFeedback


          $scope.load_Article $stateParams?.article_Id

