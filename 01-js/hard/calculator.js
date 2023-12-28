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
    // this.stack = [];
  }
  add(x) {
    this.res = this.res + x;
  }
  subtract(x) {
    this.res = this.res - x;
  }
  divide(x) {
    if (x == 0) throw new Error();
    this.res = this.res / x;
  }
  multiply(x) {
    this.res = this.res * x;
  }
  clear() {
    this.res = 0;
  }
  calculate(expression) {
    expression = expression.replace(/\s/g, "");
    let ans = eval(expression);
    if (!isFinite(ans)) {
      throw new Error();
    }
    this.res = ans;
  }
  getResult() {
    return this.res;
  }
}
// let calc = new Calculator();
// calc.calculate('10/0');
// console.log(calc.getResult());
module.exports = Calculator;
