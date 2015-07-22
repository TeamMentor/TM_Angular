app = angular.module('TM_App')
app.directive 'searchBar', ($parse, $timeout)->
  return {
            templateUrl: '/angular/jade-html/component/search_bar'
         }