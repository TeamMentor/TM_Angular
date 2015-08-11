angular.module('TM_App')
       .controller 'Filters_Active_Controller', ($sce, $scope, $rootScope, query_Service,icon_Service)->

          $scope.current_Filters  = {}
          $scope.current_Query_Id = null

          #console.log 'in Filters_Controller ' + new Date().getMilliseconds()

          $scope.$on 'apply_filter', (event,filter_Id, filter_Title, metadata_Title )->
            if filter_Id
              $scope.current_Filters[filter_Id] = filter_Title
              $scope.refresh_Filters()

          $scope.$on 'clear_filter' , (event, filter_Id)->
            delete $scope.current_Filters[filter_Id]

          $scope.$on 'clear_filters' , ->
            $scope.current_Filters = {}

          $scope.$on 'query_data', (event,data)->
            $scope.current_Query_Id = data?.id

          $scope.$on 'apply_query', (event, query_Id)->
            $scope.current_Query_Id = query_Id
            $scope.refresh_Filters()

          $scope.refresh_Filters = ()->
            query_Id = $scope.current_Query_Id
            filters =  $scope.current_Filters.keys().join(',')
            if filters is ''
              query_Service.load_Query query_Id
            else
              query_Service.load_Filter query_Id, filters

          $scope.clear_Filter = (filter_Id)->
            $rootScope.$broadcast 'clear_filter', filter_Id
            delete $scope.current_Filters[filter_Id]
            $scope.refresh_Filters()

          $scope.$on 'filter_data', (event,data)->
            #$scope.pages = results_Size