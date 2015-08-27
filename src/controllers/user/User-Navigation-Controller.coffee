angular.module('TM_App')
       .controller 'User_Navigation_Controller', ($scope, $state, $timeout, $rootScope, query_Service)->

          console.log 'in User_Navigation_Controller ' + new Date().getMilliseconds()

          $scope.open_Query_State = ->

            if $state.current?.name is 'index'
              $rootScope.$broadcast 'clear_search'
              $rootScope.$broadcast 'clear_filter', 'All'
              $rootScope.$broadcast 'clear_query'
              query_Service.reload_Data()
            else
              $state.go('index')

          $scope.show_Loading_Image = false

          $scope.$on 'http_start',->
            $scope.show_Loading_Image = true

          $scope.$on 'http_end',->
            $timeout ->
              $scope.show_Loading_Image = false