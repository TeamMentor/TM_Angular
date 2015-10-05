expect = chai.expect;

describe '| controllers | Article-Box-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')

  beforeEach ->
    inject ($controller, $rootScope)->
      scope       = $rootScope.$new()
      scope.article =
        technology : 'Java'
        type       : 'AAAA'
        phase      : 'Design'
      $controller 'Article_Box_Controller', { $scope: scope}


  it 'constructor', ()->
    inject ($$)->
      unwrap_Variable = (scope_Variable)->
        $$(angular.element(scope[scope_Variable].$$unwrapTrustedValue()))


      unwrap_Variable('icon_Technology')[0].className.assert_Is 'icon-Java'
      unwrap_Variable('icon_Type'      )[0].className.assert_Is 'icon-Default'
      unwrap_Variable('icon_Phase'     )[0].className.assert_Is 'icon-Design'
