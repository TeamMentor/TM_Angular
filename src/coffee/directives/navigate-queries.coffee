angular.module('TM_App')
       .directive 'navigateQueries', ($compile, Load_Jade, TM_API)->
          return {
            link: ($scope, element)->
              Load_Jade 'template/navigate_queries' ,'navigate_queries', (navigate_queries)->
                $scope.$on 'show-query-data', (event, data)->
                  html     = navigate_queries(data)
                  compiled =  $compile(html);
                  content  = compiled($scope)
                  element.children().remove()
                  element.append(content)
          }
