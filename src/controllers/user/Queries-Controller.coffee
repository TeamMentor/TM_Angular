angular.module('TM_App')
       .controller 'Queries_Controller', ($scope, $rootScope, $window)->

          $scope.visible = false

          $scope.$on 'view_model_data', (event, data)->
            $scope.visible    = true
            $scope.title      = data.title
            $scope.containers = data.queries

          $scope.load_Query = ($event, query_Id)->
            $event.preventDefault()
            $rootScope.$broadcast 'apply_query', query_Id
            $rootScope.$broadcast 'reset_current_page'

          $scope.show_Previous_Query = ()->
            $window.history.back()