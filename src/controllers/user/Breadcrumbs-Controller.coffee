angular.module 'TM_App'
       .controller 'Breadcrumbs_Controller', ($scope, $rootScope,breadcrumbs_Service)->
          using $scope, ->

            #console.log 'in Breadcrumbs_Controller ' + new Date().getMilliseconds()

            @.visible             =  false
            @.breadcrumbs_Service = breadcrumbs_Service
            @.breadcrumbs         = null

            @.$on 'clear_query', (event, data)=>
              @.breadcrumbs_Service.clear_query()

            @.$on 'view_model_data', (event, data)=>
              @.breadcrumbs_Service.add_Breadcrumb data.id, data.title
              @.refresh_Breadcrumbs()

            @.$on 'pop_state', (event, url)=>
              @.breadcrumbs_Service.move_Back()
              @.refresh_Breadcrumbs()

            @.$on 'refresh_breadcrumbs', (event, data)=>
              @.refresh_Breadcrumbs()

            @.refresh_Breadcrumbs = ()=>
              @.breadcrumbs = @.breadcrumbs_Service.current_Breadcrumbs()
              @.visible = true

            @.load_Query = @.breadcrumbs_Service.on_Selected
