angular.module 'TM_App'
       .controller 'Results_Controller', ($scope, $rootScope, query_Service)->

          console.log 'in Results_Controller ' + new Date().getMilliseconds()

          #$scope.current_Query_Id = null

          $scope.$on 'article_data', (event,data)->
            #$scope.current_Query_Id = data?.id
            $scope.results_Size = data?.size

          $scope.toggle_Filters = ->
            $rootScope.$broadcast 'toggle_filters', null


          #$scope.$on 'apply_Query', (event, query_Id)->
            #$scope.current_Query_Id = query_Id
            #$scope.refresh_Filters()