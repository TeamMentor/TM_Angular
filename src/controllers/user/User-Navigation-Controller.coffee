angular.module('TM_App')
       .controller 'User_Navigation_Controller', ($scope, $state, query_Service)->
          $scope.open_Query_State = ->
            $state.go('index')
            query_Service.reload_Data()