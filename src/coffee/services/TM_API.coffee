app = angular.module('App')

app.service 'TM_API', ($q, $http)=>
  #server  = 'http://localhost:12345'
  cache_Query_Tree = {}

  @.get_Words = (term, callback)->
    url = "/angular/api/auto-complete?term=#{term}"
    return $http.get url
                .success (data)->
                   callback (match for match of data) if callback     # when using callback
                .then (response)->
                   return (match for match of response.data)          # when using promises

  @.query_tree =  (id, callback)->
    id = id || 'query-6234f2d47eb7'

    if cache_Query_Tree[id]
      return callback cache_Query_Tree[id]

    url     = "/api/data/query_tree/#{id}"
    $http.get url
         .success (data)->
            cache_Query_Tree[id] = data
            callback(data)
  @

  @.query_tree_filtered =  (id, filter, callback)->

    if cache_Query_Tree[id+filter]
      return callback cache_Query_Tree[id]

    url     = "/api/data/query_tree_filtered/#{id}/#{filter}"
    $http.get url
      .success (data)->
        cache_Query_Tree[id+filter] = data
        callback(data)
  @

  @.query_from_text_search =  (text, callback)->

    url     = "/api/search/query_from_text_search/#{text}"
    $http.get url
         .success (data)->
            callback(data)
  @

  @.get_articles_parent_queries =  (article_Ids, ignore_Titles, callback)->
    url     = "/api/data/articles_parent_queries/#{article_Ids.join(',')}"
    $http.get url
         .success (data)->
           matches = []
           for key,query of data.queries
             if key.indexOf('query-') > -1
               query_Data = data.queries[key]
               #if query_Data.child_Queries.size() is 0
               #if query_Data.parent_Queries.size() is 1
               if query_Data.parent_Queries?.first() is 'query-6234f2d47eb7'
                 if ignore_Titles.indexOf(query_Data.title) is -1
                   matches.push { id: key,  title: query_Data.title, articles: query_Data.articles , size: query_Data.articles.size()}
           callback(matches) if callback
  @

  @.docs_Library =  (callback)->
    url     = "/json/docs/library"
    $http.get url
         .success (data)->
            callback(data)
  @

  @.docs_Page =  (id, callback)->
    url     = "/json/docs/#{id}"
    $http.get url
         .success (data)->
            callback(data)
  @



