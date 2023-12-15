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
  constructor(result) {
    this.result = 0;
  }

  add(num) {
    this.result = this.result + num;
    return this.result
  }

  subtract(num) {
    this.result = this.result - num;
    return this.result
  }

  multiply(num) {
    this.result = this.result * num;
    return this.result
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by 0");
    }
    this.result = this.result / num ;
    return this.result
  }

  clear() {
    this.result = 0;
    return this.result
  }

  getResult() {
    return this.result;
  }


  calculate(exp) {
    const cleanExp = exp.replace(/\s+/g, "").trim();

    try {
      this.result = eval(cleanExp);
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error("Invalid expression syntax");
      } else if (error instanceof TypeError) {
        throw new Error("Invalid expression type");
      } else {
        throw new Error(`Error`);
      }
    }
  }
}

module.exports = Calculator;
