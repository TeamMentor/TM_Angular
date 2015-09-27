angular.module 'TM_App'
       .controller 'Share_Controller', ($scope, $timeout)->
          $scope.infoMessage  = null

          $scope.copy_Article_Link = ->
            $scope.infoMessage  = 'Article link copied to your clipboard'
            $timeout (-> $scope.infoMessage = null), 2000

          $scope.showInfoMessage = ->
            $scope.infoMessage
