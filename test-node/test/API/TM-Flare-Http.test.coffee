TM_Flare_Http = require '../../src/API/TM-Flare-Http'

describe '| API | TM-Flare-Http |', ->
  flare =  null

  before ->
    flare = new TM_Flare_Http()

  it 'constructor',->
    using new TM_Flare_Http(), ->
      @.config_File          .assert_File_Exists()
      @.config               .assert_Is_Object()
      @.config.keys()        .assert_Is ['tm_design', 'tm_graph', 'hubspot', 'piwikAnalytics', 'anonymousService']
      @.config.tm_design.port.assert_Is 12345
      @.config.tm_graph.port .assert_Is 12346
      @.server               .assert_Is 'http://localhost:12345'

  it 'component', (done)->
    flare.component 'login_form', (html,$)->
      #$('input').attr().assert_Is { type: 'text', id: 'username',placeholder: 'Username', 'ng-model': 'username' }
      done()

  it 'open', (done)->
    flare.open '/', (html, $)->
      html.assert_Is     'Moved Temporarily. Redirecting to /jade'
      $.html().assert_Is 'Moved Temporarily. Redirecting to /jade'
      done()