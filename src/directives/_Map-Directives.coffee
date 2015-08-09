


class Map_Directives
  constructor: (options)->
    @.app                   = options.app

    #ideally these should be inside the ../constants/routes.constants.coffee file
    @.design_Components     = [ 'all_icons', 'events']
    @.guest_Components      = [ 'login_form', 'pwd_forgot_form', 'sign_up_form', 'pwd_reset_form']
    @.navigation_Components = [ 'landing_bar', 'left_navigation']
    @.user_Components       = [ 'active_filter', 'article_box', 'articles', 'breadcrumbs', 'filters','filters_active', 'pagination', 'queries', 'queries_history', 'results', 'search_bar']
    @.root_Components       = [ 'alert_ok', 'alert_bad' , 'article', 'help_navigation']

  resolve_Directive_Name:  (name)->
    directive_Name = "";
    for segment,index in name.split('_')                                                # need to use camelcase for the directive name
      directive_Name += if index then segment.upper_Case_First_Letter() else segment
    directive_Name

  map_Components:  (path, components)=>
    for component in components
      do (component)=>
        @.app.directive @.resolve_Directive_Name(component),  ->
          {  templateUrl: "/angular/jade-html/component#{path}/#{component}" }

  map_All: =>
    @.map_Components ''             , @.root_Components
    @.map_Components '/design'      , @.design_Components
    @.map_Components '/guest'       , @.guest_Components
    @.map_Components '/navigation'  , @.navigation_Components
    @.map_Components '/user'        , @.user_Components



String::upper_Case_First_Letter = ()->          # required by Map_Directives
  @.charAt(0).toUpperCase() + @.substr(1)

#app.config (routes_Names)->        # unfortunately doing it here doesn't see to work
new Map_Directives(app: angular.module('TM_App'))
      .map_All()
