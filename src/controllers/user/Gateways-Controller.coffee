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

      .controller 'Gateways_Controller', ($sce, $state, $scope, $rootScope,$window, TM_API, $location,icon_Service,$stateParams)->
        $scope.Library         = {}
        $scope.NoGuidesMessage = "Guides not availale in this version of TEAMMentor."
        $scope.ShowMessage     = false;

        @.article_Link    = null

        $scope.load_Article = ($event, article_Id)->
          $event.preventDefault()                                             # this will allow the link to actually contain the link (so that it works if the user chooses to open the article in a new Tab
          $state.go 'guide_id', { id: article_Id }, notify:false, reload:false # change the url without trigger a state change (adds support for the back button)
          $scope.show_Article article_Id                                      # show the article


        $scope.show_Article = (article)->
          if article
            TM_API.article article, (article_Data)->
              if (article_Data)
                $scope.map_Article_Url article_Data

                $scope.article = article_Data
                $scope.title   = article_Data.title
                $scope.icon_Technology   = $sce.trustAsHtml icon_Service.element_Html(article_Data.technology)
                $scope.icon_Type         = $sce.trustAsHtml icon_Service.element_Html(article_Data.type)
                $scope.icon_Phase        = $sce.trustAsHtml icon_Service.element_Html(article_Data.phase)
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
                      attr = "load_Article($event, '"+ value + "')"
                      link.attributes.href.value = link.attributes.href.value.replace(href.value, 'article-'+ value)
                      link.setAttribute("ng-click", attr);
                      article_Data.article_Html = article_Data.article_Html.replace(originalHtml, link.outerHTML)

                $scope.content = article_Data.article_Html


        $scope.map_Article_Url =  (article)->
          if article
            id    = article.id?.remove('article-')
            title = article.title?.replace(new RegExp(' ','g'),'-').remove('.')
            article.url = '/angular/user/article/' + id + '/' + title
            @.article_Link = "#{$window.location.origin}/article/#{id}/#{title}"

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
              $scope.ShowMessage   = false
              $scope.Library.title = data.title
              $scope.Library.Views = data.Views;
              articleId =  $stateParams.id #$location.$$hash
              if articleId
                $scope.show_Article articleId
              else
                $scope.show_Article data?.Views?.first()?.Articles?.first()?.id
            else
              $scope.ShowMessage = true

        $scope.showNoGuidesMessage = ->
          return $scope.ShowMessage

        $scope.showMetadata = ->
          return $scope.article?.phase? || $scope.article?.technology? || $scope.article?.technology?

        $scope.map_Current_User()
        $scope.load_Library()

        $scope.show_feedback_button=->
          $rootScope.$broadcast 'Show_Feedback_Box', true

        window._stateParams = $stateParams

