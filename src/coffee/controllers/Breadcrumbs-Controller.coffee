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
              for query_Id in @.current_Path.split('/') when query_Id
                @.breadcrumbs.push { query_Id: query_Id , title: @.history[query_Id], path:path}
                path += "/#{query_Id}"

            @.$on 'query_data', (event, data)=>
              @.current_Path += "/#{data.id}"
              @.history[data.id] = data.title
              @.refresh_Breadcrumbs()

            @.load_Query = (breadcrumb)=>
              @.current_Path = breadcrumb.path
              query_Service.load_Query breadcrumb.query_Id