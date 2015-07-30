angular.module('TM_App')
       .directive 'icon', (icon_Service)->
          return template: (element, attribute)->
            key = attribute.type || 'Default'
            return icon_Service.element_Html(key)

       .directive 'showAllIcons', (icon_Service)->
          return template: (element, attribute)->
            all_Icons_Html =""
            for key in icon_Service.mappings.keys()

              all_Icons_Html += icon_Service.element_Html(key)
              if attribute.$attr.withTitles
                all_Icons_Html += " #{key} <br/>"
            return all_Icons_Html
