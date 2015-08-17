TM_GraphDB_Http = require '../../src/API/TM-GraphDB-Http'
async = require 'async'

describe '| graphBD-stress-test', ->

  graphDB = null

  beforeEach ->
    graphDB = new TM_GraphDB_Http()

  it 'Check multiple calls to /data/query_tree/query-6f0946ab5b19', (done)->
    id = 'query-6f0946ab5b19'
    target = "/data/query_tree/#{id}"
    open_And_Check_Id = (index, next)->
      graphDB.open target, (data)->
        data.id.assert_Is id
        next()

    async.each [0..10], open_And_Check_Id, done

  it 'Check multiple calls to /data/query_tree_filtered/query-6f0946ab5b19/query-8c511380a4f5', (done)->
    id     = 'query-6f0946ab5b19'
    filter = 'query-8c511380a4f5'

    target = "/data/query_tree_filtered/#{id}/#{filter}"

    open_And_Check_Results = (id, next)->
      graphDB.open target, (data)->
        data.results.assert_Size_Is 5
        data.containers.assert_Size_Is 6
        data.filters.assert_Size_Is 3
        next()

    async.each [0..10], open_And_Check_Results, done

  it 'Check multiple calls to /data/query_view_model_filtered', (done)->
    id     = 'query-6f0946ab5b19'
    filter = 'query-8c511380a4f5'

    url = "/data/query_view_model_filtered/#{id}/#{filter}/0/10"

    open_And_Check_Id = (index, next)->
      graphDB.open url, (data)->
        #data.id.assert_Is id
        next()
    async.each [0..50],open_And_Check_Id, done


  it 'Delete cache file and make multiple requests', (done)->
    @timeout 5000
    graphDB.cache_path (data)->
      data.path         .assert_Folder_Exists()
          .folder_Name().assert_Is '.tmCache'

      id = 'query-6f0946ab5b19'
      target = "/data/query_tree/#{id}"

      cache_File = data.path.path_Combine ("data_cache/query_tree_#{id}.json")

      count = 0
      probs = 0
      open_And_Check_Id = (index, next)->
        graphDB.open target, (data)->
          count++
          data.id.assert_Is id
          next()

          #if not data.id                              # use this when running higher numbers
          #  probs++
          #else
          #  data.id.assert_Is id
          #data.id.assert_Is id
          #next()

      open_And_Check_Id null, ()->                      # make one request (to ensure that there is a cache file

        cache_File.assert_File_Deleted()                # clear cache file to force query rebuild

        async.each [0..100],open_And_Check_Id, ->       # make multiple parallel request (to confirm that cache file is detected ok
        #async.each [0..1000],open_And_Check_Id, ->      # 1000 takes about 1.4s
        #async.each [0..2000],open_And_Check_Id, ->     # higher than 3000 we hit on the express prob
          #console.log "total: #{count} , probs: #{probs}"
          done()


