angular.module 'TM_App'
       .controller 'Share_Controller', ($scope, $timeout, $window)->

          $scope.msg_Id        = '#share_article_link'
          $scope.msg_Copy_OK   = 'Article link copied to your clipboard'
          $scope.msg_Copy_Fail = 'Copy fail'

          $scope.infoMessage  = null

          $scope.copy_Article_Link = ->
            $window.getSelection().removeAllRanges();
            try
              share_Link = $window.document.querySelector($scope.msg_Id);
              range = $window.document.createRange();
              range.selectNode(share_Link);
              $window.getSelection().addRange(range);

              if $window.document.execCommand('copy')
                $scope.infoMessage = $scope.msg_Copy_OK
              else
                $scope.infoMessage = $scope.msg_Copy_Fail
            catch
              $scope.infoMessage = $scope.msg_Copy_Fail

            $window.getSelection().removeAllRanges();

            $timeout (-> $scope.infoMessage = null), 2000

          $scope.showInfoMessage = ->
            $scope.infoMessage
