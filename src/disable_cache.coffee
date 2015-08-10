angular.module('TM_App')
       .run ($templateCache, $browser)->
          if true
            if $browser.isMock is false
              console.log 'Since we are running in a real browser, removing all template caches (for now)'
              $templateCache.removeAll()

