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

  add(x) {
    this.result += x;
  }

  subtract(x) {
    this.result -= x;
  }

  multiply(x) {
    this.result *= x;
  }

  divide(x) {
    if (x === 0) {
      throw new Error(`Can not divide by zero`);
    }
    this.result /= x;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    expression = expression.replaceAll(" ", "");
    const validCharacters = /^[\d\s\+\-\*\/().]+$/;         
    /* a+: Matches one or more occurrences of the character 'a'. 
     a\+: Matches the character 'a' followed by the literal character '+'.
     \d: Matches any digit (0-9).
     \s: Matches any whitespace character (e.g., space, tab).  */

    if (!validCharacters.test(expression)) {
      throw new Error("Invalid characters in the expression");
    }

    try {
      const res = eval(expression);
      if (!isFinite(res)) {
        throw new Error(`Can not divide by zero`);
      }
      this.result = res;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
