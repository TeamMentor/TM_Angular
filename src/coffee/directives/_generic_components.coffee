app = angular.module('TM_App')

components = [ 'alert_ok', 'alert_bad' , 'pwd_forgot_form', 'login_form','sign_up_form']

for component in components
  do (component)->
    directive_Name = "";
    for segment,index in component.split '_'                                                # need to use camelcase for the directive name
      directive_Name += if index then segment.upper_Case_First_Letter() else segment

    app.directive directive_Name,  -> {  templateUrl: "/angular/jade-html/component/#{component}" }