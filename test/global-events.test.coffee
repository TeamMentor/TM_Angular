describe '| global-events',->
  browser = null                                                        # need to capture this object

  beforeEach ->
    module('TM_App')

    tm_angular_config =
      log_Events : true
      log_Urls   : true

    module ($provide)->
      $provide.constant('tm_angular_config', tm_angular_config)

  afterEach ->
    inject ($httpBackend)->
      $httpBackend.verifyNoOutstandingRequest()

  it 'httpInterceptor', (done)->
    inject ($http, $httpBackend, $rootScope, TM_API)->
      spyOn $rootScope, '$broadcast'

      $httpBackend.expectGET('/an/url').respond { it_is: 42 }

      $http.get('/an/url').success (data)->
        data.assert_Is  { it_is: 42 }

        using $rootScope.$broadcast.calls.all(), ->
          @.size().assert_Is 2
          @[0].args.assert_Is ['http_start']
          @[1].args.assert_Is ['http_end']
          done()

      $httpBackend.flush()

  it 'window.onpopstate', ->
    inject ($window, $rootScope)->
      (typeof $window.onpopstate).assert_Is 'function'
      $window.onpopstate.assert_Is window.onpopstate
      spyOn($rootScope, '$broadcast')
      $window.onpopstate()
      $window.onpopstate({})
      $window.onpopstate( path: '')
      $window.onpopstate( path: [ ])
      $window.onpopstate( path: [ {}])
      $window.onpopstate( path: [ { location: ''}])
      $window.onpopstate( path: [ { location:  pathname: null}])
      $rootScope.$broadcast.calls.count().assert_Is 0
      $window.onpopstate( path: [ { location:  pathname: '/aaaaa/bbbb'}])
      $rootScope.$broadcast.calls.count().assert_Is 1
      $rootScope.$broadcast.calls.all()[0].args.assert_Is [ 'pop_state', '/aaaaa/bbbb' ]


  it '$broadcast "test" (to be picked up by tm_angular_config.log_Events)', ->
    inject ($rootScope)->
      $rootScope.$broadcast 'test'

  it 'Raise keyup and keydown events' ,->
    inject ($rootScope)->
      $rootScope.$on 'keydown', (event, data)->
        data.type.assert_Is 'keydown'

      $rootScope.$on 'keyup', (event, data)->
        data.type.assert_Is 'keyup'

      body = angular.element(document.body)
      body.triggerHandler 'keydown'
      body.triggerHandler 'keyup'



