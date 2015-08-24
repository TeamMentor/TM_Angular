angular.module 'TM_App'
       .controller 'Recommendations_Controller', ($scope, $rootScope, TM_API)->
          console.log 'in Recommendations_Controller'

          $rootScope.$on 'search_term', (event,term)->
            if term is ''
              $scope.words = []
            else
              TM_API.get_Words term, (words)->
                console.log words
                $scope.words = words

          $scope.select_Word = (word)->
            $scope.text = word

          $scope.words = []
