app = angular.module('App')

config =
  cache_Jade_Js: true

app.service 'Load_Jade', ($q, $document)->
  return (jade_File, method_Name, callback)->
    #console.log 'in LOAD JADE FOR :' + jade_File
    method_Name = 'jade_' + method_Name

    deferrer = $q.defer()

    if config.cache_Jade_Js and window[method_Name]
      callback window[method_Name], deferrer.resolve
    else
      #console.log 'on Load_Jade for: ' + jade_File
      try
        script = $document[0].createElement('script');
        src  = "/angular/jade/#{jade_File}"
        script.src = src;

        $document[0].body.appendChild(script);
        script.onload = ()->
          callback window[method_Name], deferrer.resolve
      catch error
        console.log error

    return deferrer.promise