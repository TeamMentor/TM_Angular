app = angular.module('TM_App')

class Query_Service
  constructor: (options)->
    @.TM_API      = options.TM_API
    @.$rootScope  = options.$rootScope
    @.index_Query = 'query-6234f2d47eb7'
    @.default_Page_From    = 0
    @.default_Page_To      = 10

  load_Data: ()=>
    @.load_Query @.index_Query

  #load_Query
  load_Query: (query_Id, filters, from, to )=>
    from = from || @.default_Page_From
    to   = to || @.default_Page_To
    @.TM_API.query_view_model query_Id, filters, from, to, (data)=>
      @.$rootScope.$broadcast 'view_model_data', data
  reload_Data: ()=>
    @.$rootScope.$broadcast 'clear_filters'
    @.$rootScope.$broadcast 'clear_query'
    @.$rootScope.$broadcast 'clear_search'
    @.load_Data()

app.service 'query_Service', ($rootScope, TM_API)->
  return new Query_Service { TM_API:TM_API, $rootScope: $rootScope}
