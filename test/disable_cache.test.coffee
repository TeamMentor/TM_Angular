describe 'disable_cache',->
  browser = null                                                        # need to capture this object

  it 'Check $templateCache has values' ,->
    module('TM_App')
    inject ($templateCache, $browser)->
      $templateCache.info().assert_Is 	{ id: 'templates', size: 52 }
      browser = $browser

  it 'Check $templateCache is cleared' ,->

    if browser
      browser.isMock = false
      angular.mock.$Browser = -> browser                                # so that we change it

      module('TM_App')
      inject ($templateCache)->
        $templateCache.info().assert_Is 	{ id: 'templates', size: 0 }

        browser.isMock = true                                           # we can restore it ok




