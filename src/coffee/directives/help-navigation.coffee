angular.module('TM_App')
       .directive 'helpNavigation', ()->
          return templateUrl: '/angular/jade-html/component/help_navigation'

#app = angular.module('TM_App')
#app.directive 'helpNavigation', ($compile, Load_Jade, TM_API)->
#  return {
#    link: ($scope, ele)->
#      Load_Jade 'component/help_navigation' ,'help_navigation', (help_navigation)->
#        TM_API.docs_Library (library)->
#          library.Views = library.Views.take(1)
#          html = help_navigation( library : library )
#          compiled =  $compile(html);
#          content = compiled($scope)
#          ele.append(content)
#  }

