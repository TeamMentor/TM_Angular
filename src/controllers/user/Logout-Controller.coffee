angular.module('TM_App')
.controller 'Logout_Controller', (TM_API,$window)->
  TM_API.logout (callback) ->
    $window.location.href='/angular/guest/home'