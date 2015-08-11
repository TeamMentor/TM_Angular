app = angular.module('TM_App')

class Query_Service
  constructor: (options)->
    @.TM_API      = options.TM_API
    @.$rootScope  = options.$rootScope
    @.index_Query = 'query-6234f2d47eb7'
    #@.index_Query = 'query-fd328b700ba5'
    @.data_Queries = null
    @.data_Articles = null
    @.data_Filters = null
    @.page_From    = 0
    @.page_To      = 10

  load_Data: ()=>
    if not @.data
      @.data_Queries  = []
      @.data_Articles = []
      @.data_Filters  = []
      @.load_Query @.index_Query

  load_Query: (query_Id)=>
    if not query_Id
      @.$rootScope.$broadcast 'query_data', {}
      @.$rootScope.$broadcast 'article_data', {}
      @.$rootScope.$broadcast 'filter_data', {}
    else
      #console.log "[Query-Service] loading data for query: #{query_Id}"
      @.TM_API.query_tree_queries query_Id, (data)=>
        @.data_Queries = data
        @.$rootScope.$broadcast 'query_data', data

      @.load_Query_Articles query_Id, @.page_From, @.page_To

      @.TM_API.query_tree_filters query_Id, (data)=>
        @.data_Filters = data
        @.$rootScope.$broadcast 'filter_data', data

  load_Query_Articles: (query_Id, from, to)=>
    @.TM_API.query_tree_articles query_Id,from, to, (data)=>
      @.data_Articles = data
      @.$rootScope.$broadcast 'article_data', data

  load_Filter: (query_Id, filter_Id)=>
    #console.log "[Query-Service] loading data for query: #{query_Id} and filters #{filter_Id}"

    @.TM_API.query_tree_filtered query_Id, filter_Id , (data)=>
      @.data_Queries = data
      @.data_Filters = data
      @.$rootScope.$broadcast 'query_data', data
      @.$rootScope.$broadcast 'filter_data', data

  reload_Data: ()=>
    @.data_Queries  = null
    @.data_Articles = null
    @.data_Queries  = null
    @.$rootScope.$broadcast 'clear_Filters'
    @.$rootScope.$broadcast 'clear_Query'
    @.$rootScope.$broadcast 'clear_Search'
    @.load_Data()

app.service 'query_Service', ($rootScope, TM_API)->
  return new Query_Service { TM_API:TM_API, $rootScope: $rootScope}
