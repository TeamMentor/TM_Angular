app = angular.module('App')

app.controller 'Jade-Controller', ($scope, $sce, TM_API)->

  Array::size = () ->
    @.length

  Array::take = (size) ->
    if size is -1 then @ else @.slice(0,size)

  String::remove = (value)->
    result = @
    while result.contains(value)
      result = result.replace(value,'')
    result

  String::contains = (value)->
    if value instanceof RegExp
      regex = new RegExp(value)
      return regex.exec(@) isnt null
    if value instanceof Array
      for item in value
        if @.indexOf(item) is -1
          return false
      return true
    @.indexOf(value) > -1


  id = 'query-6234f2d47eb7'
  TM_API.query_tree id, (data)->
    window._data = data
    $scope.directory_list = $sce.trustAsHtml jade_directory_list(data)
    $scope.results        = $sce.trustAsHtml jade_results(data)
    $scope.articles_list  = $sce.trustAsHtml jade_articles_list(data)
    $scope.filters_div    = $sce.trustAsHtml jade_filters_div(data)