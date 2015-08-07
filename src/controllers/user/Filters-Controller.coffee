angular.module('TM_App')
       .controller 'Filters_Controller', ($sce, $scope, $rootScope, query_Service,icon_Service)->

          $scope.$on 'filter_data', (event, data)->
            if data?.filters
              $scope.filters = data.filters
              for filter in $scope.filters
                for result in filter.results
                  result.icon = $sce.trustAsHtml icon_Service.element_Html result.title
            else
              $scope.filters = []

          $scope.$on 'view_Filters' , (event,data)->
            $scope.view_Filters = data

          $scope.apply_Filter = (filter_Id,filter_Title)->
            $rootScope.$broadcast 'apply_Filter', filter_Id,filter_Title

          query_Service.load_Data()



