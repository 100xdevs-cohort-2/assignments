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
  // Creat constructor for calculator intial the result value
  constructor() {
    this.result = 0;
  }

  // This function is for adding the given value and set it to result variable
  add(num) {
    return (this.result += num);
  }

  // This function is for subtract the given value and set it to result variable
  subtract(num) {
    return (this.result -= num);
  }

  // This function is for multiply the given value and set it to result variable
  multiply(num) {
    return (this.result *= num);
  }

  // This function is for divide the given value and set it to result variable
  // and if the value is isNan and isFinite the give a exception
  divide(num) {
    let divResult = this.result;
    let value = (divResult /= num);
    if (isNaN(value) || !isFinite(value)) {
      throw new Error();
    } else {
      return (this.result = value);
    }
  }

  // This function is for set the result value as 0
  clear() {
    return (this.result = 0);
  }

  // This function is return the result value
  getResult() {
    return this.result;
  }

  //Here i used the Eval function which is inbuild js fuction to work
  // on expression of arithmetic-expression.
  calculate(expression) {
    let value = eval(expression);
    if (isNaN(value) || !isFinite(value)) {
      throw new Error();
    }
    return (this.result = value);
  }
}

module.exports = Calculator;
