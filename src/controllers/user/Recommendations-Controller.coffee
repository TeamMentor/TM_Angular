angular.module 'TM_App'
       .controller 'Recommendations_Controller', ($scope, $rootScope, TM_API)->

          $rootScope.$on 'apply_query', (event,term)->
            $scope.words = []

          $rootScope.$on 'search_term', (event,term)->
            if term is ''
              $scope.words = []
            else
              TM_API.get_Words term, (words)->
                $scope.words = words

          $scope.select_Word = (word)->
            $rootScope.$broadcast 'set_search', word

          $scope.words = []
