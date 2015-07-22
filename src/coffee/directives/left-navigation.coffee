app = angular.module('TM_App')

app.directive 'leftNavigation', ($parse, $timeout)->
  return {
              templateUrl: '/angular/jade-html/component/left_navigation'
         }