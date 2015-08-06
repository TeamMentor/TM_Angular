angular.module('TM_App')
       .controller 'User_Navigation_Controller', ($scope, $state, query_Service)->
          # not used at the moment
          $scope.open_Query_State = ->
            console.log 'opening index state'
            $state.go('index')
            query_Service.reload_Data()