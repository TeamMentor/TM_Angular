app = angular.module('App')

app.service 'TM_API', ($q, $http)=>
  @.get_Words = (term, callback)->
    $http.get "http://localhost:12345/angular/api/auto-complete?term=#{term}"
    .then (response)->
      callback response.data
  @