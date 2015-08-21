require 'fluentnode'

cheerio = require 'cheerio'

class TM_Flare_Http
  constructor: ->
    @.server = "http://localhost:12345"

  component: (name, callback)=>
    @.open "/angular/jade-html/component/#{name}", callback

  view: (name, callback)=>
    @.open "/angular/jade-html/views/#{name}", callback

  open: (virtual_Path, callback)=>
    "#{@.server}#{virtual_Path}".GET (html)->
      $ = cheerio.load(html) if html
      callback html, $



module.exports = TM_Flare_Http

