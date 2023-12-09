const { isNumeric, isAlpha, removeSpace } = require("../../utility/string");

const operators = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
}

const getPrecedence = (operator) => {
  if (operator in operators) return operators[operator];
  return 0;
};

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
      throw new Error("Can not divide with number 0");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(_expression) {
    const expression = removeSpace(_expression);
    // change experssion to postfix stack
    const stack = [];
    const postExperssion = [];
    let currentNum = '';
    let bracketCount = 0;

    for (let char of expression) {
      // check for alphabetic characters
      if (isAlpha(char)) {
        throw new Error("Please provide expression with valid characters");
      }
      if (isNumeric(char) || char === ".") {
        currentNum = currentNum + char;
        continue;
      }
      if (currentNum) {
        postExperssion.push(+currentNum);
        currentNum = '';
      }

      if (char === "(") {
        stack.push(char);
        bracketCount++;
      } else if (char === ")") {
        bracketCount--;
        if (bracketCount < 0) {
          throw new Error("Please provide expression with valid parentheses");
        }
        
        let currentValue = stack.pop();
        while (currentValue !== "(") {
          postExperssion.push(currentValue);
          currentValue = stack.pop();
        }
      } else {
        // check for operator precedence till there is at least 1 operator in stack
        while (stack.length && (getPrecedence(char) <= getPrecedence(stack[stack.length - 1]))) {
          const operator = stack.pop();
          postExperssion.push(operator);
        }
        stack.push(char);
      }
    }
    // edge case scenarios
    if (bracketCount !== 0) {
      throw new Error("Please provide expression with valid parentheses");
    }
    if (currentNum) {
      postExperssion.push(+currentNum);
    }
    while (stack.length) {
      postExperssion.push(stack.pop());
    }

    // solve the postfix expression
    let currentIndex = 0;
    while (postExperssion.length !== 1) {
      if (postExperssion[currentIndex] in operators) {
        const operator = postExperssion.splice(currentIndex, 1)[0];
        const operand = postExperssion.splice(currentIndex - 1, 1)[0];
        this.result = postExperssion.splice(currentIndex - 2, 1)[0];
        
        // calculate using the methods
        if (operator === "+") {
          this.add(operand);
        } else if (operator === "-") {
          this.subtract(operand);
        } else if (operator === "*") {
          this.multiply(operand);
        } else {
          this.divide(operand);
        }

        postExperssion.splice(currentIndex - 2, 0, this.getResult());
        currentIndex -= 2; // since two operands are calculated already and we need to check for next
      }
      currentIndex++;
    }
    return this.getResult();
  }
}

module.exports = Calculator;
