angular.module('TM_App')
       .controller 'Help_Controller', ($sce, $scope, $stateParams, TM_API)->
          $scope.doc_Titles       = null
          $scope.first_Article_Id = null

          $scope.show_Doc = (article_Id)->
            if article_Id
              TM_API.docs_Page article_Id, (article_Data)->
                $scope.id      = article_Id
                $scope.title   = $scope.doc_Titles[article_Id]
                $scope.content = $sce.trustAsHtml article_Data.html

          $scope.map_Doc_Titles = (library)->
            $scope.doc_Titles = {}
            if library
              for view in library.Views
                for article in view.Articles
                  $scope.doc_Titles[article.Id] = article.Title

          $scope.load_Library = (next)->
            TM_API.docs_Library (library)->
              if library?.Views
                $scope.Views = library.Views
              $scope.map_Doc_Titles library
              $scope.first_Article_Id = library.Views?.first()?.Articles?.first().Id
              next()

          $scope.show_First_Article = () ->
            $scope.show_Doc $scope.first_Article_Id

          $scope.load_Library ->
            if $stateParams?.id
              $scope.show_Doc $stateParams?.id
            else
              $scope.show_First_Article()

