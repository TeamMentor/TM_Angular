app = angular.module('App')
app.directive 'searchBar', ($parse, $timeout)->
  return {
            templateUrl: '/angular/jade-html/component/search_bar'
         }