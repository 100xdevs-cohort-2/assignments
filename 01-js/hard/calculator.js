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
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  // Method to clear the result and set it to zero
  clear() {
    this.result = 0;
  }

  // Method to get the current result value
  getResult() {
    return this.result;
  }

  // Method to evaluate and set the result based on a mathematical expression
  calculate(expression) {
    // Clean the expression by removing multiple continuous spaces and trimming
    const cleanedExpression = expression.replace(/\s+/g, " ").trim();

    // Check for invalid characters using a regular expression
    if (!/^[0-9\s\+\-\*\/\(\)\.]+$/.test(cleanedExpression)) {
      throw new Error("Invalid characters in the expression");
    }

    try {
      // Use the Function constructor to create a function that returns the result
      const calculationFunction = new Function("return " + cleanedExpression);

      // Evaluate the expression and get the result
      const result = calculationFunction();

      // Check if the result is a finite number and not NaN
      if (!isFinite(result) || isNaN(result)) {
        throw new Error("Invalid expression");
      }

      // Set the calculator's result to the calculated value
      this.result = result;
    } catch (error) {
      // If there's an error during evaluation, throw an "Invalid expression" error
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
