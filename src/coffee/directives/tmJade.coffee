app = angular.module('App')


# misc tests

#app.directive 'tmJade2', ($parse, $timeout)->
#
#  return (scope, elem, attrs) ->
#
#    window._scope = scope
#    window._elem = scope
#    window._attrs = attrs
#    console.log scope
#    console.log elem
#    console.log attrs
#
#app.directive 'tmJade', ( $parse, $timeout)->
#    #window._scope = $scope
#
#    data = {
#              href : '/abc'
#              title:'aaaa'
#              containers: [
#                { id:123 , title:'abc', size: 12}
#              ]
#            }
#    html = jade_directory_list(data)
#    return {
#              template: html
#           }