angular.module('TM_App')
.controller 'Gateways_Controller', ($sce, $scope, TM_API, $location)->
  $scope.Library    = {}

  $scope.show_Article = (article)->
    if article
      TM_API.article article, (article_Data)->
        if (article_Data)
          $scope.article = article_Data
          $scope.title   = article_Data.title
          $scope.content = $sce.trustAsHtml(article_Data.article_Html)
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

  $scope.load_Library = ()->
    TM_API.gatewaysLibrary (data)->
      if data
        $scope.Library.title = data.title
        $scope.Library.Views = data.Views;
        articleId = $location.$$hash
        if articleId
          $scope.show_Article articleId
        else
          $scope.show_Article data?.Views?.first()?.Articles?.first()?.id


  $scope.showMetadata = ->
    return $scope.article?.phase? || $scope.article?.technology? || $scope.article?.technology?

  $scope.load_Library()