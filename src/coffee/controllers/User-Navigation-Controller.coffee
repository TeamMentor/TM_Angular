angular.module('TM_App')
       .controller 'User_Navigation_Controller', ($scope, $state, query_Service)->
          # not used at the moment
          $scope.open_Query_State = ->
            console.log 'opening query state'
            $state.go('queries')
            query_Service.data = null   # this force a reload when state changes
            query_Service.load_Data()