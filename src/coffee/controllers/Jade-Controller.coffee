app = angular.module('App')

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

app.controller 'Jade-Controller', ($scope, $sce, TM_API)->
  breadcrumbs = [{title: 'index', href: '#' + 'query-6234f2d47eb7' , id:'query-6234f2d47eb7'}]

  $scope.show_Query = (query_Id)->
    TM_API.query_tree query_Id, (data)->
      window._data = data
      data.breadcrumbs = breadcrumbs
      data.href ='#'
      $scope.breadcrumbs    = $sce.trustAsHtml jade_breadcrumbs(data)
      $scope.directory_list = $sce.trustAsHtml jade_directory_list(data)
      $scope.results        = $sce.trustAsHtml jade_results(data)
      $scope.articles_list  = $sce.trustAsHtml jade_articles_list(data)
      $scope.filters_div    = $sce.trustAsHtml jade_filters_div(data)

  $scope.open_Query = (obj, $event)->
    query_Id    = $event.target.id
    query_Title = $event.target.text
    breadcrumbs.push {title:query_Title, href: '#' + query_Id}
    console.log breadcrumbs
    window._target =  $event.target
    $scope.show_Query query_Id

  $scope.open_Breadcrumb =  (obj, $event)->
    window._target =  $event.target
    id = $event.target.href.split('#')[1]
    $scope.show_Query id



  $scope.show_Query('query-6234f2d47eb7')
  #id = 'query-6234f2d47eb7'
