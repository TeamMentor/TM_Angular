angular.module('TM_App')
       .controller 'Articles_Controller', ($scope)->

          #console.log 'in Articles_Controller ' + new Date().getMilliseconds()

          $scope.$on 'apply_query', (event, query_id)-> # clears articles when there are not articles broadcasted
            if not query_id
              $scope.articles = []

          $scope.$on 'view_model_data', (event, data)->
            articles = []
            if data?.articles
              #raw_Articles = data.results
              #$scope.$broadcast 'show_page' , 0
               articles = data.articles
               for article in articles
                 if article
                   id    = article.id?.remove('article-')
                   title = article.title?.replace(new RegExp(' ','g'),'-').remove('.')
                   article.url = '/angular/user/article/' + id + '/' + title
            $scope.articles = articles

          $scope.$on 'clear_articles', ()->
            $scope.articles = []
