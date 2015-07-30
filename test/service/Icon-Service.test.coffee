describe '| services | Icon-Service', ->

  icon_Service  = null
  test_Key      = '.Net'
  test_Key_Html = '<span class="icon-Net" title=".Net"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></span>'

  beforeEach ()->
    module('TM_App')
    inject ($injector)->
      icon_Service = $injector.get('icon_Service')

  it 'Check service injection',->
    _icon_Service = icon_Service              # pin value so that we can check it below
    inject (icon_Service)->
      icon_Service.assert_Is _icon_Service

  it 'constructor', ->
    using icon_Service, ->
      @.mappings.keys().size().assert_Is 26

  it 'element', ->
    using icon_Service, ->
      @.element(test_Key)[0]
         .outerHTML
         .assert_Is test_Key_Html
      @.element('aaa')[0].className.assert_Is 'icon-Default'

  it 'element_Html', ->
    using icon_Service, ->
      @.element_Html(test_Key).assert_Is test_Key_Html
      expect(@.element_Html('aaa')).toContain('icon-Default')