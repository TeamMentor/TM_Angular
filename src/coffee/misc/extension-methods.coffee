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