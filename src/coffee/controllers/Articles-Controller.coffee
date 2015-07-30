angular.module('TM_App')
       .controller 'Articles_Controller', ($scope, query_Service,  $location , TM_API)->

         $scope.$on 'filter_data', (event, data)->
            if data?.results
              articles = data.results.slice(0,10)
              for article in articles
                id    = article.id.remove('article-')
                title = article.title.replace(new RegExp(' ','g'),'-').remove('.')
                article.url = '/angular/user/article/' + id + '/' + title

              $scope.articles = articles

          query_Service.load_Data()

