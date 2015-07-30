app = angular.module('TM_App')

String::upper_Case_First_Letter = ()->
  @.charAt(0).toUpperCase() + @.substr(1)

resolve_Directive_Name =  (name)->
  directive_Name = "";
  for segment,index in name.split('_')                                                # need to use camelcase for the directive name
    directive_Name += if index then segment.upper_Case_First_Letter() else segment
  directive_Name

map_Components =  (path, components)->
  for component in components
    do (component)->
      app.directive resolve_Directive_Name(component),  ->
        {  templateUrl: "/angular/jade-html/component#{path}/#{component}" }

root_Components   = [ 'alert_ok', 'alert_bad' , 'pwd_forgot_form', 'login_form','sign_up_form']
user_Components   = [ 'queries', 'queries_breadcrumbs', 'articles', 'article_box']
design_Components = [ 'all_icons']

map_Components ''       , root_Components
map_Components '/user'  , user_Components
map_Components '/design', design_Components



#components_Extra = [ { path: 'user/queries', name: 'queries'}]     # retrieve this from the server
#for component in components_Extra
#  do (component)->
#    app.directive resolve_Directive_Name(component.name), -> {  templateUrl: "/angular/jade-html/component/#{component.path}" }