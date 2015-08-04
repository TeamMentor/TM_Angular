angular.module('TM_App')
       .controller 'Filters_Controller', ($sce, $scope, query_Service,icon_Service)->
          query_Id = null

          $scope.$on 'filter_data', (event, data)->
            if data?.filters
              query_Id = data.id
              $scope.filters = data.filters
              for filter in $scope.filters
                for result in filter.results
                  result.icon = $sce.trustAsHtml icon_Service.element_Html result.title
            else
              $scope.filters = []
          $scope.apply_Filter = (filter_Id,filter_Title)->
            query_Service.load_Filter query_Id, filter_Id, filter_Title

          query_Service.load_Data()

