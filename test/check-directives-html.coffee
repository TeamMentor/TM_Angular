describe 'check-directives-html', ->

  beforeEach ->
    module 'TM_App'

  it 'confirm values are set', ->
    inject ($templateCache)->
      expect($templateCache.get('/angular/jade-html/component/login_form').length >  1000).toEqual(true)
      expect($templateCache.get('/angular/jade-html/views/login'         ).length >  1000).toEqual(true)



