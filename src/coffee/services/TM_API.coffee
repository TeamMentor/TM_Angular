app = angular.module('App')

app.service 'TM_API', ($q, $http)=>

  @.get_Words = (term, callback)->

    #console.log 'during'
    url = "http://localhost:12345/angular/api/auto-complete?term=#{term}"
    $http.get url
         .success (response)->
            callback response.data
         .error (data, status, headers, config)->
            console.log 'error'
            console.log data

  @