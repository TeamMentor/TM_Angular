angular.module 'TM_App'
       .controller 'Index_Controller', ($scope, query_Service)->

          console.log 'in Index_Controller ' + new Date().getMilliseconds()

          using $scope, ->
            @.history = {}
            @.column_Left   = 'col-3'
            @.column_Middle = 'col-9'
            @.column_Right  = 'col-0'


            @.$on 'view_Filters' , (event,data)=>
              if data
                @.column_Middle = 'col-6'
                @.column_Right  = 'col-3'
              else
                @.column_Middle = 'col-9'
                @.column_Right  = 'col-0'

            query_Service.reload_Data()