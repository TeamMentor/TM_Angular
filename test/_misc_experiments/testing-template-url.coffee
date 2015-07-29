expect = chai.expect;

app = angular.module('TM_App')

app.directive "test", ()->
  templateUrl:"some.html",
  replace    :true


describe '|  testing | templateUrl',->
  element = null

  beforeEach ->
    module('TM_App')

  beforeEach ->
    inject ($compile,$rootScope, $templateCache)->
      $templateCache.put "some.html", "<div>hello {{name}}</div>"
      scope       = $rootScope.$new();
      element     = $compile('<test/>')(scope);
      scope.name = 'John'
      scope.$digest()

  it "has hello", ()->
    expect(element.text()      ).to.equal 'hello John'
    expect(element[0].outerHTML).to.equal '<div class="ng-binding">hello John</div>'


###  doesn't work anymore due to the global mapping of the directive via the $templateCache

describe '|  testing | search-bar (with simple $httpBackend)',->
  element = null

  beforeEach ->
    module('TM_App')

  beforeEach ->
    inject ($httpBackend)->
      expected_Get = '/angular/jade-html/component/search_bar'
      $httpBackend.expectGET(expected_Get)
                  .respond '<div>hello {{name}}</div>'

  beforeEach ->
    inject ($compile,$rootScope, $httpBackend)->
      scope       = $rootScope.$new();
      element     = $compile('<search-bar/>')(scope);
      scope.name = 'John'
      $httpBackend.flush()
      scope.$digest()

  it "has hello", ()->

    expect(element.text()      ).to.equal 'hello John'
    expect(element[0].outerHTML).to.equal '<search-bar class="ng-scope"><div class="ng-binding">hello John</div></search-bar>'

###

describe '|  testing | search-bar (with valid searchbar via $templateCache)',->
  element = null

  beforeEach ->
    module('TM_App')

  beforeEach ->
    inject ($templateCache)->
      $templateCache.put '/angular/jade-html/component/search_bar' , '<!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div ng-controller="Login_Controller"><section class="row__label"><div class="label">Login</div></section><section ng-show="showErrorMessage()" class="row"><div role="alert" class="alert alert-bad"><div id="message"><span class="alert-icon">!</span><span class="alert-text">Error:  {{errorMessage}}</span></div></div></section><section ng-show="showInfoMessage()" class="row"><div role="alert" class="alert alert-ok"><div id="message"><span class="alert-icon">|</span><span class="alert-text">Info:  {{infoMessage}}</span></div></div></section><section class="row"><form id="login-form" role="form" ng-submit="login()"><div class="input-field"><label>Username</label><input type="text" id="username" placeholder="Username" ng-model="username"/></div><div class="input-field"><label for="password">Password</label><input type="password" id="password" placeholder="Password" ng-model="password" required="required" maxlength="256"/></div><div class="button-field"><button type="submit" id="btn-login" class="full-width">Login</button></div><div class="button-field"><a href="forgot_pwd" class="button full-width btn-minor">Get Password</a></div></form></section></div>'

  beforeEach ->
    inject ($compile,$rootScope, $httpBackend)->
      scope       = $rootScope.$new();
      element     = $compile('<search-bar/>')(scope);
      scope.name = 'John'
      scope.$digest()

  it "has hello", ()->
    expect(element.text()).to.equal('Login!Error:  |Info:  UsernamePasswordLoginGet Password')