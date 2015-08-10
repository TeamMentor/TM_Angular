async = require 'async'
TM_GraphDB_Http = require '../src/API/TM-GraphDB-Http'

describe 'build-step-save-GraphDB-data', ->

  target_File   = null
  default_Content = "app = angular.module('TM_App')\n" +
                    "app.service 'graph_db_data', ()-> \n"

  graphDB       = null
  graphDB_Data  = {}

  before ->
    #target_File = process.env.localProjectDir.path_Combine('test-data/graph-db-data.coffee')
    target_File = process.env.localProjectDir.path_Combine('src/graph-db-data.coffee')
    graphDB = new TM_GraphDB_Http()

  after ->
    graphDB_Data.keys().assert_Size_Is 6

    target_File.assert_File_Deleted()
    fileContents = default_Content  + '   return ' + graphDB_Data.json_Str()
    fileContents.save_As target_File
    target_File.assert_File_Exists()


  it 'Check target file and server', (done)->
    target_File.parent_Folder().assert_Folder_Exists()
    graphDB.status (data)->
      data.assert_Is status : 'ok'
      done()

  save_Data = (key, next)->
    (data)->
      graphDB_Data[key] = data
      next()

  it 'status', (done)->
    delete graphDB_Data['status']
    graphDB.status save_Data 'status', ->
      graphDB_Data['status'].assert_Is status: 'ok'
      done()

  #it 'query_tree', (done)->
  #  query_Id = graphDB.index_Query
  #  key      = "query_tree_#{query_Id}"
  #  graphDB.query_tree query_Id, save_Data key, ->
  #    using graphDB_Data[key], ->
  #      @.id        .assert_Is query_Id
  #      @.title     .assert_Is 'Index'
  #      @.containers.assert_Not_Empty()
  #      @.results   .assert_Not_Empty()
  #      @.filters   .assert_Not_Empty()
  #      done()

  it 'query_tree_articles', (done)->
    @.timeout 4000
    get_Articles  = (query_Id, from, to, next)->
      key      = "query_tree_articles_#{query_Id}_#{from}_#{to}"
      graphDB.query_tree_articles query_Id, from, to, save_Data key, ->
        using graphDB_Data[key], ->
          @.id        .assert_Is query_Id
          @.title     .assert_Is 'Index'
          @.results.assert_Size_Is to - from
          next()

    get_Articles graphDB.index_Query, 0, 10, ->
      get_Articles graphDB.index_Query, 10, 20, ->
        get_Articles graphDB.index_Query, 20, 30, ->
          done()


  it 'query_tree_filters', (done)->
    query_Id = graphDB.index_Query
    key      = "query_tree_filters_#{query_Id}"
    graphDB.query_tree_filters query_Id, save_Data key, ->
      using graphDB_Data[key], ->
        @.id        .assert_Is query_Id
        @.title     .assert_Is 'Index'
        @.filters   .assert_Not_Empty()
        done()

  it 'query_tree_queries', (done)->
    query_Id = graphDB.index_Query
    key      = "query_tree_queries_#{query_Id}"
    graphDB.query_tree_queries query_Id, save_Data key, ->
      using graphDB_Data[key], ->
        @.id        .assert_Is query_Id
        @.title     .assert_Is 'Index'
        @.containers.assert_Not_Empty()
        done()