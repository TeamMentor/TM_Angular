Jade_Components = require '../../src/API/Jade-Components'
async           = require 'async'

if not process.env.localProjectDir
  process.env.localProjectDir = __dirname.path_Combine '../../..'

describe '| API | Jade-Components |', ->

  jade_Components = new Jade_Components()

  expected_Components = ['alert_bad', 'alert_ok', 'gateway_navigation', 'help_navigation',
                         'result_saved_article','result_saved_search_term',
                         'result_search_term', 'results_delete_share',
                         'search_result', 'start_view', 'user_panel'
                          #design
                         'design/all_icons', 'design/events'
                          #guest
                         'guest/login_form'
                         'guest/pwd_forgot_form'
                         'guest/pwd_reset_form'
                         'guest/sign_up_form'
                          #navigation
                         'navigation/landing_bar'
                         'navigation/left_navigation'
                          #user
                         'user/article_box', 'user/article','user/articles',
                         'user/breadcrumbs', 'user/customer_search_bar'
                         'user/filters','user/filters_active', 'user/found_issue'
                         'user/loading_bar', 'user/modal'
                         'user/pagination'
                         'user/queries', 'user/queries_history',
                         'user/results', 'user/recommendations', 'user/search_bar']

  expected_Views      = ['article_editor', 'article_view_editor_option',
                         'curated_content', 'docs'
                         'new_user_onboard' ,'pwd_reset' ,'pwd_sent' ,
                         'terms_and_conditions', 'user',
                         # guest
                         'guest/about','guest/features','guest/home','guest/login', 'guest/pwd_forgot', 'guest/sign_up',
                         # user
                         'user/article','user/article_box', 'user/error','user/guides', 'user/index', 'user/main']


  it 'constructor', ->
    using jade_Components, ->
      @.folder_Components.assert_Folder_Exists()
      @.folder_Components.folder_Name().assert_Is 'component'

  it 'components (check expected)', ->
    using jade_Components, ->
      for component in @.components()
        expected_Components.assert_Contains component
      @.components().assert_Contains expected_Components
      expected_Components.assert_Contains @.components()

  it 'component_Html (check one)', (done)->
    using jade_Components, ->
      @.component_Html expected_Components.first(), (html, $)->
        html.assert_Is_String()
        html.length.assert_Bigger_Than 0
        done()

  it 'views', ->
    using jade_Components, ->
      @.views().assert_Contains expected_Views

  it 'view_Html (check one)', (done)->
    using jade_Components, ->
      @.view_Html expected_Views.first(), (html, $)->
        html.assert_Is_String()
        html.length.assert_Bigger_Than 0
        done()
