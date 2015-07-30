mappings =
  # Technology

  '.Net'                     : { class: 'icon-Net'            , layers: 12 }
  'ASP.NET 3.5'              : { class: 'icon-Net'            , layers: 12 }
  'ASP.NET 4.0'              : { class: 'icon-Net'            , layers: 12 }
  'Android'                  : { class: 'icon-Android'        , layers: 12 }
  'C++'                      : { class: 'icon-C'              , layers: 12 }
  'iOS'                      : { class: 'icon-iOS'            , layers: 12 }
  'Java'                     : { class: 'icon-Java'           , layers: 12 }
  'PHP'                      : { class: 'icon-PHP'            , layers: 12 }
  'Scala Play'               : { class: 'icon-Scala'          , layers: 12 }
  'Scala with Play Framework': { class: 'icon-Scala'          , layers: 12 }
  'WCF'                      : { class: 'icon-WCF'            , layers: 12 }
  'WCF 3.5'                  : { class: 'icon-WCF'            , layers: 12 }
  'Web Application'          : { class: 'icon-Web-App'        , layers: 12 }
  'HTML5'                    : { class: 'icon-HTML5'          , layers: 12 }

  # Phase
  'Deployment'               : { class: 'icon-Deployment'     , layers: 12 }
  'Design'                   : { class: 'icon-Design'         , layers: 12 }
  'Implementation'           : { class: 'icon-Implementation' , layers: 12 }
  'Test'                     : { class: 'icon-Test'           , layers: 12 }

  #Type
  'Checklist Item'           : { class: 'icon-Checklist'      , layers: 12 }
  'Code Example'             : { class: 'icon-CodeExample'    , layers: 12 }
  'Guideline'                : { class: 'icon-Guideline'      , layers: 12 }
  'How To'                   : { class: 'icon-HowTo'          , layers: 12 }
  'Principle'                : { class: 'icon-Principle'      , layers: 12 }
  'Requirement'              : { class: 'icon-Requirement'    , layers: 12 }
  'Vulnerability'            : { class: 'icon-Vulnerabilities', layers: 12 }

  'Default'                  : { class: 'icon-Default'        , layers: 2 }


class Icon_Service
  constructor: ->
    @.mappings = mappings

  element: (key)=>
    console.log 'resolving html for icon: '  + key
    mapping = @.mappings[key]
    if not mapping
      mapping = @.mappings['Default']
    console.log mapping
    element = angular.element('<span>')
    using element[0], ->
      @.className = mapping.class
      @.title = key
    for i in  [1..mapping.layers] by 1
      element.append "<span class='path#{i}'>"
    element

  element_Html: (key)=>
    element = @.element(key)
    if element
      element[0].outerHTML
    else
      ""


###
  icon_Data:  (type, key)->
    switch type
      when 'technology'
        switch key
          when '.NET', 'ASP.NET 3.5', 'ASP.NET 4.0'       then return { class: 'icon-Net'      , layers: 0 }
          when '.NET 3.5'                                 then return { class: 'icon-Net-3-5'  , layers: 0 }
          when 'Android'                                  then return { class: 'icon-Android'  , layers: 0 }
          when 'C++'                                      then return { class: 'icon-C'        , layers: 0 }
          when 'iOS'                                      then return { class: 'icon-iOS'      , layers: 0 }
          when 'Java'                                     then return { class: 'icon-Java'     , layers: 0 }
          when 'PHP'                                      then return { class: 'icon-PHP'      , layers: 0 }
          when 'Scala Play', 'Scala with Play Framework'  then return { class: 'icon-Scala'    , layers: 0 }
          when 'WCF' , 'WCF 3.5'                          then return { class: 'icon-WCF'      , layers: 0 }
          when 'Web Application'                          then return { class: 'icon-Web-App'  , layers: 0 }
          when 'HTML5'                                    then return { class: 'icon-HTML5'    , layers: 0 }
          # else return 'Default'
    return { class: 'icon-Default'   , layers: 0 }
###

angular.module('TM_App')
       .service 'icon_Service', ()->
          return new Icon_Service()