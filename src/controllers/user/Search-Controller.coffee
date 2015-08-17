angular.module('TM_App')
.controller 'Search_Controller', ($sce, $scope, TM_API)->

  TM_API.popular_Search (search)->
    baseUrl = "/angular/user/index?text="
    angular.forEach search, (searchItem)->
      searchItem.url = baseUrl + searchItem.title
    $scope.top_Search = search
