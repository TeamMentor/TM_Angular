angular.module 'TM_App'
       .controller 'Breadcrumbs_Controller', ($scope, $rootScope)->
          using $scope, ->

            #console.log 'in Breadcrumbs_Controller ' + new Date().getMilliseconds()

            @.history      = {}
            @.current_Path = ''
            @.breadcrumbs  = []

            @.$on 'clear_query', (event, data)=>
              @.current_Path = ''
              @.breadcrumbs  = []

            @.$on 'view_model_data', (event, data)=>
              if data
                if @.current_Path.indexOf(data.id) is -1
                  @.current_Path += "/#{data.id}"
                  @.history[data.id] =
                    title     : data.title
                    query_Id  : data.id

                  @.refresh_Breadcrumbs()

            @.refresh_Breadcrumbs = ()=>
              @.breadcrumbs = []
              path = ''
              for key in @.current_Path.split('/') when key
                item = @.history[key]
                if item
                  @.breadcrumbs.push {
                                       query_Id     : item.query_Id
                                       title        : item.title
                                       path         : path
                                     }
                  path += "/#{key}"

            @.load_Query = (breadcrumb)=>
              if breadcrumb?.query_Id
                @.current_Path = breadcrumb.path
                $rootScope.$broadcast 'apply_query', breadcrumb.query_Id