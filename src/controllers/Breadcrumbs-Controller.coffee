window.using = (target,callback)->
  callback.apply(target)

angular.module 'TM_App'
       .controller 'Breadcrumbs_Controller', ($scope, $rootScope)->
          using $scope, ->
            @.history      = {}
            @.current_Path = ''
            @.breadcrumbs  = []

            @.refresh_Breadcrumbs = ()=>
              @.breadcrumbs = []
              path = ''
              for key in @.current_Path.split('/') when key
                item = @.history[key]
                title = item.title
                @.breadcrumbs.push {
                                     query_Id     : item.query_Id
                                     title        : title
                                     filter_Title : item.filter_Title
                                     path         : path
                                     filter_Id    : item.filter_Id
                                   }
                path += "/#{key}"

            @.$on 'clear_Query', (event, data)=>
              @.current_Path = ''
              @.breadcrumbs  = []

            @.$on 'query_data', (event, data)=>
              if data
                if @.current_Path.indexOf(data.id) is -1
                  @.current_Path += "/#{data.id}"
                  @.history[data.id] =
                      title     : data.title
                      query_Id  : data.id

                  @.refresh_Breadcrumbs()

            @.load_Query = (breadcrumb)=>
              @.current_Path = breadcrumb.path
              console.log breadcrumb
              #if  breadcrumb.filter_Id
              #  query_Service.filter_Id = ''
              #  query_Service.load_Filter breadcrumb.query_Id, breadcrumb.filter_Id, breadcrumb.filter_Title
              #else
              $rootScope.$broadcast 'apply_Query', breadcrumb.query_Id
              #query_Service.load_Query breadcrumb.query_Id