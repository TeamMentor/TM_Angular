expect = chai.expect;

describe '| controllers | Login-Controller.test',->
  scope    = null
  window   = location : href : '....'

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope, TM_API)->
      scope = $rootScope.$new()
      $controller('Login_Controller', { $scope: scope,  TM_API: TM_API , $window: window })

  it 'Check setup', ()->
    expect(scope.login           ).to.be.an('function')
    expect(scope.showErrorMessage).to.be.an('function')
    expect(scope.showInfoMessage ).to.be.an('function')

  it 'login (Server error)', (done)->
    inject ($httpBackend)->

      $httpBackend.whenPOST('/json/user/login',{}).respond ()->
        return [200, { result: 'Error' }]

      scope.$watch 'errorMessage', (value)->
        if value
          value.assert_Is 'Login Failed (Server error)'
          done()

      scope.login()
      $httpBackend.flush()

  it 'login (OK)', (done)->
    inject ($httpBackend,$timeout)->

      $httpBackend.whenPOST('/json/user/login',{}).respond ()->
        return [200, { result: 'OK' }]

      scope.login()
      $httpBackend.flush()
      window.assert_Is location : href: '....'
      $timeout.flush();
      scope.infoMessage.assert_Is 'Login OK'
      window.assert_Is location : href: '/angular/user/main'
      done()

  it 'showErrorMessage', ->
    scope.errorMessage = 'abc123'
    scope.showErrorMessage().assert_Is 'abc123'

  it 'showInfoMessage', ->
    scope.infoMessage = '123abc'
    scope.showInfoMessage().assert_Is '123abc'


