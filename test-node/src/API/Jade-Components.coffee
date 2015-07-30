require 'cheerio'

TM_Flare_Http = require './TM-Flare-Http'

class Jade_Components

  constructor:  ->
    @.folder_Components = process.env.localProjectDir.path_Combine '../TM_Flare/component/'
    @.folder_Views      = process.env.localProjectDir.path_Combine '../TM_Flare/views/'
    @.flare_Http        = new TM_Flare_Http()

  components: ()->
    for name in @.folder_Components.files_Recursive()
      name.remove(@.folder_Components)
          .remove('.jade')

  views: ()->
    for name in @.folder_Views.files_Recursive()
      name.remove(@.folder_Views)
          .remove('.jade')

  component_Html: (name, callback)->
    @.flare_Http.component name, callback

  view_Html: (name, callback)->
    @.flare_Http.view name, callback

module.exports = Jade_Components