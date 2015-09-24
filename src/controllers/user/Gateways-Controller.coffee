angular.module('TM_App')

      .directive 'dynamic', ($compile) ->
        restrict: 'A'
        replace: true
        link: (scope, ele, attrs) ->
          scope.$watch attrs.dynamic, (html) ->
            ele.html html
            $compile(ele.contents()) scope
            return
          return

      .controller 'Gateways_Controller', ($sce, $scope, TM_API, $location,$stateParams)->
        $scope.Library    = {}

        $scope.show_Article = (article)->
          if article
            TM_API.article article, (article_Data)->
              if (article_Data)
                $scope.article = article_Data
                $scope.title   = article_Data.title

                links = angular.element(article_Data.article_Html).find('a')
                if (links? && links.length> 0)
                  for link in links
                    originalHtml = link.outerHTML
                    href = link.attributes.href
                    if (href.value.contains("/article/"))
                      href.value = href.value.replace("/article/",'')

                     #if link is a guid
                    if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(href.value))
                      value = href.value.split('-')[4]
                      attr = "show_Article('"+ value + "')"
                      link.attributes.href.value = link.attributes.href.value.replace(href.value, 'article-'+ value)
                      link.setAttribute("ng-click", attr);
                      article_Data.article_Html = article_Data.article_Html.replace(originalHtml, link.outerHTML)

                $scope.content = article_Data.article_Html

        $scope.map_Current_User = ->
          TM_API.currentuser (userInfo) ->
            if (userInfo? && userInfo?.UserEnabled)
              TM_API.verifyInternalUser userInfo.Email, (callback)->
                $scope.articleLoaded = true
                if callback?
                  $scope.showFeedback     = true
                  $scope.githubContentUrl = callback

        $scope.showFeedbackBanner =  ->
          return $scope.showFeedback

        $scope.show_Article_Data = ->
          return $scope.articleLoaded

        $scope.showGeneralFeedback =  ->
          return !$scope.showFeedback

        $scope.load_Library = ()->
          TM_API.gatewaysLibrary (data)->
            if data
              $scope.Library.title = data.title
              $scope.Library.Views = data.Views;
              articleId =  $stateParams.id #$location.$$hash
              if articleId
                $scope.show_Article articleId
              else
                $scope.show_Article data?.Views?.first()?.Articles?.first()?.id


        $scope.showMetadata = ->
          return $scope.article?.phase? || $scope.article?.technology? || $scope.article?.technology?

        $scope.map_Current_User()
        $scope.load_Library()


        window._stateParams = $stateParams

