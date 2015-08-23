require 'fluentnode'
async = require 'async'

describe 'Check express timeouts', ->

  open_Root = (url, on_Data)->
    (index, next)->
      url.GET
      url.GET (data)->
        on_Data(data)
        next()


  it 'TM Website (root)', (done)->
    start = new Date().getTime()
    url = "http://localhost:12345"
    on_Data = (data)->
      data.assert_Is 'Moved Temporarily. Redirecting to /index.html'

    async.eachSeries [0..50], open_Root(url, on_Data), ->
      (new Date().getTime() - start).assert_Smaller_Than 400
      #async.eachSeries [0..500], open_Root(url, on_Data), ->
      #  console.log new Date().getTime() - start  + ' , '
      done()


  it 'TM Website (query-a14e68cb74b3)', (done)->
    start = new Date().getTime()
    url = "http://localhost:12345/api/data/query_view_model/query-a14e68cb74b3/0/10"

    on_Data = (data)->
      if data
        data.json_Parse().assert_Is {"error":"user login required"}

    async.eachSeries [0..50], open_Root(url, on_Data), ->
      (new Date().getTime() - start).assert_Smaller_Than 200
      #async.eachSeries [0..500], open_Root(url, on_Data), ->
      #  console.log 'website query: [500] ' + (new Date().getTime() - start) + ' , '
      done()

  it 'TM GraphDB (query-a14e68cb74b3)', (done)->
    @.timeout 5000
    start = new Date().getTime()
    url = "http://localhost:12346/data/query_view_model/query-a14e68cb74b3/0/10"

    on_Data = (data)->
      #data.json_Parse().id.assert_Is 'query-a14e68cb74b3'

    async.eachSeries [0..30], open_Root(url, on_Data), ->
      (new Date().getTime() - start).assert_Smaller_Than 400
      #async.eachSeries [0..500], open_Root(url, on_Data), ->
      #  console.log 'graphDB query: [500] ' + (new Date().getTime() - start)
      done()

  it 'TM Angular (root)', (done)->
    start = new Date().getTime()
    url = "http://localhost:12346"
    on_Data = (data)->
      data.assert_Is 'Moved Temporarily. Redirecting to docs'

    async.eachSeries [0..50], open_Root(url, on_Data), ->
      (new Date().getTime() - start).assert_Smaller_Than 300
      #async.eachSeries [0..500], open_Root(url, on_Data), ->
      #  console.log new Date().getTime() - start
      done()