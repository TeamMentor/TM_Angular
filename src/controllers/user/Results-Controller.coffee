angular.module 'TM_App'
       .controller 'Results_Controller', ($scope, $rootScope, query_Service)->

          $scope.current_Filters  = {}
          $scope.view_Filters     = false
          $scope.current_Query_Id = null


          $scope.$on 'query_data', (event,data)->
            $scope.current_Query_Id = data?.id
            $scope.results_Size = data?.results?.length

          $scope.$on 'apply_Query', (event, query_Id)->
            $scope.current_Query_Id = query_Id
            $scope.refresh_Filters()

          $scope.$on 'apply_Filter', (event,filter_Id, filter_Title )->
            if filter_Id
              $scope.current_Filters[filter_Id] = filter_Title
              $scope.refresh_Filters()

          $scope.$on 'clear_Filters' , ->
            $scope.current_Filters = {}


          $scope.toggle_Filters = ->
            $scope.view_Filters = not $scope.view_Filters
            $rootScope.$broadcast 'view_Filters', $scope.view_Filters

          $scope.refresh_Filters = ()->
            query_Id = $scope.current_Query_Id
            filters =  $scope.current_Filters.keys().join(',')
            if filters is ''
              query_Service.load_Query query_Id
            else
              query_Service.load_Filter query_Id, filters

          $scope.clear_Filter = (key)->
            delete $scope.current_Filters[key]
            $scope.refresh_Filters()

          $scope.$on 'filter_data', (event,data)->
            #$scope.pages = results_Size
