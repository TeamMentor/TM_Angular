angular.module('TM_App')
       .controller 'Articles_Controller', ($scope, TM_API)->
         $scope.$on 'query_data', (event, data)->

           articles = data.results.slice(0,10)
           for article in articles
             id    = article.id.remove('article-')
             title = article.title.replace(new RegExp(' ','g'),'-').remove('.')
             article.url = '/angular/user/article/' + id + '/' + title

             #$scope.icon_Technology = $sce.trustAsHtml icon_Service.element_Html(article.technology)
             #$scope.icon_Type       = $sce.trustAsHtml icon_Service.element_Html(article.type)
             #$scope.icon_Phase      = $sce.trustAsHtml icon_Service.element_Html(article.phase)

           $scope.articles = articles

