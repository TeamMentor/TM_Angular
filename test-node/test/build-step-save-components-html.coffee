Jade_Components = require '../src/API/Jade-Components'
async           = require 'async'

describe 'build-step-save-components-html', ->

  #if not process.env.localProjectDir
  #  console.log 'process.env.localProjectDir not set, so skipping build'

  target_File = null
  default_Content = "app = angular.module('TM_App')\n" +
                    "app.run ($templateCache)-> \n"

  #$templateCache.put('/angular/jade-html/component/login_form', '12312312')
  before ->
    target_File = process.env.localProjectDir.path_Combine('src/components.coffee')

  it 'check target file', ->
    target_File
    target_File.assert_File_Exists()
    #default_Content.saveAs target_File
    target_File.file_Contents().assert_Contains default_Content

  it 'process all components and views', (done)->
    @.timeout 20000
    file_Contents = default_Content
    jade_Components = new Jade_Components()

    throw_On_Error =  (name, html)->
      if html.size() is 40
        console.log "Error with component: #{name}"
        html.assert_Is_Not 'Moved Temporarily. Redirecting to /error'

    process_Components = (callback)->
      file_Contents += " \n\n   # ------Components---\n\n"
      save_Component = (name, next)->
        jade_Components.component_Html name, (html, $)->
          throw_On_Error name, html
          html = html.replace(/"/g, "\\\"")
                     .replace(/{/g, "\\{")
          file_Contents += "   $templateCache.put('/angular/jade-html/component/#{name}' , \"#{html}\") \n \n"
          next()

      async.eachSeries jade_Components.components(), save_Component, callback

    process_Views =  (callback)->
      file_Contents += " \n\n   # ------Views--------\n\n"
      save_View = (name, next)->
        jade_Components.view_Html name, (html, $)->
          throw_On_Error name, html
          html = html.replace(/"/g, "\\\"")
                     .replace(/{/g, "\\{")
          file_Contents += "   $templateCache.put('/angular/jade-html/views/#{name}' , \"#{html}\") \n \n"
          next()

      async.eachSeries jade_Components.views(), save_View, callback

    process_Components ->
      process_Views ->
        file_Contents.saveAs target_File
        done()