angular.module 'TM_App'
       .controller 'Index_Controller', ($scope, query_Service, $stateParams, $location, $rootScope,$timeout)->

          console.log 'in Index_Controller ' + new Date().getMilliseconds()

          using $scope, ->
            @.history       = {}
            @.view_Filters  = false
            @.column_Left   = 'col-3'
            @.column_Middle = 'col-9'
            @.column_Right  = 'col-0'



            @.$on 'toggle_filters' , (event)=>
              $scope.view_Filters = not $scope.view_Filters
              if $scope.view_Filters
                @.column_Middle = 'col-6'
                @.column_Right  = 'col-3'
              else
                @.column_Middle = 'col-9'
                @.column_Right  = 'col-0'

            if $stateParams.query_Id
              query_Service.load_Query $stateParams.query_Id
              #query_Service.load_Query query_Service.index_Query, $stateParams.query_Id
            else
              query_Service.reload_Data()

