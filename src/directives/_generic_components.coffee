app = angular.module('TM_App')

#app.config ()->
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

design_Components     = [ 'all_icons']
guest_Components      = [ 'login_form', 'pwd_forgot_form', 'sign_up_form', 'pwd_reset_form']
navigation_Components = [ 'landing_bar', 'left_navigation']
user_Components       = [ 'active_filter', 'article_box', 'articles', 'breadcrumbs', 'filters','filters_active', 'pagination', 'queries', 'queries_history', 'results', 'search_bar']
root_Components       = [ 'alert_ok', 'alert_bad' , 'article', 'help_navigation']

map_Components ''             , root_Components
map_Components '/design'      , design_Components
map_Components '/guest'       , guest_Components
map_Components '/navigation'  , navigation_Components
map_Components '/user'        , user_Components




#components_Extra = [ { path: 'user/queries', name: 'queries'}]     # retrieve this from the server
#for component in components_Extra
#  do (component)->
#    app.directive resolve_Directive_Name(component.name), -> {  templateUrl: "/angular/jade-html/component/#{component.path}" }