require 'fluentnode'
async = require 'async'

describe 'Check express timeouts', ->

  url_Website = null
  url_Graphdb = null

  before ->
    config_File   = process.env.localProjectDir.path_Combine('../../config/SiteData_TM/TM/tm.config.json')
    config        = config_File.load_Json()
    url_Website   = "http://localhost:#{config.tm_design.port}"
    url_Graphdb   = "http://localhost:#{config.tm_graph.port}"
    url_Website.assert_Is 'http://localhost:12345'
    url_Graphdb.assert_Is 'http://localhost:12346'

  open_Root = (url, on_Data)->
    (index, next)->
      url.GET
      url.GET (data)->
        on_Data(data)
        next()


  it 'TM Website (root)', (done)->
    start = new Date().getTime()
    on_Data = (data)->
      data.assert_Is 'Moved Temporarily. Redirecting to /jade'

    async.eachSeries [0..50], open_Root(url_Website, on_Data), ->
      (new Date().getTime() - start).assert_Smaller_Than 400
      #async.eachSeries [0..500], open_Root(url, on_Data), ->
      #  console.log new Date().getTime() - start  + ' , '
      done()


  it 'TM Website (query-a14e68cb74b3)', (done)->
    start = new Date().getTime()
    url = "#{url_Website}/api/data/query_view_model/query-28e28f5aa0e5/0/10"

    on_Data = (data)->
      if data
        data.json_Parse().assert_Is { "error":"user login required" }

    async.eachSeries [0..50], open_Root(url, on_Data), ->
      (new Date().getTime() - start).assert_Smaller_Than 300
      #async.eachSeries [0..500], open_Root(url, on_Data), ->
      #  console.log 'website query: [500] ' + (new Date().getTime() - start) + ' , '
      done()

  it 'TM GraphDB (query-a14e68cb74b3)', (done)->
    @.timeout 5000
    start = new Date().getTime()
    url = "#{url_Graphdb}/data/query_view_model/query-a14e68cb74b3/0/10"

    on_Data = (data)->
      using data.json_Parse(),->
        # this is wrong it should get the the query
        @.assert_Is { error: 'no query tree filtered' }
        #@._query_Id.assert_Is 'query-a14e68cb74b3'


    async.eachSeries [0..30], open_Root(url, on_Data), ->
      #console.log new Date().getTime() - start
      (new Date().getTime() - start).assert_Smaller_Than 400
      #async.eachSeries [0..500], open_Root(url, on_Data), ->
      #  console.log 'graphDB query: [500] ' + (new Date().getTime() - start)
      done()

  it 'TM Angular (root)', (done)->
    start = new Date().getTime()
    on_Data = (data)->
      data.assert_Is 'Moved Temporarily. Redirecting to docs'

    async.eachSeries [0..50], open_Root(url_Graphdb, on_Data), ->
      (new Date().getTime() - start).assert_Smaller_Than 300
      #async.eachSeries [0..500], open_Root(url, on_Data), ->
      #  console.log new Date().getTime() - start
      done()