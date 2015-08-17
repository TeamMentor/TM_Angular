require 'fluentnode'

cheerio = require 'cheerio'

class TM_GraphDB_Http
  constructor: ->
    @.server      = 'http://localhost:12346'
    @.index_Query = 'query-6234f2d47eb7'
    @.java_Query = 'query-7d9a1b64c045'

  cache_path: (callback)->
    @.open '/graph-db/cache_path', callback

  open: (virtual_Path, callback)=>
    "#{@.server}#{virtual_Path}".GET_Json (json)->
      callback json

  status: (callback)=>
    @.open '/graph-db/status', callback

  #query_tree: (query_Id,callback)=>
  #  @.open "/data/query_tree/#{query_Id}", callback

  query_view_model: (query_Id,from, to, callback)=>
    @.open "/data/query_view_model/#{query_Id}/#{from}/#{to}", callback

  query_view_model_filtered: (query_Id,filters, from, to, callback)=>
    @.open "/data/query_view_model_filtered/#{query_Id}/#{filters}/#{from}/#{to}", callback

  #query_tree_filters: (query_Id,callback)=>
  #  @.open "/data/query_tree_filters/#{query_Id}", callback

  #query_tree_queries: (query_Id,callback)=>
  #  @.open "/data/query_tree_queries/#{query_Id}", callback

module.exports = TM_GraphDB_Http
