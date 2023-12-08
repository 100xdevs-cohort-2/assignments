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
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const cleanedExpression = expression.replace(/\s+/g, '').replace(/[^0-9+\-*/().a-zA-Z]/g, '');
    if (/[^0-9+\-*/().]/.test(cleanedExpression)) {
      throw new Error("Invalid character in the expression");
    }
    const checkBalancedParentheses = (expression) => {
      const stack = [];
      for (const char of expression) {
        if (char === '(') {
          stack.push(char);
        } else if (char === ')') {
          if (stack.length === 0) {
            throw new Error("Unbalanced parentheses in the expression");
          }
          stack.pop();
        }
      }
      return stack.length === 0;
    };

    if (!checkBalancedParentheses(cleanedExpression)) {
      throw new Error("Unbalanced parentheses in the expression");
    }

    const tokens = cleanedExpression.match(/(\d+(\.\d+)?|\+|\-|\*|\/|\(|\))/g);
    const values = [];
    const operators = [];

    const isHigherPrecedence = (op1, op2) => ({'+':1, '-':1, '*':2, '/':2}[op1] >= ({'+':1, '-':1, '*':2, '/':2}[op2] || 0));

    const applyOperator = (operator, values) => {
      const b = values.pop();
      const a = values.pop();

      switch (operator) {
        case '+':
          values.push(a + b);
          break;
        case '-':
          values.push(a - b);
          break;
        case '*':
          values.push(a * b);
          break;
        case '/':
          if (b === 0) {
            throw new Error("Cannot divide by zero");
          }
          values.push(a / b);
          break;
      }
    };

    for (const token of tokens) {
      if (/^-?\d+(\.\d+)?$/.test(token)) {
        values.push(parseFloat(token));
      } else if (['+', '-', '*', '/'].includes(token)) {
        while (
          operators.length > 0 &&
          isHigherPrecedence(operators[operators.length - 1], token)
        ) {
          applyOperator(operators.pop(), values);
        }
        operators.push(token);
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length > 0 && operators[operators.length - 1] !== '(') {
          applyOperator(operators.pop(), values);
        }
        operators.pop();
      } else {
        throw new Error(`Invalid character '${token}' in the expression`);
      }
    }

    while (operators.length > 0) {
      applyOperator(operators.pop(), values);
    }

    if (values.length !== 1) {
      throw new Error("Invalid expression");
    }

    this.result = values[0];
  }
}

module.exports = Calculator;
