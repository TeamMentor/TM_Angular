angular.module('App')
       .controller 'Help_Controller', ($sce, $scope, TM_API)->
          TM_API.docs_Library (library)->
            $scope.Views = library.Views

            $scope.show_Doc = (article)->
              TM_API.docs_Page article.Id, (article_Data)->
                $scope.title   = article.Title
                $scope.content = $sce.trustAsHtml article_Data.html

            $scope.show_Doc library.Views.first().Articles.first()

