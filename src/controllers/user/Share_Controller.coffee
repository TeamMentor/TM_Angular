angular.module 'TM_App'
       .controller 'Share_Controller', ($scope, $timeout, $window)->

          $scope.msg_Id         = '#share_article_link'
          $scope.msg_Copy_OK    = 'Article link has been copied to your clipboard'
          $scope.msg_Copy_Fail  = 'Copy and share the link below'
          $scope.show_feedback  = false
          $scope.infoMessage    = null
          $scope.showCopyButton = null
          $scope.copy_Article_Link = ->
            $window.getSelection().removeAllRanges();
            try
              share_Link = $window.document.querySelector($scope.msg_Id);
              $window.document.getElementById("share_link").select()
              #share_Link.childNodes[0].select()

              if $window.document.execCommand('copy')
                $scope.infoMessage = $scope.msg_Copy_OK
                $timeout (->
                  $scope.infoMessage = null), 3000
              else
                $scope.infoMessage = $scope.msg_Copy_Fail
            catch
              $scope.infoMessage = $scope.msg_Copy_Fail

            $timeout (-> window.getSelection().removeAllRanges()), 5000

          $scope.showInfoMessage = ->
            $scope.infoMessage

          $scope.$on 'Show_Feedback_Box',(show)->
            $scope.show_feedback = show;
            $timeout (->
              $window.document.querySelector($scope.msg_Id).childNodes[0].focus()
              $window.document.querySelector($scope.msg_Id).childNodes[0].select()
            ), 1


          $scope.closeModalWindow = ->
            $scope.show_feedback = false
            $window.getSelection().removeAllRanges();

          $scope.supportedCopyToClipboard=->
             ua       = $window.navigator.userAgent
             isChrome = ua.indexOf('Chrome')  != -1;
             isFF     = ua.indexOf('Firefox') != -1;

             return (isChrome || isFF)

          $scope.modalMessage =->
             if ($scope.supportedCopyToClipboard())
               $scope.showCopyButton = true
               return "Share this article"
             else
               $scope.showCopyButton = false
               return $scope.msg_Copy_Fail


