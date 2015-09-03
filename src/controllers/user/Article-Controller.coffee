angular.module('TM_App')
       .controller 'Article_Controller', ($sce, $scope,$state, $stateParams,$window, TM_API, icon_Service)=>
          $scope.articleUrl     = $window.location.href
          $scope.showFeedback   = false
          $scope.articleLoaded  = false
          $scope.top_Articles   = []
          $scope.recent_Articles = []

          $scope.topArticles = ->
            TM_API.top_Articles (articles)->
              if (articles?)
                angular.forEach articles, (article)->
                  article.icon_Technology   = $sce.trustAsHtml icon_Service.element_Html(article.technology)
                  article.icon_Type         = $sce.trustAsHtml icon_Service.element_Html(article.type)
                  article.icon_Phase        = $sce.trustAsHtml icon_Service.element_Html(article.phase)
                  id                        = article.id.remove('article-')
                  title                     = article.title.replace(new RegExp(' ','g'),'-').remove('.')
                  article.url               = '/angular/user/article/' + id + '/' + title
                  $scope.top_Articles.push(article)

          $scope.recentArticles = ->
            TM_API.recent_Articles (articles)->
              if (articles?)
                angular.forEach articles, (article)->
                  article.icon_Technology   = $sce.trustAsHtml icon_Service.element_Html(article.technology)
                  article.icon_Type         = $sce.trustAsHtml icon_Service.element_Html(article.type)
                  article.icon_Phase        = $sce.trustAsHtml icon_Service.element_Html(article.phase)
                  id                        = article.id.remove('article-')
                  title                     = article.title.replace(new RegExp(' ','g'),'-').remove('.')
                  article.url               = '/angular/user/article/' + id + '/' + title
                  $scope.recent_Articles.push(article)

          TM_API.article $stateParams.article_Id, (article)->
            if ($state.current.name == "main")
              $scope.topArticles()
              $scope.recentArticles()

            if !angular.isObject(article)
              return;
            id    = article.id.remove('article-')
            title = article.title.replace(new RegExp(' ','g'),'-').remove('.')
            article.url = '/angular/user/article/' + id + '/' + title


            $scope.article      = article
            $scope.article_Html =  $sce.trustAsHtml article.article_Html

            $scope.icon_Technology = $sce.trustAsHtml icon_Service.element_Html(article.technology)
            $scope.icon_Type       = $sce.trustAsHtml icon_Service.element_Html(article.type)
            $scope.icon_Phase      = $sce.trustAsHtml icon_Service.element_Html(article.phase)

            TM_API.currentuser (userInfo) ->
              if (userInfo? && userInfo?.UserEnabled)
                TM_API.verifyInternalUser userInfo.Email, (callback)->
                  $scope.articleLoaded = true
                  if callback?
                    $scope.showFeedback     = true
                    $scope.githubContentUrl = callback

          $scope.showFeedbackBanner =  ->
            return $scope.showFeedback

          $scope.fullArticleLoaded = ->
            return $scope.articleLoaded

          $scope.showGeneralFeedback =  ->
            return !$scope.showFeedback




