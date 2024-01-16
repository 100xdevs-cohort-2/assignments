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
  result;

  add(num){
    this.result += num;
  }

  subtract(num){
    this.result -= num;
  }
  multiply(num){
    this.result *= num;
  }

  divide(num){
    if (num === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.result /= num;
  }
  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }

  calculate(expression) {
    // Validate expression
    if (!/^[\d\s\+\-\*\/\(\)]+$/.test(expression)) {
      throw new Error('Invalid expression');
    }

    // Tokenize the expression
    const tokens = expression.match(/\d+|\S/g);

    // Initialize
    this.clear();
    let index = 0;

    // Helper functions
    const getNextToken = () => tokens[index++];
    const peekNextToken = () => tokens[index];
    const parseNumber = () => parseFloat(getNextToken());

    // Parse the expression
    const parseExpression = () => {
      let term = parseTerm();
      while (peekNextToken() === '+' || peekNextToken() === '-') {
        const operator = getNextToken();
        const nextTerm = parseTerm();
        if (operator === '+') {
          this.add(nextTerm);
        } else {
          this.subtract(nextTerm);
        }
      }
      return term;
    };

    const parseTerm = () => {
      let factor = parseFactor();
      while (peekNextToken() === '*' || peekNextToken() === '/') {
        const operator = getNextToken();
        const nextFactor = parseFactor();
        if (operator === '*') {
          this.multiply(nextFactor);
        } else {
          this.divide(nextFactor);
        }
      }
      return factor;
    };

    const parseFactor = () => {
      const token = getNextToken();
      if (token === '(') {
        const expressionValue = parseExpression();
        if (getNextToken() !== ')') {
          throw new Error('Mismatched parentheses');
        }
        return expressionValue;
      } else if (!isNaN(token)) {
        return parseFloat(token);
      } else {
        throw new Error('Invalid token');
      }
    };

    // Start parsing
    this.result = parseExpression();

    // Check for division by zero
    if (!isFinite(this.result)) {
      throw new Error('Invalid result');
    }

    return this.result;
  }

  constructor(){
    this.result = 0;
  }
}

module.exports = Calculator;
