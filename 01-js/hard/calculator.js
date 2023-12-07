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
    
    const sanitizedExpression = expression.replace(/\s+/g, '');


    if (!/^[0-9+\-*/().]+$/.test(sanitizedExpression)) {
      throw new Error("Invalid expression");
    }

    try {
      const tokens = this.tokenize(sanitizedExpression);
      const parsedResult = this.parseExpression(tokens);
      this.result = parsedResult;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }

  tokenize(expression) {
  
    return expression.match(/\d+|\+|\-|\*|\/|\(|\)/g);
  }

  parseExpression(tokens) {
    let index = 0;

    function parseNumber() {
      return parseFloat(tokens[index++]);
    }

    function parseTerm() {
      let value = parseFactor();

      while (index < tokens.length && (tokens[index] === '*' || tokens[index] === '/')) {
        const operator = tokens[index++];
        const nextValue = parseFactor();

        if (operator === '*') {
          value *= nextValue;
        } else {
          value /= nextValue;
        }
      }

      return value;
    }

    function parseFactor() {
      if (tokens[index] === '(') {
        index++;
        const value = parseExpression(tokens);
        if (tokens[index++] !== ')') {
          throw new Error("Mismatched parentheses");
        }
        return value;
      } else {
        return parseNumber();
      }
    }

    function parseExpression() {
      let value = parseTerm();

      while (index < tokens.length && (tokens[index] === '+' || tokens[index] === '-')) {
        const operator = tokens[index++];
        const nextValue = parseTerm();

        if (operator === '+') {
          value += nextValue;
        } else {
          value -= nextValue;
        }
      }

      return value;
    }

    return parseExpression();
  }
}

module.exports = Calculator;



