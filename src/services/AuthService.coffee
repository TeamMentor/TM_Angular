app = angular.module('TM_App')

app.factory 'AuthService', ($http,$q,$window,TM_API) ->

  login:(userName, password,callback) ->
    deferred = $q.defer()

    $window.sessionStorage["userInfo"] = null;
    TM_API.login userName, password, (data)=>
      deferred.resolve data
      if data
        TM_API.currentuser (userData)->
          if (userData)
            userInfo = userData
            $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
            deferred.resolve userInfo
            callback data
          else
            deferred.reject
      else
        deferred.reject
    return
    deferred.promise

  currentUser:()->
    if ($window.sessionStorage["userInfo"])
      userInfo = JSON.parse($window.sessionStorage["userInfo"])
      return userInfo
    else
      return null
