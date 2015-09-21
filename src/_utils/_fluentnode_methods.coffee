# Fluentnode extension methods (these need to be moved into a separate module or service

Array::contains = (value)->
  if value instanceof Array
    for item in value
      if not (item in @)
        return false
    return true;
  else
  (value in @)

Array::first  = ->
  @.item(0)


Array::item = (index)->
  if typeof(index) is 'number'
    if @.length > index > -1
      return @[index]
  null

Array::size = () ->
  @.length

Array::take = (size) ->
  if size is -1 then @ else @.slice(0,size)

String::remove = (value)->
  result = @
  while result.contains(value)
    result = result.replace(value,'')
  result

String::contains = (value)->
  if value instanceof RegExp
    regex = new RegExp(value)
    return regex.exec(@) isnt null
  if value instanceof Array
    for item in value
      if @.indexOf(item) is -1
        return false
    return true
  @.indexOf(value) > -1

# not in fluent node

#String::upper_Case_First_Letter = ()->
#  @.charAt(0).toUpperCase() + @.substr(1)


Object.defineProperty Object.prototype, 'keys',
  enumerable  : false,
  writable    : true,
  value: ->
    return (key for own key of @)


#globals
  window.using = (target,callback)->
    callback.apply(target)

#asserts

if window['chai']     # need to move this to a separate file only available during tests

  expect = chai.expect

  Object.defineProperty Object.prototype, 'assert_Is',
    enumerable  : false,
    writable    : true,
    value: (target)->
      expect(@).to.deep.equal(target)
      @

  String::assert_Is          = (target, message)->
    expect(@.toString()).to.equal(target, message)
    @


  String::assert_Contains = (target, message)->
    source    = @.toString()
    message   = message || "expected string '#{source}' to contain the string/array '#{target}'"
    expect(source).to.contain(target, message)
    @

  String::assert_Not_Contains         = (target)->
    source    = @.toString()
    message   = "expected string '#{source}' to not contain the string '#{target}'"
    expect(source).to.not.contain(target,message)
    @

  Number::assert_Is          = (target, message)->      # slight modified from fluentnode version
    expect(@.toString()).to.equal(target.toString(), message)
    @

  Boolean::assert_Is_False = ->
    expect(@.valueOf()).to.equal(false)
    return false

  Boolean::assert_Is_True = ->
    expect(@.valueOf()).to.equal(true)
    return true

  Array::assert_Contains = (value, message)->
    message = message || "[assert_Contains]"
    if value instanceof Array
      for item in value
        @.contains(item).assert_Is_True("#{item} not found in array: #{@}")
    else
      @.contains(value).assert_Is_True(message)
    @
