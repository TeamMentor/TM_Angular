app = angular.module('App')

app.service 'TM_API', ($q, $http)=>
  #server  = 'http://localhost:12345'
  cache_Query_Tree = {}

  @.get_Words = (term, callback)->
    url = "/angular/api/auto-complete?term=#{term}"
    return $http.get url
                .success (data)->
                   callback (match for match of data) if callback     # when using callback
                #.error (data, status, headers, config)->
                #   console.log data
                #   add error handling function
                .then (response)->
                   return (match for match of response.data)          # when using promises

  @.query_tree =  (id, callback)->
    id = id || 'query-dd98c2d701d8'

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
        console.log data
        cache_Query_Tree[id+filter] = data
        callback(data)
  @
