angular.module('TM_App')
.controller 'Logout_Controller', (TM_API,$window)->
  TM_API.logout (callback) ->
    $window.sessionStorage["userInfo"] = null;
    $window.sessionStorage.clear()
    $window.location.href='/angular/guest/home'