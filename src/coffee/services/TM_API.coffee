app = angular.module('App')

app.service 'TM_API', ($q, $http)=>

  @.get_Words = (term, callback)->
    url = "http://localhost:12345/angular/api/auto-complete?term=#{term}"
    return $http.get url
                .success (data)->
                   callback (match for match of data) if callback     # when using callback
                #.error (data, status, headers, config)->
                #   console.log data
                #   add error handling function
                .then (response)->
                   return (match for match of response.data)          # when using promises
  @