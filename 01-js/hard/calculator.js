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
  add(nums) {
    this.result += nums;
  }
  subtract(nums) {
    this.result -= nums;
  }
  multiply(nums) {
    this.result = this.result * nums;
  }
  divide(nums) {
    if (nums != 0) this.result = this.result / nums;
    else throw new Error("Not allowed");
  }
  getResult() {
    return this.result;
  }
  clear() {
    this.result = 0;
  }
  calculate(expression) {
    let cleanedExpression = expression?.replace(/[^.0-9+\-*/(){}]/g, "");
    this.result = eval(cleanedExpression);
    if (!isFinite(this.result)) throw new Error("Cant divide by 0");
  }
}

module.exports = Calculator;
