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
    // Initialize result variable to 0
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

  // Method to clear the result (set it to 0)
  clear() {
    this.result = 0;
  }

  // Method to get the current value of the result
  getResult() {
    return this.result;
  }

  // Method to perform arithmetic operations based on a string expression
  calculate(expression) {
    // Remove continuous spaces and trim the expression
    const cleanedExpression = expression.replace(/\s+/g, "").trim();

    // Check for invalid characters in the expression
    if (!/^[0-9+\-*/(). ]+$/.test(cleanedExpression)) {
      throw new Error("Invalid characters in the expression");
    }

    console.log(cleanedExpression);

    // Check for division by zero
    if (cleanedExpression.includes("/0")) {
      throw new Error("Invalid expression");
    }

    try {
      // Use eval to calculate the result of the expression
      this.result = eval(cleanedExpression);
    } catch (error) {
      // Catch and rethrow any evaluation errors
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
