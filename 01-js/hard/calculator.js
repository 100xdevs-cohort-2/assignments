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

function parseNumber(num) {
  const number = parseFloat(num); 

  if(isNaN(number))
    throw new Error(`${num} is invalid number`); 
  
  return number;
}

class Calculator {
  constructor(result = 0) {
    this.result = result;
  }

  add(num) {
    this.result += parseNumber(num)
  }  

  subtract(num) { 
    this.result -= parseNumber(num)
  }

  multiply(num) {
    this.result *= parseNumber(num)
  }

  divide(num) {
    const divisor = parseNumber(num)

    if(divisor === 0)
      throw new Error("Can't divided by zero.")

    this.result /= divisor;
  }

  clear() { 
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    const cleanedExpression = str.replace(/\s+/g, '');

    if(!/^[0-9+\-*/().]+$/.test(cleanedExpression))
      throw new Error("Invalid Characters !!");

    try {
      if(cleanedExpression.includes('/0')) {
        throw new Error("Can't divide by zero !!");
      }

      this.result = eval(cleanedExpression)

    } catch (error) {
      throw error;
    }
  }
}

module.exports = Calculator;
