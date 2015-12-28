angular.module('TM_App')
       .controller 'User_Navigation_Controller', ($scope,TM_API, $state,$window, $timeout, $rootScope, query_Service)->

          #console.log 'in User_Navigation_Controller ' + new Date().getMilliseconds()


          $scope.index_States        = ['index', 'index_query_id', 'index_query_id_filters']
          $scope.show_Loading_Image = false
          TM_API.tmConfig (callback) ->
            $scope.ShowLogOutBtn = callback.showLogoutButton

          $scope.$on 'http_start', ()->
            $scope.show_Loading_Image = true

          $scope.$on 'http_end',->
            $timeout ->
              $scope.show_Loading_Image = false

          $scope.open_Query_State = ->
            if @.index_States.contains($state.current?.name)
              #$rootScope.$broadcast 'clear_search'
              $rootScope.$broadcast 'clear_filter', 'All'
              $rootScope.$broadcast 'loading_query', null, null   # to clear existing query_Ids and Filter mappings
              query_Service.reload_Data()                         # trigger data reload
            else
              if $state.current?.name =='article'
                $rootScope.$broadcast 'clear_filter', 'All'
              $timeout ->
                $state.go 'index'

