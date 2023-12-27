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
    // Tokenize the expression
    const tokens = expression.match(/(?:\d+(?:\.\d+)?|[+\-*/()])/g);

    // Check for invalid characters in the tokens
    if (!tokens.every(token => /^(\d+(?:\.\d+)?)|[+\-*/()]$/.test(token))) {
      throw new Error("Invalid characters in the expression");
    }

    // Recursive descent parser to evaluate the expression
    const parseExpression = () => {
      let value = parseTerm();

      while (tokens.length > 0 && (tokens[0] === '+' || tokens[0] === '-')) {
        const operator = tokens.shift();
        const term = parseTerm();

        if (operator === '+') {
          value += term;
        } else {
          value -= term;
        }
      }

      return value;
    };

    const parseTerm = () => {
      let value = parseFactor();

      while (tokens.length > 0 && (tokens[0] === '*' || tokens[0] === '/')) {
        const operator = tokens.shift();
        const factor = parseFactor();

        if (operator === '*') {
          value *= factor;
        } else {
          if (factor === 0) {
            throw new Error("Division by zero is not allowed");
          }
          value /= factor;
        }
      }

      return value;
    };

    const parseFactor = () => {
      if (tokens[0] === '(') {
        tokens.shift(); // Consume '('
        const value = parseExpression();
        if (tokens[0] !== ')') {
          throw new Error("Mismatched parentheses");
        }
        tokens.shift(); // Consume ')'
        return value;
      } else {
        return parseFloat(tokens.shift());
      }
    };

    // Call the recursive descent parser to get the result
    const result = parseExpression();

    // Check if there are remaining tokens (invalid expression)
    if (tokens.length > 0) {
      throw new Error("Invalid expression");
    }

    // Update the result variable
    this.result = result;
  }
}

// Example usage
const calculator = new Calculator();
calculator.add(5);
calculator.multiply(2);
calculator.subtract(3);
console.log("Result:", calculator.getResult());

calculator.clear();
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");

try {
  console.log("Result after calculation:", calculator.getResult());
} catch (error) {
  console.error("Error:", error.message);
}


module.exports = Calculator;
