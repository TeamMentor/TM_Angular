angular.module('TM_App')
       .controller 'Pagination_Controller', ($scope, $rootScope, query_Service, $timeout)->

          model =
              page       : 1
              page_Split : 10

              pages      : []
              page_Splits: [10,20,50,100,500]


          $scope.query_Id  =  null
          $scope.model     = model

          $scope.$on 'filter_data', (event, data)->
            $scope.reset()

          $scope.$on 'query_data', (event, data)->
            $scope.reset()

          $scope.$on 'article_data', (event, data)->
            if not (data?.size)
              model.pages = []
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
            $rootScope.$broadcast 'clear_articles'
            $rootScope.$broadcast 'set_page', model.page
            $timeout ->
              from = (model.page - 1) * model.page_Split
              to   = (model.page    ) * model.page_Split
              query_Service.load_Query_Articles $scope.query_Id, from, to

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

          $scope.reset = ()->
            model.page       = 1
            model.page_Split = 10
            $rootScope.$broadcast 'set_page', model.page
            $rootScope.$broadcast 'set_page_split', model.page_Split




