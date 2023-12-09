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
  static _VALIDATOR_REGEX = /[^(\d+\.\d+|\d+|\+|\-|\*|\/|\(|\)|\s|\t)]/g;
  static _MATCHER_REGEX = /(\d+\.\d+|\d+|\+|\-|\*|\/|\(|\))/g;
  static _PRECEDENCE = { '+': 1, '-': 1, '*': 2, '/': 2 };

  constructor(result) {
    this.result = result || 0;
  }

  add(anumber) {
    this.result += anumber;
  }

  subtract(anumber) {
    this.result -= anumber;
  }

  multiply(anumber) {
    this.result *= anumber;
  }

  divide(anumber) {
    if (anumber < 1) throw Error();
    this.result /= anumber;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(infixExpression) {
    if (Calculator._VALIDATOR_REGEX.test(infixExpression)) throw Error();
    const postfixExpression = this.convertinInfixToPostfix(infixExpression);
    this.result = this.evaluatePostfixExpression(postfixExpression);
  }

  convertinInfixToPostfix(infixExpression) {
    const tokens = infixExpression.match(Calculator._MATCHER_REGEX);
    const outputBuffer = [];
    const stack = [];
    const paranthesisStack = [];

    for (const token of tokens) {
      if (!isNaN(token)) {
        outputBuffer.push(parseFloat(token));
      } else if (token === '(') {
        stack.push(token);
        paranthesisStack.push(token);
      } else if (token === ')') {
        if (paranthesisStack.length === 0) {
          throw Error();
        }
        while (stack.length && stack[stack.length - 1] !== '(') {
          outputBuffer.push(stack.pop());
        }
        stack.pop();
        paranthesisStack.pop();
      } else {
        while (
          stack.length &&
          Calculator._PRECEDENCE[stack[stack.length - 1]] >=
            Calculator._PRECEDENCE[token]
        ) {
          outputBuffer.push(stack.pop());
        }
        stack.push(token);
      }
    }

    while (stack.length) {
      const token = stack.pop();
      outputBuffer.push(token);
    }

    if (paranthesisStack.length > 0) {
      throw Error();
    }

    return outputBuffer;
  }

  evaluatePostfixExpression(expression) {
    const stack = [];
    for (const token of expression) {
      if (!isNaN(token)) {
        stack.push(token);
      } else {
        const b = stack.pop();
        const a = stack.pop();

        switch (token) {
          case '*':
            stack.push(a * b);
            break;
          case '/':
            if (b < 1) throw Error();
            stack.push(a / b);
            break;
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          default:
          // TODO: think what can wrong, if can?
        }
      }
    }
    return stack.pop();
  }
}

module.exports = Calculator;
