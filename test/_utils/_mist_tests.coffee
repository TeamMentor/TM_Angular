describe 'misc tests', ->

  beforeEach ->
    module('TM_App')

  it 'testing events', ->
    inject ($controller)->
      $controller('Help_Controller', { $scope: {} })