angular.module('TM_App')
.controller 'Search_Controller', ($sce, $scope, TM_API)->

  TM_API.popular_Search (search)->
    angular.forEach search, (searchItem)->
      searchItem.url = '/search?text=' + searchItem.title
    $scope.top_Search = search
