angular.module('TM_App')
       .run ($templateCache, $browser,$log)->
          if true
            if $browser.isMock is false
              $log.info 'Since we are running in a real browser, removing all template caches (for now)'
              $templateCache.removeAll()

