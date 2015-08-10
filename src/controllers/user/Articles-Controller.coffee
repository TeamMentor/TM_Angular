angular.module('TM_App')
       .controller 'Articles_Controller', ($scope, query_Service,  $location , TM_API)->

         console.log 'in Articles_Controller ' + new Date().getMilliseconds()

         #raw_Articles = null

         $scope.$on 'article_data', (event, data)->
            articles = []
            if data?.results
              #raw_Articles = data.results
              #$scope.$broadcast 'show_page' , 0
               articles = data.results
               for article in articles
                 id    = article.id.remove('article-')
                 title = article.title.replace(new RegExp(' ','g'),'-').remove('.')
                 article.url = '/angular/user/article/' + id + '/' + title
            $scope.articles = articles


          $scope.$on 'clear_articles', ()->
            $scope.articles = []
