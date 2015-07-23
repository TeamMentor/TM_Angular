angular.module('TM_App')
       .controller 'Articles_Controller', ($scope, TM_API)->
         $scope.$on 'query_data', (event, data)->

           articles = data.results.slice(0,10)
           for article in articles
             id    = article.id.remove('article-')
             title = article.title.replace(new RegExp(' ','g'),'-').remove('.')
             article.url = '/angular/user/article/' + id + '/' + title
           $scope.articles = articles

