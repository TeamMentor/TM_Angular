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


app.controller 'Index-Controller', ($scope, $sce, TM_API)->

  breadcrumbs = [{title: 'index', href: '#' + 'query-6234f2d47eb7' , id:'query-6234f2d47eb7'}]
  activeFilter = []
  activeFilter.ids = ""
  activeFilter.titles = ""
  activeFilter.filters = ""

  $scope.slider =
    floor   : 1
    ceiling : 240
    step    : 10
    index   : 1

  $scope.show_Articles_List = (index)->
    if $scope._data
      $scope._data.results =  $scope._results[index-1 .. index+9]
      $scope.articles_list  = $sce.trustAsHtml jade_articles_list($scope._data)

      $scope._data.results = $scope._results
      #console.log $scope._data.results

  $scope.render_Data = (data)->
    window.scope = $scope
    $scope._results = data.results
    $scope._data    = data

    data.activeFilter = activeFilter
    data.breadcrumbs  = breadcrumbs

    $scope.slider.index = 1
    $scope.slider.ceiling = data.results.size()

    $scope.breadcrumbs    = $sce.trustAsHtml jade_breadcrumbs(data)
    $scope.directory_list = $sce.trustAsHtml jade_directory_list(data)
    $scope.results        = $sce.trustAsHtml jade_results(data)
    #$scope.articles_list  = $sce.trustAsHtml jade_articles_list(data)
    $scope.filters_div    = $sce.trustAsHtml jade_filters_div(data)

    $scope.show_Articles_List(1)

  $scope.get_Query_Tree = (query_Id)->
    activeFilter = []
    activeFilter.ids = ""
    activeFilter.titles = ""
    activeFilter.filters = ""
    $scope.query_Id = query_Id

    TM_API.query_tree query_Id, (data)->
      window._data = data
      data.href ='#'
      $scope.render_Data data

  $scope.show_Query_Tree_Filter = (filter)->

    query_Id = $scope.query_Id

    TM_API.query_tree_filtered query_Id, filter, (data)->
      window._data = data
      data.href ='#'
      $scope.render_Data data

  $scope.open_Query = (obj, $event)->
    query_Id    = $event.target.id
    query_Title = $event.target.text
    breadcrumbs.push {title:query_Title, href: '#' + query_Id}
    $scope.get_Query_Tree query_Id

  $scope.open_Breadcrumb =  (obj, $event)->
    id = $event.target.href.split('#')[1].split('/')[0]
    $scope.get_Query_Tree id

  $scope.open_Filter  = (obj, $event)->
    console.log $event
    window._target =  $event

    if $event.target.parentElement.href

      filter_Id = $event.target.parentElement.href.split('#/')[1].remove(',')
      filter_Title = $event.target.textContent

      activeFilter = [{ title: filter_Title, id: filter_Id} ]
      activeFilter.titles = filter_Title
      activeFilter.ids = filter_Id
      activeFilter.filters = filter_Id

      console.log activeFilter

      $scope.show_Query_Tree_Filter filter_Id,

  $scope.$watch "slider.index", (current ,before)->
    $scope.show_Articles_List current

  $scope.get_Query_Tree breadcrumbs[0].id # index
