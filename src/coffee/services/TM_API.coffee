app = angular.module('App')

app.service 'TM_API', ($q, $http)=>
  #server  = 'http://localhost:12345'

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

    url     = "/api/data/query_tree/#{id}"
    console.log url
    $http.get url
         .success (data)->
            callback(data)
  @