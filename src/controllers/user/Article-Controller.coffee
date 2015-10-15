angular.module('TM_App')
       .controller 'Article_Controller', ($sce, $scope,$state, $stateParams,$window,$timeout, TM_API, icon_Service)=>
          using $scope, ->
            @.articleUrl      = $window.location.href
            @.article_Link    = null
            @.showFeedback    = false
            @.articleLoaded   = false

          $scope.load_Article = (article_Id)->
            if not article_Id
              return null
            TM_API.article article_Id, (article)->

              $scope.articleLoaded  = true
              if article
                $scope.map_Guide_Article article

                $scope.map_Article_Url article

                $scope.article         = article
                $scope.article_Html    = $sce.trustAsHtml article.article_Html


                $scope.icon_Technology = $sce.trustAsHtml icon_Service.element_Html(article.technology)
                $scope.icon_Type       = $sce.trustAsHtml icon_Service.element_Html(article.type)
                $scope.icon_Phase      = $sce.trustAsHtml icon_Service.element_Html(article.phase)

              else
                $timeout ->
                  $state.go 'error'

#                $scope.article =
#                  id    : article_Id
#                  title : 'Article not found'
#
#                $scope.article_Html = $sce.trustAsHtml '<br/><br/>Please contact support if you got here following a link'



          $scope.map_Article_Url =  (article)->
            if article
              id    = article.id?.remove('article-')
              title = article.title?.replace(new RegExp(' ','g'),'-').remove('.')
              article.url = '/angular/user/article/' + id + '/' + title

              @.article_Link = "#{$window.location.origin}/article/#{id}"

          $scope.map_Current_User = ()->
            TM_API.currentuser? (userInfo) ->
              if (userInfo?.UserEnabled && userInfo?.InternalUser)
                $scope.showFeedback     = true
                $scope.githubContentUrl = userInfo?.InternalUserInfo?.githubContentUrl
              else
                $scope.showFeedback     = false

          $scope.map_Guide_Article =(article)->
            if article
              TM_API.gatewaysLibrary? (data)->
                if data?.Views?.size
                  for view in data.Views
                    for rowArticle in view.Articles
                      if ((article.id == rowArticle.id) || (article.id==rowArticle.guid))
                        $timeout ->
                          $window.location.href ='/angular/user/guides/'+ article.id


          $scope.show_Article_Data = ->
            return $scope.articleLoaded

          $scope.showGeneralFeedback =  ->
            return !$scope.showFeedback

          $scope.showFeedbackBanner =  ->
            return $scope.showFeedback


          # invoked on controller load
          $scope.load_Article $stateParams?.article_Id
          $scope.map_Current_User()

