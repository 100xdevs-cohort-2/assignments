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
    const sanitizedExpression = expression.replace(/\s+/g, ''); // Remove spaces
    const tokens = sanitizedExpression.match(/(\d+\.?\d*|[-+*/()])/g);

    if (!tokens || tokens.join('') !== sanitizedExpression) {
      throw new Error("Invalid expression");
    }

    const stack = [];
    const operators = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    const applyOperator = () => {
      const operator = operators.pop();
      const b = stack.pop();
      const a = stack.pop();

      switch (operator) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          if (b === 0) {
            throw new Error("Cannot divide by zero");
          }
          stack.push(a / b);
          break;
      }
    };

    for (const token of tokens) {
      if (/^\d+(\.\d+)?$/.test(token)) {
        stack.push(parseFloat(token));
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length > 0 && operators[operators.length - 1] !== '(') {
          applyOperator();
        }
        if (operators.length === 0) {
          throw new Error("Invalid expression: Unmatched closing parenthesis");
        }
        operators.pop(); // Pop '('
      } else {
        while (
          operators.length > 0 &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          applyOperator();
        }
        operators.push(token);
      }
    }

    while (operators.length > 0) {
      applyOperator();
    }

    if (operators.length > 0) {
      throw new Error("Invalid expression: Unmatched opening parenthesis");
    }

    this.result = stack.pop();
  }
}

module.exports = Calculator;
