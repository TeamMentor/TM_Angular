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

  it 'Check html elements',->
    inject ($$)->

      using $$(element).$query,->
        @('.section'        ).$attr().assert_Is class : 'section row__label'
        @('div'             ).$attr().assert_Is { 'ng-controller': 'Signup_Controller', class: 'ng-scope' }
        @('div .section h4' ).$html().assert_Is 'Sign Up'
        @('#error .section' ).$attr().assert_Is 'ng-show': 'showErrorMessage()', class: 'section row ng-hide'
        @('#info .section'  ).$attr().assert_Is 'ng-show': 'showInfoMessage()' , class: 'section row ng-hide'

        @('#sign-up-form'   ).$attr().assert_Is id: 'sign-up-form', role: 'form', 'ng-submit': 'signup()', class: 'access-form ng-pristine ng-invalid ng-invalid-required ng-valid-email ng-valid-maxlength'

        check_Field = (values)=>                      # this helps to see what field is missing
          values['ng-model'] = values.id
          values.required    = 'required' if values.class.contains 'ng-invalid-required'
          attrs = @('#' + values.id).$attr()
          #attrs.keys().assert_Is values.keys()
          for key in attrs.keys()
            expect(values.keys()).to.contain(key)
            expect(values[key]).to.equal attrs[key]
          for key in values.keys()
            expect(attrs.keys()).to.contain(key)

        class_Default      = 'ng-pristine ng-untouched'
        class_Required     = class_Default  + ' ng-invalid ng-invalid-required'
        class_Not_Required = class_Default  + ' ng-valid ng-valid-maxlength'
        class_Max_Length   = class_Required + ' ng-valid-maxlength'
        class_Email        = class_Default  + ' ng-valid-email ng-invalid ng-invalid-required ng-valid-maxlength'

        check_Field id: 'username'        , type: 'text'    , placeholder: 'Username'       , class: class_Required
        check_Field id: 'email'           , type: 'email'   , placeholder: 'Email Address'  , class: class_Email       , maxlength: '256'
        check_Field id: 'password'        , type: 'password', placeholder: 'Password'       , class: class_Max_Length  , maxlength: '256'
        check_Field id: 'confirmpassword' , type: 'password', placeholder: 'Password'       , class: class_Max_Length  , maxlength: '256'
        check_Field id: 'firstname'       , type: 'text'    , placeholder: 'First Name'     , class: class_Max_Length  , maxlength: '100'
        check_Field id: 'lastname'        , type: 'text'    , placeholder: 'Last Name'      , class: class_Max_Length  , maxlength: '100'
        check_Field id: 'company'         , type: 'text'    , placeholder: 'Company'        , class: class_Not_Required, maxlength: '100'
        check_Field id: 'title'           , type: 'text'    , placeholder: 'Job/Title'      , class: class_Not_Required, maxlength: '100'
        check_Field id: 'country'         , type: 'text'    , placeholder: 'Country'        , class: class_Max_Length  , maxlength: '100'
        check_Field id: 'state'           , type: 'text'    , placeholder: 'State'          , class: class_Not_Required, maxlength: '100'

        @('.conditions').$text().assert_Is 'By signing up, you agree to our Terms and Conditions. '

        @('#btn-sign-up').$attr().assert_Is type: 'submit', id: 'btn-sign-up', class: 'full-width'

  it 'Check form submition',->
    inject ($$, $httpBackend)->

      $httpBackend.whenPOST('/json/user/signup')
                  .respond (method, url, params)->
                      expected_Params =
                        username           : 'username'
                        password           : 'password'
                        'confirm-password' : 'confirmpassword'
                        email              : 'email'
                        firstname          : 'firstname'
                        lastname           : 'lastname'
                        company            : 'company'
                        title              : 'title'
                        country            : 'country'
                        state              : 'state'

                      JSON.parse(params).assert_Is expected_Params

                      return [ 200, { result: 'OK' } ]
      using $$(element).$query,->
        check_Value = (id, value)=>
          @('#' + id).value.assert_Is value

        fields = ['username', 'email', 'password','confirmpassword','firstname','lastname','company','title','country','state']

        scope[field]=field        for field in fields      # assign all fields with a value

        check_Value(field, '')    for field in fields  # confirm that there are no values before $digest()
        scope.$digest()
        check_Value(field, field) for field in fields  # confirm that value is there after $digest()

        @('#btn-sign-up').click()

        $httpBackend.flush()

        scope.infoMessage.assert_Is 'Signup OK'