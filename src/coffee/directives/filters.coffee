angular.module('TM_App')
       .directive 'filters', ($compile, Load_Jade, TM_API)->
          return {
            link: ($scope, element)->
              Load_Jade 'component/filters' ,'filters', (filters)->
                $scope.$on 'show-query-data', (event, data)->
                  html     = filters(data)
                  compiled =  $compile(html);
                  content  = compiled($scope)
                  element.children().remove()
                  element.append(content)
          }
