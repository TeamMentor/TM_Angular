expect = chai.expect

describe '| directive | all-icons', ->
  beforeEach ()->
    module('TM_App')

  it '<show-all-icons/>',->
    inject ($compile,$rootScope)->
      element  = $compile('<show-all-icons/>')({})
      $rootScope.$digest()
      expect(element.find('span').length).to.be.above 60

  it '<show-all-icons with-titles/>',->
    inject ($compile,$rootScope)->
      element  = $compile('<show-all-icons with-titles />')({})
      $rootScope.$digest()
      expect(element.find('span').length).to.be.above 60