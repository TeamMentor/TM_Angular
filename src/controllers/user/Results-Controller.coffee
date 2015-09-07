angular.module 'TM_App'
       .controller 'Results_Controller', ($scope, $rootScope, query_Service)->

          #console.log 'in Results_Controller ' + new Date().getMilliseconds()

          $scope.current_Page       = 1
          $scope.current_Page_Split = 10
          $scope.results_Size       = 0
          $scope.visible            = false
          $scope.pagingMessage      = ''

          $scope.$on 'view_model_data', (event,data)->
            $scope.visible      = true
            $scope.results_Size = data?.size

          $scope.$on 'set_page', (event, data)=>
            $scope.current_Page = data

          $scope.$on 'set_page_split', (event, data)=>
            $scope.current_Page_Split = data

          $scope.toggle_Filters = ->
            $rootScope.$broadcast 'toggle_filters', null

          $scope.toggle_Filters()