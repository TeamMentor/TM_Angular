app = angular.module('App')

app.run ($timeout, Load_Jade)->
  preload = ()->
    preload_Pages = ["about", "features", "index", "get_started"]
    for page in preload_Pages
      Load_Jade "views/#{page}", "", ->

  $timeout preload, 250
