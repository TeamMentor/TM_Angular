app = angular.module('App')

app.controller 'Search_Controller', ($rootScope, $scope, TM_API)->
  #$scope.text = 'xss'

  $scope.submit = ()->
    TM_API.query_from_text_search $scope.text, (query_id)->
      console.log query_id
      TM_API.query_tree query_id, (data)->
        if data
          data.href = '#/navigate/'
          $rootScope.$broadcast('New_Results_Data', data);


  #$scope.submit()