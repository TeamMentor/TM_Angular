describe '| misc tests', ->

  beforeEach ->
    module('TM_App')

  it 'testing events', ->
    inject ($controller, $rootScope)->
      $controller('Help_Controller', { $scope: {} })
