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
    // Initialize the result variable
    this.result = 0;
  }

  // Method to add a number to the result
  add(number) {
    this.result += number;
  }

  // Method to subtract a number from the result
  subtract(number) {
    this.result -= number;
  }

  // Method to multiply the result by a number
  multiply(number) {
    this.result *= number;
  }

  // Method to divide the result by a number
  divide(number) {
    if (number === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result /= number;
  }

  // Method to clear the result
  clear() {
    this.result = 0;
  }

  // Method to get the current result
  getResult() {
    return this.result;
  }

  // Method to calculate the result from a string expression
  calculate(expression) {
    // Remove continuous spaces and trim the expression
    const cleanedExpression = expression.replace(/\s+/g, " ").trim();

    // Validate input for non-numerical characters, allowing decimals
    if (!/^[\d\s\+\-\*\/\(\).]+$/.test(cleanedExpression)) {
      throw new Error("Invalid characters in the expression.");
    }

    // Use eval to calculate the result from the expression
    try {
      this.result = eval(cleanedExpression);
      if (cleanedExpression.includes('/ 0')) {
        throw new Error("Cannot divide by zero.");
      }
    } catch (error) {
      throw new Error("Invalid expression.");
    }
  }
}

module.exports = Calculator;
