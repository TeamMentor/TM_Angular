angular.module('TM_App')
       .directive 'showComponent', ($compile,$location)->
          return {
            link: ($scope,element)->
              if $location.$$path and $location.$$path isnt '/'
                component_Name = $location.$$path.substring(1)
                if component_Name isnt ''
                  component      =  document.createElement(component_Name)
                  element.replaceWith $compile(component)($scope)
            }