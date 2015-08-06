expect = chai.expect

describe '| directives | guest | login-form', ->

  element     = null
  element_Raw = null
  scope       = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($compile,$rootScope)->
      element_Raw = angular.element('<sign-up-form/>')
      element     = $compile(element_Raw)($rootScope.$new())[0]
      $rootScope.$digest()
      scope  =  element_Raw.find('div').eq(0).scope()

  it 'check html elements',->
    inject ($$)->
      using $$(element).$query,->
        @('.section .label' ).$html().assert_Is 'Sign Up'
        @('#error'          ).$attr().assert_Is id: 'error', 'ng-show': 'showErrorMessage()', class: 'section row ng-hide'
        @('#info'           ).$attr().assert_Is id: 'info' , 'ng-show': 'showInfoMessage()' , class: 'section row ng-hide'

        @('#sign-up-form'   ).$attr().assert_Is id: 'sign-up-form', role: 'form', 'ng-submit': 'signup()', class: 'ng-pristine ng-invalid ng-invalid-required ng-valid-email ng-valid-maxlength'

        #console.log @('#username'       ) .$attr()
        #@('form #username'  ) .$attr().assert_Is { class:'input-field' }
#@('#sign-up-form'   )

        #console.log 'a'
#@('form'       ).$attr().assert_Is                    id: 'login-form', class: 'ng-pristine ng-invalid ng-invalid-required ng-valid-maxlength'             , role: 'form', 'ng-submit': 'login()'
