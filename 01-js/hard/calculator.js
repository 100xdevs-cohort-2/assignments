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

  calculate(input) {
    console.log("check");
    if (typeof input !== "string") return "Not valid input type";
    input = input.replace(/\s/g, "");

    if (!this.isValidExpression(input)) return "Invalid expression";

    console.log(this.parseExpression(input));
    // return this.evaluateExpression(this.parseExpression(input));
  }

  evaluateExpression(input) {
    
  }

  parseExpression(input) {
    const tokens = [];
    let currentToken = "";

    // separating numbers and operators in array
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "." || this.isDigit(input[i])) {
        currentToken += input[i];
      } else if (this.isOperator(input[i]) || this.isParenthesis(input[i])) {
        if (currentToken !== "") {
          tokens.push(currentToken);
          currentToken = "";
        }
        tokens.push(input[i]);
      }
    }

    // last char number
    if (currentToken !== "") tokens.push(currentToken);
    return tokens;
  }

  isDigit(input) {
    const digitRegex = /\d/;
    return digitRegex.test(input);
  }

  isOperator(input) {
    return /[\+\-\*\/]/.test(input);
  }

  isParenthesis(input) {
    return /[()]/.test(input);
  }

  add(input) {
    if (typeof input !== "number") return;
    this.result = this.result + input;
  }

  subtract(input) {
    if (typeof input !== "number") return;
    this.result = this.result - input;
  }

  multiply(input) {
    if (typeof input !== "number") return;
    this.result = this.result * input;
  }

  divide(input) {
    if (typeof input !== "Number") return;
    this.result = this.result / input;
  }

  isValidExpression(expression) {
    const validChars = /^[0-9+\-*/().]+$/;
    return validChars.test(expression);
  }
}

new Calculator().calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");

module.exports = Calculator;
