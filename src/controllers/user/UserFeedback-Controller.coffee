angular.module('TM_App')
       .controller 'UserFeedback_Controller' , ($scope, TM_API) ->

          $scope.map_Current_User = ()->
            TM_API.currentuser? (userInfo) ->
              if (userInfo?.UserEnabled)
               TM_API.verifyInternalUser? userInfo.Email, (data)->
                 if data
                  $scope.showFeedback     = true
                  $scope.githubUrl        = data.githubUrl

          $scope.showGeneralFeedback =  ->
            return !$scope.showFeedback

          $scope.showFeedbackBanner =  ->
            return $scope.showFeedback
          $scope.map_Current_User()