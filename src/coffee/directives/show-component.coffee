angular.module('TM_App')
       .directive 'showComponent', ($compile,$location)->
          return {
            link: ($scope,element)->
              component_Name = $location.$$path.substring(1)
              component      =  document.createElement(component_Name)
              element.replaceWith $compile(component)($scope)
            }
