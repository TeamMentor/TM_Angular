TM_GraphDB_Http = require '../../src/API/TM-GraphDB-Http'

describe '| API | TM-GraphDB-Http |', ->
  graphDB =  null

  before ->
    graphDB = new TM_GraphDB_Http()

  it 'constructor',->
    using new TM_GraphDB_Http(), ->
      @.server.assert_Is      'http://localhost:12346'
      @.index_Query.assert_Is 'query-6234f2d47eb7'

  it 'cache_path', (done)->
    graphDB.cache_path (data)->
      using data.path, ->
        @.assert_Folder_Exists()
        @.files().file_Names().first().assert_Is 'tm-uno-loaded.flag'
        @.folders().file_Names().assert_Contains(['data_cache','tm-uno'])
        done()


  it 'open', (done)->
    graphDB.open '/graph-db/status', (data)->
      data.assert_Is status: 'ok'
      done()

  it 'query_tree', (done)->
    graphDB.query_tree null, (data)->
      assert_Is_Null data
      graphDB.query_tree graphDB.index_Query, (data)->
        data.id.assert_Is  graphDB.index_Query
        data.title.assert_Is 'Index'
        data.containers.length.assert_Bigger_Than 10
        data.results.assert_Bigger_Than 1000
        data.filters.assert_Size_Is 3

        done()

  it 'query_tree_articles', (done)->
    graphDB.query_tree null, (data)->
      assert_Is_Null data
      from = 10
      size = 25
      graphDB.query_tree_articles graphDB.index_Query, from, size, (data)->
        data.id.assert_Is  graphDB.index_Query
        data.title.assert_Is 'Index'
        data.results.assert_Size_Is size - from
        assert_Is_Undefined data.filters
        assert_Is_Undefined data.queries
        done()

  it 'query_tree_filters', (done)->
    graphDB.query_tree null, (data)->
      assert_Is_Null data
      graphDB.query_tree_filters graphDB.index_Query, (data)->
        data.id.assert_Is  graphDB.index_Query
        data.title.assert_Is 'Index'
        data.filters.assert_Size_Is 3
        assert_Is_Undefined data.results
        assert_Is_Undefined data.queries
        done()

  it 'query_tree_queries', (done)->
    graphDB.query_tree null, (data)->
      assert_Is_Null data
      graphDB.query_tree_queries graphDB.index_Query, (data)->
        data.id.assert_Is  graphDB.index_Query
        data.title.assert_Is 'Index'
        data.containers.assert_Bigger_Than 10
        assert_Is_Undefined data.filters
        assert_Is_Undefined data.results

        done()
  it 'status', (done)->
    graphDB.status  (data)->
      data.assert_Is status: 'ok'
      done()
