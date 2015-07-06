log = console.log

expected_Get = 'http://localhost:12345/angular/api/auto-complete?term=xss - xss'
#console.log $httpBackend.expectGET('http://localhost:12345/angular/api/auto-complete?term=xss - xss').respond '[]'
#controller = app.controller('Search_Controller')

describe '| controllers | Search-Controller.test',->
  beforeEach ->
    module('App')

  it 'Controller calls TM_API Service ok', (done)-> inject ($controller, $injector,  $httpBackend)->

    scope = {}
    $httpBackend.expectGET(expected_Get).respond response = data: 'aaaa'

    $controller('Search_Controller', { $scope:scope })
    scope.get_Words 'xss - xss', ()->
      console.log scope.words
      done()

    $httpBackend.flush();