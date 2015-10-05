angular.module 'TM_App'
       .controller 'Recommendations_Controller', ($scope, $rootScope, TM_API)->

          $scope.$on 'apply_query', (event,term)->
            $scope.words = []

          $scope.$on 'search_term', (event,term, selected_Technology)->
            if selected_Technology?.title isnt "All Technologies"             # only show recommendations when the technology is 'All Technologies'
              $scope.words = []
            else
              if term is ''
                $scope.words = []
              else
                TM_API.get_Words term, (words)-> 
                  $scope.words = words

          $scope.select_Word = (word)->
            $rootScope.$broadcast 'set_search', word

          $scope.words = []
