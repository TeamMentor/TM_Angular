angular.module('TM_App')
       .controller 'Pagination_Controller', ($scope, $rootScope, query_Service)->

          $scope.currentPage = 1

          $scope.show_Page = ()->
            $rootScope.$broadcast 'show_page', $scope.currentPage


          $scope.previous_Page = ()->
            $scope.currentPage--
            $scope.show_Page()

          $scope.next_Page = ()->
            $scope.currentPage++
            $scope.show_Page()