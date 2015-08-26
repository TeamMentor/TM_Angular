require 'fluentnode'

cheerio = require 'cheerio'

class TM_Flare_Http
  constructor: ->
    @.config_File = process.env.localProjectDir.path_Combine('../../config/SiteData_TM/TM/tm.config.json')
    @.config      = @.config_File.load_Json()
    @.server      = "http://localhost:#{@.config.tm_design.port}"

  component: (name, callback)=>
    @.open "/angular/jade-html/component/#{name}", callback

  view: (name, callback)=>
    @.open "/angular/jade-html/views/#{name}", callback

  open: (virtual_Path, callback)=>
    "#{@.server}#{virtual_Path}".GET (html)->
      $ = cheerio.load(html) if html
      callback html, $



module.exports = TM_Flare_Http

