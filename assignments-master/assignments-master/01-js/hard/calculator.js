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
    this.result += parseFloat(number);
  }

  subtract(number) {
    this.result -= parseFloat(number);
  }

  multiply(number) {
    this.result *= parseFloat(number);
  }

  divide(number) {
    const divisor = parseFloat(number);
    if (divisor === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= divisor;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const tokens = expression.replace(/\s+/g, ' ').trim().split(/\s+/);

    const stack = [];
    const operators = ['+', '-', '*', '/'];

    for (let token of tokens) {
      if (operators.includes(token)) {
        stack.push(token);
      } else if (token === '(') {
        stack.push(token);
      } else if (token === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          this.applyOperator(stack.pop());
        }
        stack.pop();
      } else if (!isNaN(parseFloat(token))) {
        this.add(token);
      } else {
        throw new Error(`Invalid input: ${token}`);
      }
    }

    while (stack.length > 0) {
      this.applyOperator(stack.pop());
    }
  }

  applyOperator(operator) {
    const b = parseFloat(this.result);
    const a = parseFloat(stack.pop());
    switch (operator) {
      case '+':
        this.result = a + b;
        break;
      case '-':
        this.result = a - b;
        break;
      case '*':
        this.result = a * b;
        break;
      case '/':
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        this.result = a / b;
        break;
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
  }

}

module.exports = Calculator;
