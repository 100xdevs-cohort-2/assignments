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

  getResult() {
    return this.result;
  }

  add(value) {
    this.result += value;
  }

  subtract(value) {
    this.result -= value;
  }

  multiply(value) {
    this.result *= value;
  }

  divide(value) {
    if (value === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result /= value;
  }

  clear() {
    this.result = 0;
  }

  calculate(expression) {
    const cleanExp = expression.replace(/\s/g, '');

    if (!/^[0-9+\-*/().]+$/.test(cleanExp)) {
      throw new Error('Invalid expression');
    }

    const operatorStack = [];
    const operandStack = [];

    for (let i = 0; i < cleanExp.length; i++) {
      const char = cleanExp[i];

      if (char === '(') {
        operatorStack.push(char);
      } else if (char === ')') {
        if (!operatorStack.includes('(')) {
          throw new Error('Invalid parentheses');
        }
        while (operatorStack.length !== 0 && operatorStack[operatorStack.length - 1] !== '(') {
          this.performOperation(operandStack, operatorStack.pop());
        }
        if (operatorStack.pop() !== '(') {
          throw new Error('Invalid parentheses');
        }
      } else if ('+-*/'.includes(char)) {
        while (operatorStack.length !== 0 && this.operatorPrecedence(char) <= this.operatorPrecedence(operatorStack[operatorStack.length - 1])) {
          this.performOperation(operandStack, operatorStack.pop());
        }
        operatorStack.push(char);
      } else if (this.isNumber(char)) {
        let num = parseInt(char);

        while (i + 1 < cleanExp.length && this.isNumber(cleanExp[i + 1])) {
          num = num * 10 + parseInt(cleanExp[++i]);
        }

        if (cleanExp[i + 1] === '.') {
          let dec = '.';
          let j = i + 2;

          while (j < cleanExp.length && this.isNumber(cleanExp[j])) {
            dec += cleanExp[j];
            i = j;
            j++;
          }

          num += parseFloat(dec);
        }
        operandStack.push(num);
      }
    }

    if (operatorStack.includes('(') || operatorStack.includes(')')) {
      throw new Error('Invalid parentheses');
    }

    while (operatorStack.length !== 0) {
      this.performOperation(operandStack, operatorStack.pop());
    }

    this.result = operandStack.pop();
  }

  isNumber(char) {
    return /^[0-9]+$/.test(char);
  }

  operatorPrecedence(opt) {
    if (opt === '+' || opt === '-') return 1;
    if (opt === '*' || opt === '/') return 2;
    return 0;
  }

  performOperation(operandStack, operator) {
    const operand2 = operandStack.pop();
    const operand1 = operandStack.pop();

    switch (operator) {
      case '+':
        operandStack.push(operand1 + operand2);
        break;
      case '-':
        operandStack.push(operand1 - operand2);
        break;
      case '*':
        operandStack.push(operand1 * operand2);
        break;
      case '/':
        if (operand2 === 0) {
          throw new Error('Cannot divide by zero');
        }
        operandStack.push(operand1 / operand2);
        break;
    }
  }
}

module.exports = Calculator;
