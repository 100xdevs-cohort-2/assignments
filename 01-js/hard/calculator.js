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
  constructor(result = 0) {
    this.result = result;
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result = this.result / num;
  }

  multiply(num) {
    this.result *= num;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  calculate(expression) {
    const tokens = expression
      .replace(/\s+/g, '')
      .match(/(\d+\.\d+|\d+|[+\-*/()])/g);
  
    if (!tokens || !this.isExpressionValid(tokens)) {
      throw new Error("Invalid expression.");
    }

    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };

    const applyOperation = (operator, operand1, operand2) => {
      switch (operator) {
        case '+':
          return operand1 + operand2;
        case '-':
          return operand1 - operand2;
        case '*':
          return operand1 * operand2;
        case '/':
          return operand1 / operand2;
        default:
          return 0;
      }
    };

    

    const stack = [];
    const postfix = [];

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === '/' && tokens[i + 1] === '0') {
        throw new Error("Division by zero is not allowed.");
      }
    }

    for (const token of tokens) {
      
      if (!isNaN(token)) {
        postfix.push(parseFloat(token));
      } else if (token === '(') {
        stack.push(token);
      } else if (token === ')') {
        while (stack.length && stack[stack.length - 1] !== '(') {
          postfix.push(stack.pop());
        }
        stack.pop();
      } else {
        while (
          stack.length &&
          precedence[token] <= precedence[stack[stack.length - 1]]
        ) {
          postfix.push(stack.pop());
        }
        stack.push(token);
      }
    }

    while (stack.length) {
      postfix.push(stack.pop());
    }

    const resultStack = [];

    
    

  try {
    for (const token of postfix) {
      if (!isNaN(token)) {
        resultStack.push(token);
      } else {
        const operand2 = resultStack.pop();
        const operand1 = resultStack.pop();
        if (operand1 === undefined || operand2 === undefined) {
          throw new Error("Invalid expression.");
        }
        resultStack.push(applyOperation(token, operand1, operand2));
      }
    }
  } catch (error) {
    throw new Error("Invalid expression.");
  }

  if (resultStack.length !== 1) {
    throw new Error("Invalid expression.");
  }

    this.result = resultStack[0];
  }

  isExpressionValid(tokens) {
    const parenStack = [];
  
    for (let token of tokens) {
      if (token === '(') {
        parenStack.push(token);
      } else if (token === ')') {
        if (parenStack.length === 0) {
          return false; // Unbalanced parentheses
        }
        parenStack.pop();
      }
    }
  
    return parenStack.length === 0;
  }
  
}

module.exports = Calculator;
