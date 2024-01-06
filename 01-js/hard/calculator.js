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
    if (number == 0) {
      throw new Error();
    } else {
      this.result /= number;
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    // Clean up the expression by removing spaces and checking for invalid characters
    let updatedExpression = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/i)) {
        // Throw an error for invalid non-numerical characters
        throw new Error();
      }
      if (str[i] != " ") {
        updatedExpression = updatedExpression + str[i];
      }
    }
    if (updatedExpression.includes("/0")) {
      // Throw an error if attempting to divide by zero
      throw new Error();
    }
    // Evaluate the expression using eval and update the result
    this.result = eval(str);
  }
}

// const calc = new Calculator();
// calc.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
// console.log(calc.getResult());

module.exports = Calculator;
