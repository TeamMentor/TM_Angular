expect = chai.expect

describe '| global-vars', ->
  it 'Check that the scope object has not leaked into the window object',->
    expect(window.scope).to.equal undefined
