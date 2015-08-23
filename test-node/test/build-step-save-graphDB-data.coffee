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
    graphDB_Data.keys().assert_Size_Is 7

    target_File.assert_File_Deleted()
    fileContents = default_Content  + '   return ' + graphDB_Data.json_Str()
    fileContents.save_As target_File
    target_File.assert_File_Exists()


  it 'Check target file and server', (done)->
    target_File.parent_Folder().assert_Folder_Exists()
    graphDB.status (data)->
      data.assert_Is status : 'ok'
      done()

  #save_Data = (data, key)->
  #  graphDB_Data[key] = data

  it 'status', (done)->
    delete graphDB_Data['status']
    key = 'status'
    graphDB.status  (data)->
      graphDB_Data[key] = data
      graphDB_Data[key].assert_Is status: 'ok'
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

  it 'query_view_model', (done)->
    #@.timeout 4000
    get_Data  = (query_Id, from, to, next)->
      key      = "query_view_model_#{query_Id}_#{from}_#{to}"
      graphDB.query_view_model query_Id, from, to, (data)->
        graphDB_Data[key] = data
        #console.log data
        #save_Data data, key
        using graphDB_Data[key], ->
          @.id            .assert_Is query_Id
          @.title         .assert_Is 'Index'
          @.articles      .assert_Size_Is to - from
          @.queries       .assert_Size_Is 22
          @.filters.keys().assert_Size_Is 3
          next()

    get_Data graphDB.index_Query, 0, 10, ->
      get_Data graphDB.index_Query, 10, 20, ->
        get_Data graphDB.index_Query, 20, 30, ->
          done()

  it 'query_view_model_filtered', (done)->
    #@.timeout 4000
    get_Data  = (query_Id, filters, from, to, next)->
      key      = "query_view_model_filtered_#{query_Id}_#{filters}_#{from}_#{to}"
      graphDB.query_view_model_filtered query_Id, filters, from, to, (data)->
        graphDB_Data[key] = data
        using graphDB_Data[key], ->
          @.id            .assert_Is query_Id
          @.title         .assert_Is 'Index'
          @._filters.assert_Is 'query-7d9a1b64c045'
          @.articles      .assert_Size_Is to - from
          @.queries       .assert_Size_Is 16
          @.filters.keys().assert_Size_Is 3
          next()

    get_Data graphDB.index_Query, graphDB.java_Query, 0, 10, ->
      get_Data graphDB.index_Query, graphDB.java_Query,10, 20, ->
        get_Data graphDB.index_Query, graphDB.java_Query, 20, 30, ->
          done()
