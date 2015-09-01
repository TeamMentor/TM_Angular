angular.module('TM_App')
       .controller 'Article_Controller', ($sce, $scope, $stateParams,$window, TM_API,AuthService, icon_Service)=>
          $scope.articleUrl    = $window.location.href
          $scope.showFeedback  = false
          $scope.articleLoaded = false
          TM_API.article $stateParams.article_Id, (article)->
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

            userInfo = AuthService.currentUser()
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

          TM_API.recent_Articles (articles)->
             $scope.recent_Articles =[]
             if (articles?)
               angular.forEach articles, (article)->
                 article.icon_Technology   = $sce.trustAsHtml icon_Service.element_Html(article.technology)
                 article.icon_Type         = $sce.trustAsHtml icon_Service.element_Html(article.type)
                 article.icon_Phase        = $sce.trustAsHtml icon_Service.element_Html(article.phase)
                 id                        = article.id.remove('article-')
                 title                     = article.title.replace(new RegExp(' ','g'),'-').remove('.')
                 article.url               = '/angular/user/article/' + id + '/' + title
                 $scope.recent_Articles.push(article)

           TM_API.top_Articles (articles)->
             $scope.top_Articles =[]
             if (articles?)
               angular.forEach articles, (article)->
                 article.icon_Technology   = $sce.trustAsHtml icon_Service.element_Html(article.technology)
                 article.icon_Type         = $sce.trustAsHtml icon_Service.element_Html(article.type)
                 article.icon_Phase        = $sce.trustAsHtml icon_Service.element_Html(article.phase)
                 id                        = article.id.remove('article-')
                 title                     = article.title.replace(new RegExp(' ','g'),'-').remove('.')
                 article.url               = '/angular/user/article/' + id + '/' + title
                 $scope.top_Articles.push(article)