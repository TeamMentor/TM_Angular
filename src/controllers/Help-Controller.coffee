angular.module('TM_App')
       .controller 'Help_Controller', ($sce, $scope, TM_API)->
          $scope.show_Doc = (article)->
            if article
              TM_API.docs_Page article.Id, (article_Data)->
                $scope.title   = article.Title
                $scope.content = $sce.trustAsHtml article_Data.html

          $scope.load_Library = ()->
            TM_API.docs_Library (library)->
              if library?.Views
                $scope.Views = library.Views
                $scope.show_Doc library.Views?.first()?.Articles?.first()

          $scope.load_Library()