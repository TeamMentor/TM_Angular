expect = chai.expect

describe '| services | Icon-Service', ->

  icon_Service  = null
  test_Key      = '.NET'
  test_Key_Html = '<span class="icon-Net" title=".NET"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></span>'

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
      expect(@.element_Html('aaa')).to.contain('icon-Default')

  it 'simple_Element', ->
    using icon_Service, ->
      @.simple_Element(     'icon-Close', 'Close')[0].outerHTML.assert_Is '<span class="icon-Close" title="Close"></span>'
      @.simple_Element(     'icon-Close', null   )[0].outerHTML.assert_Is '<span class="icon-Close"></span>'
      @.simple_Element_Html('icon-Close', 'Close').assert_Is '<span class="icon-Close" title="Close"></span>'
      @.simple_Element_Html('icon-Close', null   ).assert_Is '<span class="icon-Close"></span>'