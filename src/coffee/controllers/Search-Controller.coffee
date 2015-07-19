app = angular.module('App')

app.controller 'Search_Controller', ($rootScope, $scope, TM_API)->
  console.log " IN Search_Controller"
  $scope.text = 'xss....'

  $scope.submit = ()->
    console.log "IN Search_Controller submit"
    TM_API.query_from_text_search $scope.text, (query_id)->
      console.log query_id
      TM_API.query_tree query_id, (data)->
        console.log data
        if data
          data.href = '#/navigate/'
          console.log 'broadcasting: ' + 'New_Results_Data'
          $rootScope.$broadcast('New_Results_Data', data);



  #$scope.submit()