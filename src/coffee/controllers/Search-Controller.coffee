app = angular.module('App')

app.controller 'Search_Controller', ($rootScope, $scope, TM_API)->

  $scope.map_Search_Queries = (data)->
    if data
      article_Ids = (result.id for result in data.results)

      TM_API.get_articles_parent_queries article_Ids, [] , (containers)->
        data.containers = containers
        $rootScope.$broadcast 'show-query-data', data

  $scope.submit = ()->
    TM_API.query_from_text_search $scope.text, (query_id)->
      TM_API.query_tree query_id, (data)->
        $scope.map_Search_Queries data



  #$scope.text = 'Gateways'
  #$scope.submit()