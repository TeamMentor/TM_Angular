search_bar_template = '<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><div ng-controller="Search_Controller" class="search"><form ng-submit="submit()"><select><option ng-repeat="technology in technologies" value="{{technology}}">{{technology}}</option><!--  option(value=".Net")= "Net....."--><!--  option(value="Java")= "abc"--><!--  option(value="php")= "php"--></select><input id="search-text" type="text" ng-model="text" placeholder="Type keywords here" class="search-input"/><button id="search-button" type="submit" class="btn-search"><span title="Search" class="icon-Search"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span></button></form></div>'

describe '| directive | search-bar', ->

  element     = null
  element_Raw = null

  beforeEach ()->
    module('TM_App')

  beforeEach ()->
    inject ($templateCache)->
      $templateCache.put '/angular/jade-html/component/search_bar' ,search_bar_template

  beforeEach ()->
    inject ($compile,$rootScope)->
      scope       = $rootScope.$new();
      element_Raw = angular.element('<search-bar/>')
      element     = $compile(element_Raw)(scope)[0]
      scope.$digest()

  it 'check html elements',->

    inject ($$)->
      $$(element).$query('input').$attr().assert_Is {id: 'search-text', type: 'text', "ng-model": 'text', placeholder: 'Type keywords here', class: 'search-input ng-pristine ng-untouched ng-valid'}
