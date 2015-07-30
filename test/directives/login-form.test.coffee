describe '| directive | login-form', ->

  element     = null
  element_Raw = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      scope       = $rootScope.$new();
      element_Raw = angular.element('<login-form/>')
      element     = $compile(element_Raw)(scope)[0]
      scope.$digest()

  it 'check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('#username'  ).$attr().assert_Is { type: 'text',     id: 'username'  , class: 'ng-pristine ng-untouched ng-valid'                                         , placeholder: 'Username', "ng-model": 'username',                                        }
        @('#password'  ).$attr().assert_Is { type: 'password', id: 'password'  , class: 'ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-maxlength', placeholder: 'Password', "ng-model": 'password', required: 'required', maxlength: '256' }
        @('#pwd_forgot').$attr().assert_Is { id: 'pwd_forgot', href: 'pwd_forgot'}