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

  add(num) {
    this.result += num;
  }

  subtract(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
    ``;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Validate the expression for non-numerical characters
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      throw new Error("Invalid expression");
    }

    // Remove extra spaces from the expression and evaluate it using 'eval'
    const sanitizedExpression = expression.replace(/\s+/g, "");

    // Check for division by zero
    if (/\/\s*0(?!\.)/.test(sanitizedExpression)) {
      throw new Error("Division by zero");
    }

    try {
      this.result = eval(sanitizedExpression);
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

// Create an instance of the Calculator class
const calculator = new Calculator();

// Test the methods
calculator.add(6);
calculator.subtract(2);
calculator.multiply(4);
calculator.divide(2);
console.log(calculator.getResult()); // Output: 8

// Test calculate method
try {
  calculator.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
  console.log(calculator.getResult()); // Output: 20
} catch (error) {
  console.error(error.message); // Should not throw an error in this case
}

module.exports = Calculator;
