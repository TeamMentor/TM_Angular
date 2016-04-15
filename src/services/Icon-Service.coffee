mappings =
  # Technology
  '.NET'                     : { class: 'icon-Net'            , layers: 12 }
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
  'AWS'                      : { class: 'icon-AWS'            , layers: 12 }
  'Ruby'                     : { class: 'icon-Ruby'           , layers: 12 }
  'ABAP'                     : { class: 'icon-ABAP'           , layers: 12 }

  # Phase
  'Deployment'               : { class: 'icon-Deploy'         , layers: 12 }
  'Design'                   : { class: 'icon-Design'         , layers: 12 }
  'Implementation'           : { class: 'icon-Implementation' , layers: 12 }
  'Test'                     : { class: 'icon-Test'           , layers: 12 }

  #Type
  'Checklist Item'           : { class: 'icon-Checklist'      , layers: 12 }
  'Code Example'             : { class: 'icon-CodeExample'    , layers: 8  }
  'Guideline'                : { class: 'icon-Guideline'      , layers: 12 }
  'How To'                   : { class: 'icon-HowTo'          , layers: 12 }
  'Principle'                : { class: 'icon-Principle'      , layers: 12 }
  'Requirement'              : { class: 'icon-Requirement'    , layers: 12 }
  'Vulnerability'            : { class: 'icon-Vulnerabilities', layers: 12 }

  'Default'                  : { class: 'icon-Default'        , layers: 12 }


class Icon_Service
  constructor: ->
    @.mappings = mappings

  element: (key)=>
    mapping = @.mappings[key]
    if not mapping
      mapping = @.mappings['Default']

    element = @.simple_Element mapping.class, key
    for i in  [1..mapping.layers] by 1
      element.append "<span class='path#{i}'>"
    element

  element_Html: (key)=>
    @.element(key)[0]?.outerHTML

  simple_Element: (name, title)=>
    element = angular.element('<span>')
    using element[0], ->
      @.className = name
      @.title     = title  if title
    element

  simple_Element_Html: (name, title)=>
    @.simple_Element(name, title)[0].outerHTML

angular.module('TM_App')
       .service 'icon_Service', ()->
          return new Icon_Service()