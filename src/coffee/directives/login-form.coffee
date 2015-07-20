app = angular.module('App')

app.directive 'loginForm', ($parse, $timeout)->
  return {
              templateUrl: '/angular/jade-html/component/login_form'
         }