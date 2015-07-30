describe '| directive | icon', ->
  beforeEach ()->
    module('TM_App')


  it '<icon/>',->
    inject ($compile,$rootScope)->
      scope       = $rootScope.$new();
      element_Raw = angular.element('<icon/>')
      element     = $compile(element_Raw)(scope)[0]
      scope.$digest()
      console.log element_Raw.html()
      console.log element_Raw
      using element_Raw.find('span')[0], ->
        @.className.assert_Is 'icon-Default'

  it '<icon type="Java"/>',->
    inject ($compile,$rootScope)->
      element  = $compile('<icon type="Java"/>')({})
      $rootScope.$digest()
      using element.find('span')[0], ->
        @.className.assert_Is 'icon-Java'
        @.title.assert_Is 'Java'

describe '| directive | all-icons', ->
  beforeEach ()->
    module('TM_App')

  it '<show-all-icons/>',->
    inject ($compile,$rootScope)->
      element  = $compile('<show-all-icons/>')({})
      console.log element.html()
      $rootScope.$digest()
      expect(element.find('span').length > 60).toEqual(true)

  it '<show-all-icons/>',->
    inject ($compile,$rootScope)->
      element  = $compile('<show-all-icons with-titles />')({})
      console.log element.html()
      $rootScope.$digest()
      expect(element.find('span').length > 60).toEqual(true)