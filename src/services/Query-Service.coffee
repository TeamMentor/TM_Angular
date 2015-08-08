app = angular.module('TM_App')

class Query_Service
  constructor: (options)->
    @.TM_API      = options.TM_API
    @.$rootScope  = options.$rootScope
    @.index_Query = 'query-6234f2d47eb7'
    @.data        = null

  load_Data: ()=>
    if not @.data
      @.data = []
      @.load_Query @.index_Query

  load_Query: (query_Id)=>
    if not query_Id
      @.$rootScope.$broadcast 'query_data', {}
      @.$rootScope.$broadcast 'filter_data', {}
    else
      #console.log "[Query-Service] loading data for query: #{query_Id}"
      @.TM_API.query_tree query_Id, (data)=>
        @.data = data
        @.$rootScope.$broadcast 'query_data', data
        @.$rootScope.$broadcast 'filter_data', data

  load_Filter: (query_Id, filter_Id)=>
    #console.log "[Query-Service] loading data for query: #{query_Id} and filters #{filter_Id}"

    @.TM_API.query_tree_filtered query_Id, filter_Id , (data)=>
      @.data = data
      @.$rootScope.$broadcast 'query_data', data
      @.$rootScope.$broadcast 'filter_data', data

  reload_Data: ()=>
    @.data = null
    @.$rootScope.$broadcast 'clear_Filters'
    @.$rootScope.$broadcast 'clear_Query'
    @.$rootScope.$broadcast 'clear_Search'
    @.load_Data()

app.service 'query_Service', ($rootScope, TM_API)->
  return new Query_Service { TM_API:TM_API, $rootScope: $rootScope}
