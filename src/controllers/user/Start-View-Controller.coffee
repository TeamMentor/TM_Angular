angular.module('TM_App')
       .controller 'Start_View_Controller', ($sce, $scope,$state, $stateParams,$window,$timeout, TM_API, icon_Service)=>

          using $scope, ->
            @.top_Articles    = []
            @.recent_Articles = []

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

          $scope.top_Searches = ->
            TM_API.popular_Search (search)->
              baseUrl = "/angular/user/index?text="
              angular.forEach search, (searchItem)->
                searchItem.url = baseUrl + searchItem.title
              $scope.top_Search = search

          $scope.topArticles()
          $scope.recentArticles()
          $scope.top_Searches()

