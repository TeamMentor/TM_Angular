console.log 'aaasdasdasd13 aaa'



app = angular.module( "App", [])

#app = angular.module('BlogExample', [])


app.controller 'TestController', ($scope)->
  console.log('aaaa')
  $scope.yourName = 422131
  console.log app


angular.bootstrap document, ["App"]
