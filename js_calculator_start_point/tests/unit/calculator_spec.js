var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('2 + 0 will equal 2 ', function(){
    calculator.previousTotal = 2
    calculator.add(2)
    assert.equal(calculator.runningTotal , 4)
  })

});
