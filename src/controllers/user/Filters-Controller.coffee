angular.module('TM_App')
       .controller 'Filters_Controller', ($sce, $scope, $rootScope, query_Service,icon_Service)->

          console.log 'in Filters_Controller ' + new Date().getMilliseconds()

          $scope.current_Filters = {}
          $scope.show_Technology = true
          $scope.show_Metadata  = {}

          $scope.$on 'filter_data', (event, data)->
            if data?.filters
              $scope.filters = data.filters
              for filter in $scope.filters
                for result in filter.results
                  result.icon = $sce.trustAsHtml icon_Service.element_Html result.title
            else
              $scope.filters = []

          $scope.$on 'view_filters' , (event,data)->
            $scope.view_Filters = data

          $scope.$on 'apply_filter', (event, filter_Id,filter_Title, metadata_Title)->
            $scope.current_Filters[filter_Id] = filter_Id: filter_Id ,filter_Title : filter_Title, metadata_Title: metadata_Title
            $scope.map_Visibility()


          $scope.$on 'clear_filter', (event, filter_Id)->
            delete $scope.current_Filters[filter_Id]
            $scope.map_Visibility()

          $scope.apply_Filter = (filter_Id,filter_Title, metadata_Title)->
            $rootScope.$broadcast 'apply_filter', filter_Id,filter_Title, metadata_Title

          $scope.map_Visibility =  ()->
            #console.log 'in map visibility'
            #console.log $scope.current_Filters
            $scope.show_Technology = 'false bb'
            delete $scope.show_Metadata['Technology']

            for item,value of $scope.current_Filters
              #console.log value
              #console.log value.metadata_Title
              if value.metadata_Title is 'Technology'
                $scope.show_Technology = 'true aaa'
                $scope.show_Metadata.Technology = true



          #$scope.show_Metadata = (metadata_Title) ->
          #  if metadata_Title is 'Technology'
          #    $scope.show_Metadata[$scope.show_Technology] = true
          #  return true



