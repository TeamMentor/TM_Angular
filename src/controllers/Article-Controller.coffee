angular.module('TM_App')
       .controller 'Article_Controller', ($sce, $scope, $stateParams, TM_API, icon_Service)->

          TM_API.article $stateParams.article_Id, (article)->
            id    = article.id.remove('article-')
            title = article.title.replace(new RegExp(' ','g'),'-').remove('.')
            article.url = '/angular/user/article/' + id + '/' + title


            $scope.article      = article
            $scope.article_Html =  $sce.trustAsHtml article.article_Html

            $scope.icon_Technology = $sce.trustAsHtml icon_Service.element_Html(article.technology)
            $scope.icon_Type       = $sce.trustAsHtml icon_Service.element_Html(article.type)
            $scope.icon_Phase      = $sce.trustAsHtml icon_Service.element_Html(article.phase)