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

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove continuous spaces and validate the expression
    const cleanedExpression = expression.replace(/\s+/g, '').match(/^[\d+\-*/().]+$/);

    if (!cleanedExpression) {
      throw new Error("Invalid expression");
    }

    try {
      // Replace eval with a more robust expression parser
      // For simplicity, let's use Function constructor
      const calculateFunction = new Function(`return ${cleanedExpression[0]}`);
      
      // Execute the function and check for division by zero
      const result = calculateFunction();
      if (!isFinite(result)) {
        throw new Error("Division by zero");
      }

      this.result = result;
    } catch (error) {
      throw new Error("Error in evaluating the expression");
    }
  }
}

module.exports = Calculator;