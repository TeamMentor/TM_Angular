describe '| _utils | _fluentnode_methods', ->
  it 'Array::first', ->
    ['0','1'].first().assert_Is '0'

  it 'Array::item', ->
    ['0','1'].item(0).assert_Is '0'
    ['0','1'].item(1).assert_Is '1'
    (['0','1'].item(2) is null).assert_Is_True()

  it 'Array::size', ->
    ['0','1'].size().assert_Is '2'

  it 'Array::take', ->
    ['0','1'].take(0).assert_Is []
    ['0','1'].take(1).assert_Is ['0']
    ['0','1'].take(2).assert_Is ['0','1']
    ['0','1'].take(3).assert_Is ['0','1']
    ['0','1'].take(-1).assert_Is ['0','1']

  it 'String::remove', ->
    'aabbccaa'.remove('aa').assert_Is 'bbcc'
    'aabbccaa'.remove('bb').assert_Is 'aaccaa'

  it 'String::contains', ->
    'aabbccaa'.contains('aa'       ).assert_Is_True()
    'aabbccaa'.contains(/aa/       ).assert_Is_True()
    'aabbccaa'.contains(['aa']     ).assert_Is_True()
    'aabbccaa'.contains(['aa','bb']).assert_Is_True()
    'aabbccaa'.contains(['dd']     ).assert_Is_False()
    'aabbccaa'.contains(['aa','dd']).assert_Is_False()

  it 'String::upper_Case_First_Letter',->
    ''.upper_Case_First_Letter().assert_Is ''
    'abc'.upper_Case_First_Letter().assert_Is 'Abc'
