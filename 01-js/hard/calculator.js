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
    this.result = result;
  }
  add(number) {
    this.result += number;
  }
  substract(number) {
    this.result -= number;
  }
  multiply(number) {
    this.result *= number;
  }
  divide(number) {
    if (number !== 0) this.result /= number;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(exp) {
    let queue = [];
    const regex = /\+|\-|\/|\*|\(|\)|/g;
    for (const op of exp) {
      if (Number.isInteger(op)) {
        queue.push(op);
      } else if (op.search(regex) !== -1) {
        queue.push(op);
      }
    }
    let isPrevNumber = false;
    let numString = "";
    let firstOperand;
    let secondOperand;
    let operator;
    let total = 0;
    while (queue.length !== 0) {
      const item = queue.shift();
      if (Number.isInteger(item)) {
        if (isPrevNumber) {
          numString += item;
        } else {
          numString = item;
          isPrevNumber = true;
        }
      } else {
        if (!operator) {
          operator = item;
        }
        if (!firstOperand) {
          firstOperand = parseInt(numString);
          numString = "";
        }
        if (!secondOperand) {
          firstOperand = parseInt(numString);
          numString = "";
        }
        isPrevNumber = false;
        if (firstOperand && secondOperand && operator) {
          if (operator === "+") queue.push(firstOperand + secondOperand);
          else if (operator === "-") queue.push(firstOperand - secondOperand);
          else if (operator === "/") queue.push(firstOperand / secondOperand);
          else if (operator === "*") queue.push(firstOperand * secondOperand);
        }
      }
    }
  }
}

module.exports = Calculator;
