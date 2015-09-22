expect = chai.expect;

describe '| controllers | guest | Pwd-Forgot-Controller',->
  scope    = null
  #window   = location : href : '....'

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Pwd_Forgot_Controller', { $scope: scope, $window: window })

  it 'constructor',->
    expect(scope.get_Password   ).to.be.an 'function'
    expect(scope.showInfoMessage).to.be.an 'function'

  it 'get_Password (valid server response)',->
    inject ($httpBackend)->
      $httpBackend.whenPOST('/jade/json/user/pwd_reset')
                  .respond message : 'an message'
      scope.get_Password()
      scope.$digest()
      scope.infoMessage.assert_Is '...sending request ...'
      $httpBackend.flush()
      scope.infoMessage.assert_Is 'an message'

  it 'get_Password (bad server response)',->
    inject ($httpBackend)->
      $httpBackend.whenPOST('/jade/json/user/pwd_reset')
                  .respond null
      scope.get_Password()
      scope.$digest()
      $httpBackend.flush()
      expect(scope.infoMessage).to.equal undefined

  it 'showInfoMessage', ->
    scope.infoMessage = 'aaa'
    scope.showInfoMessage().assert_Is 'aaa'