angular.module('TM_App')

       .controller 'UserFeedback_Controller' , ($scope) ->

        $scope.$on 'view_model_data', (event,data) ->
          if data? && data.UserInfo
            if data.UserInfo.InternalUser
              $scope.showFeedback     = true
              $scope.githubUrl        = data.UserInfo.InternalUserInfo.githubUrl
            else
              $scope.showFeedback     = false
          $scope.visible = true

          $scope.showGeneralFeedback =  ->
            return !$scope.showFeedback

          $scope.showFeedbackBanner =  ->
            return $scope.showFeedback

          $scope.showBanner =  ->
            return $scope.visible

