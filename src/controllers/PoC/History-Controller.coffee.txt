window.using = (target,callback)->
  callback.apply(target)

angular.module 'TM_App'
       .controller 'Breadcrumbs_Controller', ($scope, query_Service)->
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

            #@.$on 'query_data', (event, data)=>
            #  @.current_Path += "/#{data.id}"
            #  @.history[data.id] = data.title
            #  @.refresh_Breadcrumbs()

            @.$on 'filter_data', (event, data, filter_Id, filter_Title)=>
              if data
                if filter_Id
                  @.current_Path += "/#{data.id}#{filter_Id}"
                  @.history[data.id+filter_Id] =
                      title       : data.title
                      filter_Title: filter_Title
                      filter_Id   : filter_Id
                      query_Id    : data.id
                else
                  @.current_Path += "/#{data.id}"
                  @.history[data.id] =
                      title     : data.title
                      query_Id  : data.id

                @.refresh_Breadcrumbs()

            @.load_Query = (breadcrumb)=>
              @.current_Path = breadcrumb.path
              console.log breadcrumb
              if  breadcrumb.filter_Id
                query_Service.filter_Id = ''
                query_Service.load_Filter breadcrumb.query_Id, breadcrumb.filter_Id, breadcrumb.filter_Title
              else
                query_Service.load_Query breadcrumb.query_Id