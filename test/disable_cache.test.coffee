describe 'disable_cache',->
  browser = null

  it 'Check $templateCache has values' ,->
    module('TM_App')
    inject ($templateCache, $browser)->
      $templateCache.info().assert_Is 	{ id: 'templates', size: 52 }
      browser = $browser

  xit 'Check $templateCache is cleared' ,->

    if browser
      browser.isMock = false
      angular.mock.$Browser = -> browser

      module('TM_App')
      inject ($templateCache)->
        $templateCache.info().assert_Is 	{ id: 'templates', size: 0 }

        browser.isMock = true




