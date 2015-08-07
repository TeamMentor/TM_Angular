expect = chai.expect

describe '| directive | show-component', ->

  $compile   = null
  $location  = null
  $rootScope = null

  beforeEach ()->
    module('TM_App')
    inject (_$compile_, _$location_)->
      $compile   = _$compile_
      $location  = _$location_

  create_Element = (path)->
    scope            = {}
    raw_Html         = '<div><show-component/></div>'
    $location.$$path = path  if path or path is null
    $compile(angular.element(raw_Html))(scope)[0]

  it '<show-component/> (no path)',->
    create_Element().outerHTML
                    .assert_Is '<div class="ng-scope"><show-component></show-component></div>'


  it '<show-component/> (invalid path)',->
    create_Element(null).outerHTML
                        .assert_Is '<div class="ng-scope"><show-component></show-component></div>'

  it '<show-component/> (valid component in path)',->
    create_Element('/icon').outerHTML
                           .assert_Is '<div class="ng-scope"><icon class="ng-scope"><span class="icon-Default" title="Default"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span></span></icon></div>'

  it '<show-component/> (invalid component in path)',->
    create_Element('/aaaaaa').outerHTML
                             .assert_Is '<div class="ng-scope"><aaaaaa class="ng-scope"></aaaaaa></div>'