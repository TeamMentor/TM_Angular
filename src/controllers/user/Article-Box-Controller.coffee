angular.module('TM_App')
       .controller 'Article_Box_Controller', ($sce, $scope, icon_Service)->
          using $scope, ->
            @.icon_Technology = $sce.trustAsHtml icon_Service.element_Html @.article?.technology
            @.icon_Type       = $sce.trustAsHtml icon_Service.element_Html @.article?.type
            @.icon_Phase      = $sce.trustAsHtml icon_Service.element_Html @.article?.phase
