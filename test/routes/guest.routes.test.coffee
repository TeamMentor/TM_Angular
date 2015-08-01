describe '| routes | guest.routes' , ->
  beforeEach ->
    module('TM_App')

  it 'check routes', ->
    inject ($state) ->

      $state.go('navigate')
      $state.go('main')
      $state.go('index')
      $state.go('articles')
      $state.go('article')
      $state.go('article-box')