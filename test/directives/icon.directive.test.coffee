expect = chai.expect

describe '| directive | icon', ->
  beforeEach ()->
    module('TM_App')


  it '<icon/>',->
    inject ($compile,$rootScope)->
      scope       = $rootScope.$new();
      element_Raw = angular.element('<icon/>')
      element     = $compile(element_Raw)(scope)[0]
      scope.$digest()
      using element_Raw.find('span')[0], ->
        @.className.assert_Is 'icon-Default'

  it '<icon type="Java"/>',->
    inject ($compile,$rootScope)->
      element  = $compile('<icon type="Java"/>')({})
      $rootScope.$digest()
      using element.find('span')[0], ->
        @.className.assert_Is 'icon-Java'
        @.title.assert_Is 'Java'

  it '<icon class="Close"/>',->
    inject ($compile,$rootScope)->
      element  = $compile('<icon class="Close"/>')({})
      $rootScope.$digest()
      element.html().assert_Is '<span class="icon-Close"></span>'