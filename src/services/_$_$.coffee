# this file is called _$_$.coffee due to https://github.com/wallabyjs/public/issues/219

app = angular.module('TM_App')

app.service '$$', ()->
    $$ = (element)->
            if element
              if not element.$attr
                element.$attr = ()->
                  result = {}
                  if element
                    result[attr.name] = attr.value for attr in element.attributes
                  return result

              if not element.$query
                element.$query = (selector)->
                  $$(element.querySelector(selector))
            return element
    return $$