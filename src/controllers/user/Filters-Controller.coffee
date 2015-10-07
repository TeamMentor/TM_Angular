angular.module('TM_App')
       .controller 'Filters_Controller', ($sce, $scope, $rootScope, query_Service,icon_Service)->

          #console.log 'in Filters_Controller ' + new Date().getMilliseconds()

          $scope.current_Filters = {}
          $scope.hide_Metadata   = {}
          $scope.visible         = false

          $scope.$on 'view_model_data', (event, data)->
            $scope.visible = true
            if data?.filters
              $scope.filters = data.filters
              for key, value of $scope.filters
                for result in value
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
            div = document.querySelector('.scrolling-results');
            angular.element(div).css('height','75%')
            $rootScope.$broadcast 'apply_filter', filter_Id,filter_Title, metadata_Title
            $rootScope.$broadcast 'reset_current_page'

          $scope.map_Visibility =  ()->
            delete $scope.hide_Metadata['Technology']
            delete $scope.hide_Metadata['Type']
            delete $scope.hide_Metadata['Phase']
            #angular.element(document.querySelector('#current_Page select'))[0].value="number:1"
            #angular.element(document.querySelector('#current_Page select'))[0].text="1"
            if (Object.keys($scope.current_Filters).length > 0)
              for item,value of $scope.current_Filters
                #if value.metadata_Title is 'Technology'
                  $scope.hide_Metadata[value.metadata_Title] = true
            else
              div = document.querySelector('.scrolling-results');
              angular.element(div).css('height','80%')

          #window.scope = $scope
