app = angular.module('App')

app.controller 'Active_Search_Controller', ($scope, $timeout, $sce, TM_API)->

  $scope.slider =
    floor   : 1
    ceiling : 20
    step    : 10
    index   : 1

  $scope.show_Articles_List = (index)->
    if $scope._data
      $scope._data.results =  $scope._results[index-1 .. index+9]
      $scope.articles_list  = $sce.trustAsHtml jade_articles_list($scope._data)

      $scope._data.results = $scope._results

  $scope.show_Articles_Filtered = (articles_Ids)->
    if $scope._data
      console.log 'here'
      results = (result for result in $scope._results when articles_Ids.indexOf(result.id) > -1)
      console.log results
      $scope._data.results =  results
      console.log $scope._data
      $scope.articles_list  = $sce.trustAsHtml jade_articles_list($scope._data)
      $scope._data.results = $scope._results


  $scope.render_Data = (data)->
    if data
      $scope._results = data.results
      $scope._data    = data

      $scope.slider.index = 1
      $scope.slider.ceiling = data.results.size()

      $scope.directory_list = $sce.trustAsHtml jade_directory_list(data)
      $scope.articles_list  = $sce.trustAsHtml jade_articles_list(data)
      $scope.filters_div    = $sce.trustAsHtml jade_filters_div(data)
      $scope.show_Articles_List(1)
    else
      $scope.directory_list = $sce.trustAsHtml 'a'
      $scope.articles_list  = $sce.trustAsHtml 'b'
      $scope.filters_div    = $sce.trustAsHtml 'c'

  $scope.get_Query_Tree = (query_Id)->
    $scope.query_Id = query_Id

    TM_API.query_tree query_Id, (data)->
      window._data = data

      article_Ids = (result.id for result in data.results)

      filters = []
      for filter in data.filters
        for result in filter.results
          filters.push result.title

      data.href ='#'
      $scope.render_Data data
      TM_API.get_articles_parent_queries article_Ids, filters, (data)->
        $scope.queries_Data = data
        $scope.directory_list = $sce.trustAsHtml jade_directory_list({ title: $scope.text , containers: data , href:'#'})

  $scope.search = ()=>
    if  $scope.text
      TM_API.query_from_text_search $scope.text, (query_id)->
        if query_id
          $scope.get_Query_Tree query_id

  $scope.open_Query = (obj, $event)->
    query_Id    = $event.target.id
    query_Title = $event.target.text
    $scope.sub_Query = query_Title
    #$scope.show_Articles_Filtered
    target_Query = query for query in $scope.queries_Data when query.id is query_Id
    if target_Query
      console.log target_Query
      $scope.show_Articles_Filtered target_Query.articles


  $scope.$watch "text", (current)->
    $scope.search()

  $scope.$watch "slider.index", (current)->
    $scope.show_Articles_List current

  #$scope.get_Query_Tree 'query-6234f2d47eb7' # index
  $scope.text = 'xss'


