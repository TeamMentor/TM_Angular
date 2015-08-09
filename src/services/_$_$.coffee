# this file is called _$_$.coffee due to https://github.com/wallabyjs/public/issues/219
#   update: wallaby now seems to handle ok the $$ file but Karma doesn't

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

                element.$query = (selector)->
                  $$(element.querySelector(selector))

                element.$query_All = (selector)->
                  $$(element.querySelectorAll(selector))

                element.$html = ()->
                  element.innerHTML

                element.$text = ()->
                  element.innerText

                element.$click = ()->
                  angular.element(element).triggerHandler('click')

            return element
    return $$