expect = chai.expect

describe '| services | TM-API', ->

  tm_API  = null

  beforeEach ()->
    module('TM_App')
    inject ($injector)->
      tm_API = $injector.get('TM_API')

  afterEach ->
    inject ($httpBackend)->
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()

  it 'constructor', ->
    using tm_API, ->
      check_Are_Functions =  (names)=>
        for name in names
          #console.log name
          expect(@[name]  ).to.be.an 'function'

      check_Are_Functions ['get_Words', 'query_from_text_search' ,
                           'get_articles_parent_queries',
                           'docs_Library' , 'docs_Page'
                           'article',
                           'login', 'signup', 'pwd_reset' ]
      @.cache_Query_View_Model.assert_Is {}
      @.cache_Articles        .assert_Is {}

  it 'get_Words', ->
    inject ($httpBackend)->
      $httpBackend.expectGET('/angular/api/auto-complete?term=xss').respond { aaa: 'a', bbb: 'b' }

      using tm_API, ->
        @.get_Words 'xss', (data)->
            data.assert_Is ['aaa', 'bbb']     # test 'callback' mode
         .then (data)->
            data.assert_Is ['aaa', 'bbb']     # test 'promise' mode

        $httpBackend.flush()

  it 'query_from_text_search', ->
    inject ($httpBackend)->

      $httpBackend.expectGET('/api/search/query_from_text_search/xss').respond { data: 42 }

      using tm_API, ->
        @.query_from_text_search 'xss', (data)->
          data.assert_Is { data: 42 }

        $httpBackend.flush()


  it 'get_articles_parent_queries', ->

    parent_Queries =
      queries :
        'query-parent_1':
            id            : 'id_1'
            title         : 'title_1'
            parent_Queries: [ 'query-6234f2d47eb7']
            articles      : ['article 1']

        'query-parent_2':
            id            : 'id_2'
            title         : 'title_2'
            parent_Queries: [ 'query-aaaaaa']
            articles      : ['article 2']

    inject ($httpBackend)->

      $httpBackend.expectGET('/api/data/articles_parent_queries/id_1,id_2').respond parent_Queries

      articles_Ids  = [ 'id_1', 'id_2']
      ignore_Titles = ''
      using tm_API, ->
        @.get_articles_parent_queries articles_Ids, ignore_Titles, (data)->
          data.assert_Is [ { id: 'query-parent_1' , title: 'title_1' , articles: [ 'article 1' ], size: 1 }]
        $httpBackend.flush()

  it 'docs_Library', ->
    inject ($httpBackend)->

      $httpBackend.expectGET('/jade/json/docs/library').respond { library: 42 }

      using tm_API, ->
        @.docs_Library (library)->
          library.assert_Is { library: 42 }

        $httpBackend.flush()

  it 'docs_Page', ->
    inject ($httpBackend)->

      $httpBackend.expectGET('/jade/json/docs/an-doc-id').respond { doc: 42 }

      using tm_API, ->
        @.docs_Page 'an-doc-id', (data)->
          data.assert_Is { doc: 42 }

        $httpBackend.flush()

  it 'article', ->
    inject ($httpBackend, $timeout)->

      $httpBackend.expectGET('/jade/json/article/an-article-id').respond { article: 42 }

      using tm_API, ->
        @.article 'an-article-id', (data)-> data.assert_Is { article: 42 }

        $httpBackend.flush()

        @.cache_Articles['an-article-id'].assert_Is { article: 42 }
                                         .bbb = 'cc'

        @.article 'an-article-id', (data)-> data.assert_Is { article: 42, bbb: 'cc' }

        $timeout.flush()

  it 'login', ->
    inject ($httpBackend)->

      $httpBackend.expectPOST('/json/user/login')
                  .respond (method,url,postData)->
                      JSON.parse(postData).assert_Is 	{ username: 'an username' , password: 'an password'}
                      return [200, { result: 42 } ]

      using tm_API, ->
        @.login 'an username','an password', (data)->
          data.assert_Is { result: 42 }

        $httpBackend.flush()

  it 'signup', ->
    inject ($httpBackend)->

      $httpBackend.expectPOST('/json/user/signup')
      .respond (method,url,postData)->
        JSON.parse(postData).assert_Is "username":"username","password":"password","confirm-password":"confirmpassword", "email":"email","firstname":"firstname","lastname":"lastname","company":"company","title":"title","country":"country","state":"state"
        return [200, { result: 42 } ]

      using tm_API, ->
        @.signup 'username', 'password','confirmpassword','email','firstname','lastname','company','title','country','state', (data)->
          data.assert_Is { result: 42 }

        $httpBackend.flush()

  it 'pwd_reset', ->
    inject ($httpBackend)->

      $httpBackend.expectPOST('/jade/json/user/pwd_reset')
                  .respond (method,url,postData)->
                    JSON.parse(postData).assert_Is 	{ email: 'an email'}
                    return [200, { result: 42 } ]

      using tm_API, ->
        @.pwd_reset 'an email', (data)->
          data.assert_Is { result: 42 }

        $httpBackend.flush()