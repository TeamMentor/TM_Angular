#Navigate_Controller = ($scope,$sce, $stateParams, TM_API) ->
#
#  TM_API.query_tree $stateParams.query_Id, (data)->
#    data.href = '#/navigate/'
#    $scope.content_HTML =  $sce.trustAsHtml(jade_navigate(data))