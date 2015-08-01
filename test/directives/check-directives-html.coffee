expect = chai.expect
describe '| directives | check-directives-html', ->

  beforeEach ->
    module 'TM_App'

  it 'confirm values are set', ->
    inject ($templateCache)->
      expect($templateCache.get('/angular/jade-html/component/login_form').length).to.be.above(1000)
      expect($templateCache.get('/angular/jade-html/views/guest/login'   ).length).to.be.above(1000)



