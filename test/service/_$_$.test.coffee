expect = chai.expect

describe '| services | Icon-Service', ->

  html    = '<div><h1 id="title">an title<h1><p>__{{text_1}}__</p><p>{{text_2}}</p></div>'
  $$      = null
  element = null
  scope   = null

  beforeEach ()->
    module('TM_App')
    inject ($injector, $compile, $rootScope)->
      $$ = $injector.get('$$')
      scope = $rootScope.$new()
      element = $compile(html)(scope)[0]
      scope.$digest()

  it '$$(element)', ->
    $$(element).innerText.assert_Is 'an title____'

  it '$attr, $html, $text, $scope', ->
    using $$(element), ->
      @.$attr().assert_Is class: 'ng-scope'
      @.$html().assert_Is '<h1 id="title">an title</h1><h1><p class="ng-binding">____</p><p class="ng-binding"></p></h1>'
      @.$text().assert_Is 'an title____'
      @.$scope().assert_Is scope

  it '$query', ->
    using $$(element).$query, ->
      @('h1').$html().assert_Is 'an title'
      @('p').$html().assert_Is '____'
      scope.text_1 = 'aaa'
      scope.$digest()
      @('p').$html().assert_Is '__aaa__'


  it '$query_All', ->
    scope.text_1 = 'aaa'
    scope.text_2 = 'bbb'
    scope.$digest()
    using $$(element).$query_All, ->
      @('p')[0].innerHTML.assert_Is '__aaa__'
      @('p')[1].innerHTML.assert_Is 'bbb'

  it '$click', ->
    #todo
