app = angular.module('TM_App')
app.run ($timeout, $browser)->
  if $browser.isMock is false
    console.log 'Since we are running in a real browser, removing all template caches (for now)'
    $templateCache.removeAll()
