app = angular.module('App')

app.directive 'leftNavigation', ($parse, $timeout)->
  return {
              templateUrl: '/angular/jade-html/component/left_navigation'
         }