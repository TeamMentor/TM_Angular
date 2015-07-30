Jade_Components = require '../../src/API/Jade-Components'
async           = require 'async'

if not process.env.localProjectDir
  process.env.localProjectDir = __dirname.path_Combine '../../..'

describe '| API | Jade-Components |', ->

  jade_Components = new Jade_Components()

  expected_Components = ['alert_bad', 'alert_ok', 'article', 'filters', 'help_navigation',  'landing_bar',
                         'left_navigation', 'login_form', 'navigate_results', 'pagination', 'pwd_forgot_form',
                         'pwd_reset_form', 'result_article', 'result_saved_article','result_saved_search_term',
                         'result_search_term', 'results_delete_share','results_save_share','search_bar',
                         'search_result','sign_up_form', 'start_view', 'team_mentor_summary', 'user/articles',
                         'user/queries', 'user/queries_breadcrumbs','user/queries_history','user_panel']

  expected_Views      = ['about', 'alert_application', 'article', 'blank',
                         'curated_content', 'curated_content_article', 'docs','error',
                         "features", "index", "login", "main","navigate" ,
                         "new_user_onboard" ,"pwd_forgot" ,"pwd_reset" ,"pwd_sent" ,
                         "search" ,"sign_up" ,"terms_and_conditions" ,"user/queries", "user"]


  it 'constructor', ->
    using jade_Components, ->
      @.folder_Components.assert_Folder_Exists()
      @.folder_Components.folder_Name().assert_Is 'component'

  it 'components', ->
    using jade_Components, ->
      @.components().assert_Is expected_Components

  it 'component_Html (check one)', (done)->
    using jade_Components, ->
      @.component_Html expected_Components.first(), (html, $)->
        html.assert_Is_String()
        html.length.assert_Bigger_Than 0
        done()

  #it 'component_Html (check all)', (done)->
  #  @.timeout 5000
  #  check_Component = (name, next)->
  #    jade_Components.component_Html name, (html)->
  #      #console.log "#{name} : #{html.length}"
  #      html.length.assert_Bigger_Than 0
  #      html.assert_Is_Not 'Moved Temporarily. Redirecting to /error'
  #      next()

  #  async.each expected_Components, check_Component, done

  it 'views', ->
    using jade_Components, ->
      @.views().assert_Is expected_Views

  it 'view_Html (check one)', (done)->
    using jade_Components, ->
      @.view_Html expected_Views.first(), (html, $)->
        html.assert_Is_String()
        html.length.assert_Bigger_Than 0
        done()
