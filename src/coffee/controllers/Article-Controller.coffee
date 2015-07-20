angular.module('App')
       .controller 'Article_Controller', ($sce, $scope, $stateParams, TM_API)->
          TM_API.article $stateParams.article_Id, (article_Data)->
            $scope.title = article_Data.title
            $scope.article_Html =  $sce.trustAsHtml article_Data.article_Html
            #$scope.technology = article_Data.technology
            #console.log article_Data