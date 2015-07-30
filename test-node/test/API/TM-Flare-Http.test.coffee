TM_Flare_Http = require '../../src/API/TM-Flare-Http'

describe '| API | TM-Flare-Http |', ->
  flare =  null

  before ->
    flare = new TM_Flare_Http()

  it 'constructor',->
    using new TM_Flare_Http(), ->
      @.server.assert_Is 'http://localhost:12345'

  it 'component', (done)->
    flare.component 'login_form', (html,$)->
      #$('input').attr().assert_Is { type: 'text', id: 'username',placeholder: 'Username', 'ng-model': 'username' }
      done()

  it 'open', (done)->
    flare.open '/', (html, $)->
      html.assert_Is     'Moved Temporarily. Redirecting to /index.html'
      $.html().assert_Is 'Moved Temporarily. Redirecting to /index.html'
      done()