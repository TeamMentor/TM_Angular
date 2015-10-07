angular.module('TM_App')
       .controller 'Filters_Active_Controller', ($sce, $scope, $rootScope, query_Service,icon_Service)->

          $scope.current_Filters  = {}
          $scope.current_Query_Id = null
          $scope.from =0
          $scope.to   =0
          #console.log 'in Filters_Controller ' + new Date().getMilliseconds()

          $scope.$on 'apply_filter', (event,filter_Id, filter_Title, metadata_Title, filter_Refresh = true )->
            if filter_Id
              icon =  $sce.trustAsHtml icon_Service.element_Html filter_Title
              $scope.current_Filters[filter_Id] = filter_Title:filter_Title, filter_Icon : icon, metadata_Title: metadata_Title
              if filter_Refresh
                $scope.refresh_Filters($scope.from, $scope.to)

          $scope.$on 'clear_filter' , (event, filter_Id, metadata_Title)->
            if metadata_Title
              for key, value of $scope.current_Filters
                if value.metadata_Title is metadata_Title
                  delete $scope.current_Filters[key]
            else
              delete $scope.current_Filters[filter_Id]

          $scope.$on 'clear_filters' , ->
            $scope.current_Filters = {}

          $scope.$on 'view_model_data', (event,data)->
            $scope.current_Query_Id = data?.id

          $scope.$on 'apply_query', (event, query_Id)->
            $scope.current_Query_Id = query_Id
            $scope.refresh_Filters($scope.from, $scope.to)


          $scope.$on 'set_page', (event, page, from, to)->
            $scope.refresh_Filters(from, to)

          $scope.$on 'set_from_to', (event, from, to)->
            $scope.from = from
            $scope.to   = to

          $scope.refresh_Filters = (from, to)->
            query_Id = $scope.current_Query_Id
            filters =  $scope.current_Filters.keys().join(',')

            if filters is ''
              query_Service.load_Query query_Id, null   , from, to
            else
              query_Service.load_Query query_Id, filters, from, to

          $scope.clear_Filter = (filter_Id)->
            $rootScope.$broadcast 'clear_filter', filter_Id
            delete $scope.current_Filters[filter_Id]
            $scope.refresh_Filters($scope.from, $scope.to)

