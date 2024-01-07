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
  divide(number) {
    if (number <= 0) {
      throw new Error("Number should be more than 0");
    }
    this.result /= number;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }


  // below piece of code needs my understanding
  calculate(expression) {
    try {
      // Check if the expression contains division by zero
      if (/\/\s*0/.test(expression)) {
        throw new Error("Division by zero");
      }

      // Remove extra whitespaces from the expression
      expression = expression.replace(/\s+/g, " ");

      // Split the expression into tokens using space as a delimiter, and filter out any empty tokens
      let tokens = expression.split(" ").filter(Boolean);

      // Evaluate the expression using the 'eval' function and store the result in the 'value' variable
      let value = eval(tokens.join(" "));

      // Assign the calculated value to the 'result' property of the object (assuming 'this' refers to an object)
      this.result = value;

      // Return the calculated value
      return value;
    } catch (error) {
      // If an error occurs during the execution (e.g., division by zero or invalid expression), throw a new error
      throw new Error("Invalid Expression");
    }
  }
}

module.exports = Calculator;
