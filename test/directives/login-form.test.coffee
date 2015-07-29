#login_form_template = '<!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div ng-controller="Login_Controller"><section class="row__label"><div class="label">Login</div></section><section ng-show="showErrorMessage()" class="row"><div role="alert" class="alert alert-bad"><div id="message"><span class="alert-icon">!</span><span class="alert-text">Error:  {{errorMessage}}</span></div></div></section><section ng-show="showInfoMessage()" class="row"><div role="alert" class="alert alert-ok"><div id="message"><span class="alert-icon">|</span><span class="alert-text">Info:  {{infoMessage}}</span></div></div></section><section class="row"><form id="login-form" role="form" ng-submit="login()"><div class="input-field"><label>Username</label><input type="text" id="username" placeholder="Username" ng-model="username"/></div><div class="input-field"><label for="password">Password</label><input type="password" id="password" placeholder="Password" ng-model="password" required="required" maxlength="256"/></div><div class="button-field"><button type="submit" id="btn-login" class="full-width">Login</button></div><div class="button-field"><br/><a id="pwd_forgot" href="pwd_forgot">Get Password</a></div></form></section></div>'

describe '| directive | login-form', ->

  element     = null
  element_Raw = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    #inject ($templateCache)->

      #$templateCache.put '/angular/jade-html/component/login_form', login_form_template

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