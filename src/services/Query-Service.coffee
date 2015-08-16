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

  #load_Query
  load_Query: (query_Id, filter_Id)=>


    @.TM_API.query_view_model query_Id, null, @.page_From, @.page_To, (data)=>
      @.$rootScope.$broadcast 'article_data', id:data.id, results: data.articles
      @.$rootScope.$broadcast 'filter_data' , id:data.id, filters: data.filters
      @.$rootScope.$broadcast 'query_data'  , id:data.id, containers: data.queries , title: data.title


    return
    #@.TM_API.query_tree_filters query_Id, (data)->
    #  console.log data

    #@.TM_API.query_view_mode query_Id, filter_Id, @.page_From, @.page_To

    if not query_Id
      @.$rootScope.$broadcast 'query_data', {}
      @.$rootScope.$broadcast 'article_data', {}
      @.$rootScope.$broadcast 'filter_data', {}
    else
      @.load_Query_Queries  query_Id, filter_Id
      @.load_Query_Articles query_Id, filter_Id, @.page_From, @.page_To
      @.load_Query_Filters  query_Id, filter_Id


  load_Query_Queries: (query_Id, filters)=>
    get_Data = (next)=>
      if filters
        @.TM_API.query_tree_filtered_queries query_Id, filters, next
      else
        @.TM_API.query_tree_queries query_Id, next

    get_Data (data)=>
        @.data_Queries = data
        @.$rootScope.$broadcast 'query_data', data

  load_Query_Articles: (query_Id, filters, from, to)=>
    get_Data = (next)=>
      if filters
        @.TM_API.query_tree_filtered_articles query_Id, filters, from, to, next
      else
        @.TM_API.query_tree_articles query_Id,from, to, next

    get_Data (data)=>
      @.data_Articles = data
      @.$rootScope.$broadcast 'article_data', data

  load_Query_Filters: (query_Id, filters)=>
    get_Data = (next)=>
      if filters
        @.TM_API.query_tree_filtered_filters query_Id, filters, next
      else
        @.TM_API.query_tree_filters query_Id, next

    get_Data (data)=>
      @.data_Filters = data
      @.$rootScope.$broadcast 'filter_data', data



  reload_Data: ()=>
    @.data_Queries  = null
    @.data_Articles = null
    @.data_Queries  = null
    @.$rootScope.$broadcast 'clear_filters'
    @.$rootScope.$broadcast 'clear_query'
    @.$rootScope.$broadcast 'clear_search'
    @.load_Data()

app.service 'query_Service', ($rootScope, TM_API)->
  return new Query_Service { TM_API:TM_API, $rootScope: $rootScope}
