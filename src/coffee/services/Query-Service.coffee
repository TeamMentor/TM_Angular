app = angular.module('TM_App')

class Query_Service
  constructor: (options)->
    @.options     = options || {}
    @.TM_API      = options.TM_API
    @.$rootScope  = options.$rootScope
    @.index_Query = 'query-6234f2d47eb7'
    @.data        = null

  load_Data: ()=>
    if not @.data
      @.data = []
      @.load_Query @.index_Query

  load_Query: (query_Id)=>
    console.log "[Query-Service] loading data for query: #{query_Id}"
    @.TM_API.query_tree query_Id, (data)=>
      @.data = data
      @.$rootScope.$broadcast 'query_data', data

app.service 'query_Service', ($rootScope, TM_API)->
  console.log $rootScope
  console.log 'in Query_Service service'
  return new Query_Service {TM_API:TM_API, $rootScope: $rootScope}
