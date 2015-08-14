describe '| global-events',->
  browser = null                                                        # need to capture this object

  beforeEach ->
    module('TM_App')

  it 'check hooks' ,->
    inject ($rootScope)->
      $rootScope.$on 'keydown', (event, data)->
        data.type.assert_Is 'keydown'


      $rootScope.$on 'keyup', (event, data)->
        data.type.assert_Is 'keyup'

      body = angular.element(document.body)
      body.triggerHandler 'keydown'
      body.triggerHandler 'keyup'

  it 'check hooks' ,->
    inject ($rootScope)->
      $rootScope.$broadcast 'test', 'aaaaaa1923'