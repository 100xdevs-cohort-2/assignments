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
    this.res = 0;
  }

  add(num) {
    this.res += num;
  }

  subtract(num) {
    this.res -= num;
  }

  multiply(num) {
    this.res *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.res /= num;
  }

  clear() {
    this.res = 0;
  }

  getResult() {
    return this.res;
  }

  calculate(expression) {
    expression = expression.replace(/\s+/g, "");

    const validCharsRegex = /^[0-9+\-*/().\s]+$/;

    if (!validCharsRegex.test(expression)) {
      throw new Error("calculate expression with invalid characters");
    }

    try {
      this.res = eval(expression);
      if (!isFinite(this.res)) throw new Error("Cannot divide by zero");
    } catch (e) {
      throw new Error("Invalid expression");
    }
  }
}

// function check(expression) {
//   expression = expression.replace(/\s+/g, "");

//   const validCharsRegex = /^[0-9+\-*/().\s]+$/;

//   // Check for invalid characters
//   if (!validCharsRegex.test(expression)) {
//     throw new Error("calculate expression with invalid characters");
//   }

//   try {
//     let ans = eval(expression);
//     if (isFinite(ans)) throw new Error("Cannot divide by zero");
//   } catch (e) {
//     throw new Error("nvalid expression");
//   }
// }
// check("10 * (2 + 3) + xyz");

module.exports = Calculator;
