angular.module('TM_App')
.directive 'navigateResults', ($compile, Load_Jade, TM_API)->
  return {
  link: ($scope, element)->
    Load_Jade 'component/navigate_results' ,'navigate_results', (navigate_results)->
      $scope.$on 'show-query-data', (event, data)->
        html     = navigate_results(data)
        compiled = $compile(html);
        content  = compiled($scope)
        element.children().remove()
        element.append(content)
  }