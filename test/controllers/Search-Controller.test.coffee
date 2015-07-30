expect = chai.expect;

describe '| controllers | Search-Controller.test',->
  scope = null

  beforeEach ->
    module('TM_App')
    inject ($controller, $rootScope)->
      scope = $rootScope.$new()
      $controller('Search_Controller', { $scope: scope })

  it 'constructor', ()->

      expect(scope.map_Search_Queries).to.be.an('function')
      expect(scope.submit            ).to.be.an('function')
      expect(scope.$$listeners['query_data'][0]).to.be.an('function')

#expected_Get = 'http://localhost:12345/angular/api/auto-complete?term=xss - xss'
#console.log $httpBackend.expectGET('http://localhost:12345/angular/api/auto-complete?term=xss - xss').respond '[]'
#controller = app.controller('Search_Controller')

#  it 'Controller calls TM_API Service ok', (done)-> inject ($controller, $injector,  $httpBackend)->
#
#    scope = {}
#    $httpBackend.expectGET(expected_Get).respond response = data: 'aaaa'
#
#    $controller('Search_Controller', { $scope:scope })
#    scope.get_Words 'xss - xss', ()->
#      console.log scope.words
#      done()
#
#    $httpBackend.flush();