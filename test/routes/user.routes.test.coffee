describe '| routes | user.routes' , ->
  beforeEach ->
    module('TM_App')

  it '/index', ->
    inject ($state,$rootScope) ->
      $state.go 'index'
      $rootScope.$digest()
      $state.current.assert_Is 	{ url: '/index', templateUrl: '/angular/jade-html/views/user/index', name: 'index' }

  fit '/index', ->
    inject ($state,$rootScope, $location) ->
      $state.go 'index_query_id'
      $rootScope.$digest()
      $state.current.assert_Is 	{ url: '/index/:query_Id', templateUrl: '/angular/jade-html/views/user/index', name: 'index_query_id' }

      $location.path('/index/an-query-id')
      $rootScope.$digest()

      inject ($controller, $rootScope, query_Service, $httpBackend)->
        spyOn query_Service, 'load_Query'
        scope = $rootScope.$new()
        $controller('Index_Controller', { $scope: scope })
        $rootScope.$digest()
        #$httpBackend.flush()

        query_Service.load_Query.calls.all()[0].args.assert_Is ['query-6234f2d47eb7', 'an-query-id']

      #inject ($compile,$rootScope)->
      #  element_Raw = angular.element('<index/>')
      #  scope       = $rootScope.$new()
      #  element     = $compile(element_Raw)(scope)[0]
      #  $rootScope.$digest()
      #  console.log element_Raw
      #  scope = element_Raw.find('div').eq(0).scope()
      #  console.log scope