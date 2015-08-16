angular.module('TM_App')
       .controller 'Pagination_Controller', ($scope, $rootScope, query_Service, $timeout)->

          model =
              page       : 1
              page_Split : 10

              pages      : []
              page_Splits: [4, 10,20,50,100]


          $scope.query_Id  =  null
          $scope.model     = model

          #$scope.$on 'query_data', (event, data)->
          #  model.page       = 1
          #  model.page_Split = 10
          #  $scope.reset()

          $scope.$on 'view_model_data', (event, data)->

            if not (data?.size)
              model.pages = null
            else
              $scope.query_Id = data.id
              if data.size < model.page_Split
                split = 1
              else
                split = ~~(data.size / model.page_Split)

                if (data.size %% model.page_Split) > 0
                  split++

              model.pages =  [1.. split]

          $scope.set_Page = ()->
            if model.page
              $rootScope.$broadcast 'set_page', model.page
              $timeout ->
                from = (model.page - 1) * model.page_Split
                to   = (model.page    ) * model.page_Split
                query_Service.load_Query $scope.query_Id, null,  from, to

          $scope.set_Page_Split = ()->
            $scope.set_Page()
            $rootScope.$broadcast 'set_page_split', model.page_Split

          $scope.previous_Page = ()->
            if model.page > 1
              model.page--
              $scope.set_Page()

          $scope.next_Page = ()->
            if model.page < model.pages.size()
              model.page++
              $scope.set_Page()

          #$scope.reset = ()->
          #  model.page       = 1
          #  model.page_Split = 10
          #  #$rootScope.$broadcast 'set_page', model.page
          #  #$rootScope.$broadcast 'set_page_split', model.page_Split


          $scope.$on 'keyup', (event, data)->
            if data.keyIdentifier is 'Left'
              $scope.previous_Page()
            if data.keyIdentifier is 'Right'
              $scope.next_Page()


