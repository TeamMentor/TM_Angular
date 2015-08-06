expect = chai.expect;

describe '| controllers | guest | Signup-Controller',->
  scope    = null
  window   = location : href : '....'

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Signup_Controller', { $scope: scope, $window: window })

  it 'constructor',->
    expect(scope.signup          ).to.be.an 'function'
    expect(scope.showErrorMessage).to.be.an 'function'
    expect(scope.showInfoMessage ).to.be.an 'function'

  it 'signup (Server error)', ->
    inject ($httpBackend)->
      $httpBackend.whenPOST('/json/user/signup')
                  .respond null
      scope.signup()
      scope.$digest()
      expect(scope.infoMessage).to.equal '...Signing  up ...'
      expect(scope.errorMessage).to.equal null
      $httpBackend.flush()
      expect(scope.infoMessage).to.equal null
      expect(scope.errorMessage).to.equal 'Signup Failed (Server error)'

  it 'signup (failed with error message)', ->
    inject ($httpBackend)->
      $httpBackend.whenPOST('/json/user/signup')
                  .respond
                      result: 'Failed' ,
                      viewModel:
                        errorMessage : 'an error message'
      scope.signup()
      scope.$digest()
      $httpBackend.flush()
      expect(scope.infoMessage).to.equal null
      expect(scope.errorMessage).to.equal 'an error message'

  it 'signup (OK)', ->
    inject ($httpBackend, $timeout)->
      $httpBackend.whenPOST('/json/user/signup')
                  .respond
                      result: 'OK'
      scope.signup()
      scope.$digest()
      $httpBackend.flush()
      expect(scope.infoMessage).to.equal 'Signup OK'
      expect(scope.errorMessage).to.equal null
      window.assert_Is location : href: '....'
      $timeout.flush();
      window.assert_Is location : href: '/angular/user/main'


  it 'showErrorMessage', ->
    scope.errorMessage = 'abc123'
    scope.showErrorMessage().assert_Is 'abc123'

  it 'showInfoMessage', ->
    scope.infoMessage = '123abc'
    scope.showInfoMessage().assert_Is '123abc'