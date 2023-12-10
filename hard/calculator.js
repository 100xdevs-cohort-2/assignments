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
  result = 0;

  add(num1) {
    this.result = this.result + num1;
  }

  subtract(num1) {
    this.result = this.result - num1;
  }

  multiply(num1) {
    this.result = this.result * num1;
  }

  divide(num1) {
    if (num1 > 0) {
      this.result = this.result / num1;
    } else {
      throw new Error("Number Should be greater than 0");
    }
  }

  clear() {
    this.result = 0;
  }

  calculate(expression) {
    expression = expression.replace(/\s\s+/g, "");
    if (expression.includes("/ 0")) {
      throw new Error();
    }

    try {
      this.result = eval(expression);
      return this.result
    } catch (error) {
      throw new Error("Invalid Expression");
    }
  }

  // getter

  getResult() {
    return this.result;
  }
}

// const result = Calculator.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7');
// console.log(result); // Output the result of the expression

// let calc = new Calculator();
// calc.calculate("10/0");
// console.log(calc.getResult());

module.exports = Calculator;
