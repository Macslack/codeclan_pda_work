var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should be able to multiply 3 and 5 to get 15', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number3')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('15')
 })

 it('should be able to divide 21 by 7 to get 3', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number2')).click();
   element(by.css('#number1')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number7')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('3')
 })

 it('should be able to add 1 and 4 to get 5', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number4')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('5')
 })

 it('should be able to subract 4 from 7 to get 3', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number7')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number4')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('3')
 })

 it('should be able to concatenate multiple number button clicks', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#number0')).click();
   element(by.css('#number0')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('100')
 })

 it('should be able to chain multiple operations together', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#number0')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number7')).click();
   element(by.css('#number5')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('50')
 })

 it('should be able to clear the running total without affecting the calculation', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#number0')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number1')).click();
   element(by.css('#number0')).click();
   element(by.css('#clear')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('100')
 })

 it('should not be able to divide by zero', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('err')
 })

});
