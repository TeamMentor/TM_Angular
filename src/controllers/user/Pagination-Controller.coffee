angular.module('TM_App')
       .controller 'Pagination_Controller', ($scope, $rootScope, $window)->

          model =
              page       : 1
              page_Split : 10
              data_Size  : 0
              pages      : []
              page_Splits: [4, 10,20,50,100]


          $scope.query_Id      =  null
          $scope.model         = model
          $scope.visible       = false
          $scope.pagginMessage = ''

          $scope.Paging_Message = ()->

            recordsPerPage = model.page_Split
            totalRecords   = model.data_Size
            currentPage    = model.page

            if (currentPage==1 && recordsPerPage > totalRecords )
              if totalRecords ==1
                $rootScope.$broadcast 'set_paging_message', "Showing " + totalRecords + " article"
              else
                $rootScope.$broadcast 'set_paging_message', "Showing " + totalRecords + " articles"
              return;

            if currentPage == 1
              $rootScope.$broadcast 'set_paging_message', "Showing articles 1 to " + recordsPerPage + " out of " + totalRecords
            else
              startNo             = (((currentPage - 1) * (recordsPerPage))  + 1 );

              if ((currentPage  * recordsPerPage) + 1 > totalRecords)
                endNo             =totalRecords
                remainingArticles = (((currentPage - 1)  * recordsPerPage) + 1 ) - endNo

                if (remainingArticles==0)
                  $rootScope.$broadcast 'set_paging_message',"Showing article " + totalRecords + " out of  " + totalRecords
                else
                  $rootScope.$broadcast 'set_paging_message', "Showing article " + (((currentPage - 1)  * recordsPerPage) + 1 ) + " to "+ totalRecords  + " out of " + totalRecords;
                return
              else
                endNo =(currentPage * recordsPerPage)  ;
                $rootScope.$broadcast 'set_paging_message', "Showing articles  " + startNo + " to " + endNo + " out of " + totalRecords

          $scope.$on 'set_paging_message', (event, data)->
            $scope.paginMessage = data

          $scope.$on 'view_model_data', (event, data)->
            $scope.visible = true
            if not (data?.size)
              model.pages = null
            else
              model.data_Size = data?.size
              $scope.query_Id = data.id
              if data.size < model.page_Split
                split = 1
              else
                split = ~~(data.size / model.page_Split)

                if (data.size %% model.page_Split) > 0
                  split++
              model.pages =  [1.. split]
              $scope.Paging_Message()


          $scope.set_Page = ()->
            if model.page
              from    = (model.page - 1) * model.page_Split
              to      = (model.page    ) * model.page_Split
              $rootScope.$broadcast 'set_from_to',0,model.page_Split
              #$window.sessionStorage.setItem('recordsPerPage',model.page_Split)
              $rootScope.$broadcast 'set_page', model.page, from, to
            else
              model.page = 1
              $scope.Paging_Message()

          $scope.$on 'reset_current_page', (event) ->
            model.page       =1

          $scope.set_Page_Split = (recordsPerPage)->
            model.page =1
            if recordsPerPage
              model.page_Split                  = recordsPerPage
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

          $scope.goToTop = () ->
              div = document.querySelector('.scrolling-results')
              if angular.element(div)[0]
                angular.element(div)[0].scrollTop=0

          $scope.ShowTopButton =  ->
            div = document.querySelector('.scrolling-results')
            if angular.element(div)[0]
              return angular.element(div)[0].scrollHeight > angular.element(div)[0].clientHeight
            else
              return false
