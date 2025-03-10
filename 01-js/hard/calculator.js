/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class calculator {
  constructor() {
    this.result = 0; // intilazied the result with zero 
  }
  add(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('Invalid number');
    }
    this.result += number;
  }
  subtract(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('Invalid number');
    }
    this.result -= number;
  }
  multiply(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('Invalid number');
    }
    this.result *= number;
  }
  divide(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('Invalid number');
    }
    if (number === 0) {
      throw new Error('Cannot divide by Zero');
    }
    this.result /= number;
  }

  // so now for clearing it 
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }

  calculate(expression) {
    // so now first remove the all space between all 
    expression = expression.replace(/\s+/g, '')
    // so now here check for any number like abc 
    if (!/^[0-9+\-*/().]+$/.test(expression)) {
      throw new Error('Invalid characters in expression');
    }
    // so now checking whether paranthesis is blanced or not 
    if(!this.isBlanced(expression)){
      throw new Error('Unbalanced parentheses in expression');
    }
    // so now for evaluting here 
    try{
      const evaluted = Function('"use strict"; return (' + expression + ')')(); // so this will evaluete the value 
      if(!isFinite(evaluted)){
        throw new Error('Cannot divide by zero')
      }
      // so now updating the value in the result 
      this.result = evaluted;
    }catch(e){
      throw new Error('Error evaluting expression')
    }
  }
  isBlanced(expression){
    let blance = 0;
    for(let char of expression){
      if(char === '(') blance++;
      if(char === ')') blance--;
      if(blance < 0) return false;
    }
    // so now return 
    return blance === 0;
  }
}

module.exports = calculator;

