expect = chai.expect

describe '| directives | guest | login-form', ->

  element     = null
  element_Raw = null
  scope       = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<login-form/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()
      scope  =  element_Raw.find('div').eq(0).scope()

  it 'check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('form'       ).$attr().assert_Is                    id: 'login-form', class: 'ng-pristine ng-invalid ng-invalid-required ng-valid-maxlength'             , role: 'form', 'ng-submit': 'login()'
        @('#username'  ).$attr().assert_Is  type: 'text'    , id: 'username'  , class: 'ng-pristine ng-untouched ng-invalid ng-invalid-required'                   , placeholder: 'Username', "ng-model": 'username', required: 'required'
        @('#password'  ).$attr().assert_Is  type: 'password', id: 'password'  , class: 'ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-maxlength', placeholder: 'Password', "ng-model": 'password', required: 'required', maxlength: '256'
        @('#btn-login' ).$attr().assert_Is  type: 'submit'  , id: 'btn-login'
        @('#pwd_forgot').$attr().assert_Is                    id: 'pwd_forgot', class: 'text-right'                                                                , href: 'pwd_forgot'

        @('#btn-login' ).innerHTML.assert_Is 'Login'
        @('#pwd_forgot').innerHTML.assert_Is 'Forgot your password?'

  it 'Confirm data binding of username and password', ->
    inject ($$)->
      using $$(element).$query,->
        expect(@('#username'  ).value).to.equal('')
        expect(@('#password'  ).value).to.equal('')
        scope.username = 'abc'
        scope.password = '123'
        expect(@('#username'  ).value).to.equal('')
        expect(@('#password'  ).value).to.equal('')
        scope.$digest()
        expect(@('#username'  ).value).to.equal('abc')
        expect(@('#password'  ).value).to.equal('123')

  it 'Click on Login Button (no error from server)', ()->
    inject ($$, $httpBackend)->

      $httpBackend.whenPOST('/json/user/login',{username:'abc', password:'123'}).respond ()->
        return [200, { result: 'Fail' }]

      using $$(element).$query,->
        scope.username = 'abc'
        scope.password = '123'

        @('#btn-login' ).click()
        $httpBackend.flush()

        scope.errorMessage.assert_Is 'Login Failed (Server error)'

  it 'Click on Login Button (with error from server)', ()->
    inject ($$, $httpBackend)->

      $httpBackend.whenPOST('/json/user/login', {}).respond ()->
        return [200, { result: 'Fail', viewModel: errorMessage : 'server error message' }]

      using $$(element).$query,->
        @('#btn-login' ).click()
        $httpBackend.flush()
        scope.errorMessage.assert_Is 'server error message'