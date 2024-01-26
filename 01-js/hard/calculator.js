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

  add(num) {
    if (!isNaN(num)) {
      this.result += num;
    } else {
      throw new Error('Invalid input');
    }
  }

  subtract(num) {
    if (!isNaN(num)) {
      this.result -= num;
    } else {
      throw new Error('Invalid input');
    }
  }

  multiply(num) {
    if (!isNaN(num)) {
      this.result *= num;
    } else {
      throw new Error('Invalid input');
    }
  }

  divide(num) {
    if (!isNaN(num)) {
      if (num !== 0) {
        this.result /= num;
      } else {
        throw new Error('Division by zero error');
      }
    } else {
      throw new Error('Invalid input');
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const tokens = expression
      .replace(/\s+/g, '')
      .match(/(\d+(\.\d+)?|\+|\-|\*|\/|\(|\))/g);
  
    if (!tokens || tokens.length === 0) {
      throw new Error('Invalid input');
    }
  
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    const evaluate = (operators, operands) => {
      const operator = operators.pop();
      const rightOperand = operands.pop();
      const leftOperand = operands.pop();
    
      let result;
      switch (operator) {
        case '+':
          result = leftOperand + rightOperand;
          break;
        case '-':
          result = leftOperand - rightOperand;
          break;
        case '*':
          result = leftOperand * rightOperand;
          break;
        case '/':
          if (rightOperand === 0) {
            throw new Error('Division by zero error');
          }
          result = leftOperand / rightOperand;
          break;
        default:
          throw new Error('Invalid operator');
      }
      
      operands.push(result); // Push the calculated result back to the operands array
    };
    
  
    const operators = [];
    const operands = [];
  
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
  
      if (!isNaN(token)) {
        operands.push(parseFloat(token));
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length > 0 && operators[operators.length - 1] !== '(') {
          evaluate(operators, operands);
        }
        if (operators.length === 0) {
          throw new Error('Invalid expression');
        }
        operators.pop();
      } else {
        while (
          operators.length > 0 &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          evaluate(operators, operands);
        }
        operators.push(token);
      }
    }
  
    while (operators.length > 0) {
      if (operators[operators.length - 1] === '(') {
        throw new Error('Invalid expression');
      }
      evaluate(operators, operands);
    }
  
    if (operands.length !== 1 || operators.length !== 0) {
      throw new Error('Invalid expression');
    }
  
    this.result = operands[0];
    return this.result;
  }
}

module.exports = Calculator;
