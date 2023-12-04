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

// creating a class to throw Divide by zero error
class DivideByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivideByZeroError";
  }
}

class InvalidCharacterError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCharacterError";
  }
}

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    if (num === 0) throw new DivideByZeroError("Divide by zero error");
    this.result /= num;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return parseFloat(this.result);
  }

  /**
   * Helper function to get the precedence of the operator
   * @param {*} c
   * @returns
   */
  prec(c) {
    if (c === "+" || c === "-") return 1;
    if (c === "*" || c === "/") return 2;
    if (c === "^") return 3;
    return 0;
  }

  /**
   * Helper function to convert an infix expression to postfix expression
   * @param {*} str
   * @returns Postfix expression
   */
  infixToPostfix(str) {
    let postfix = "";
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      // take the number
      let num = "";
      let gotNum = false;
      let j = i;
      while (
        (j < str.length && str[j] >= "0" && str[j] <= "9") ||
        str[j] === "."
      ) {
        gotNum = true;
        num += str[j];
        j++;
      }
      if (gotNum) i = j - 1;
      // if a number, add it to the postfix
      if (gotNum) {
        postfix += num + " ";
        continue;
      }
      // if left parenthesis, push it to the stack
      else if (str[i] === "(") {
        stack.push(str[i]);
        continue;
      }
      // if right parenthesis, pop the stack until left parenthesis is found
      else if (str[i] === ")") {
        while (stack.length && stack[stack.length - 1] !== "(") {
          postfix += stack.pop() + " ";
        }
        stack.pop(); // pop the left parenthesis
        continue;
      }
      // if operator
      else if (this.prec(str[i])) {
        // pop the stack until the top of the stack has lower precedence
        while (
          stack.length &&
          this.prec(stack[stack.length - 1]) >= this.prec(str[i])
        ) {
          postfix += stack.pop() + " ";
        }
        stack.push(str[i]); // push the current operator
        continue;
      } else {
        throw new Error("Invalid character in the expression");
      }
    }
    // pop the remaining elements in the stack
    while (stack.length) {
      postfix += stack.pop() + " ";
    }
    return postfix;
  }

  /**
   * Helper function to calculate the postfix expression
   * @param {*} postfix
   * @returns The result of the postfix expression
   */
  postfixEvaluation(str) {
    let stack = [];
    let expression = str.split(" ");
    for (let i = 0; i < expression.length; i++) {
      if (expression[i] >= "0" && expression[i] <= "9") {
        stack.push(parseFloat(expression[i]));
      } 
      else if (this.prec(expression[i])) {
        /*
          Pop the stack twice and perform the operation
          If the expression is like 2 3 +, then op1 = 3 and op2 = 2
          If the expression is like 11 -, then op1 = 11 and op2 = 0
          
          Note: The order of op1 and op2 is important
          ?: Can op2 become 0?
          ==> Yes, if the expression is like 11 -, then op1 = 11 and op2 = 0
          ?: Can op1 become 0?
          ==> No, because if the expression is like 2 3 +, then op1 = 3 and op2 = 2
          ?: Can both op1 and op2 become 0?
          ==> No, because if the expression is like 11 1 /, then op1 = 0 and op2 = 11
              This will throw an error 
        */
        let op1 = 0, op2 = 0;
        if (stack.length) op2 = stack.pop();
        if (stack.length) op1 = stack.pop();
        if (expression[i] === "+") stack.push(op1 + op2);
        else if (expression[i] === "-") stack.push(op1 - op2);
        else if (expression[i] === "*") stack.push(op1 * op2);
        else if (expression[i] === "/") {
          if (op2 === 0) throw new DivideByZeroError("Divide by zero error");
          stack.push(op1 / op2);
        }
        else if (expression[i] === "^") stack.push(Math.pow(op1, op2));
      }
    }
    return stack[0];
  }

  /**
   * Helper function to check the validity of the expression
   * @param {*} str
   * @returns
   */
  checkValidity(str) {
    // check for invalid characters
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "0" && str[i] <= "9") continue;
      if (this.prec(str[i])) continue; // 0 precedence means not an operator
      if (str[i] === "(" || str[i] === ")") continue;
      if (str[i] === ".") continue;
      if (str[i] === " ") continue;
      throw new InvalidCharacterError("Invalid character in the expression");
    }
    // check for invalid parenthesis
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") stack.push(str[i]);
      else if (str[i] === ")") {
        if (stack.length === 0)
          throw new Error("Invalid parenthesis in the expression");
        stack.pop();
      }
    }
    if (stack.length) throw new Error("Invalid parenthesis in the expression");
  }

  calculate(str) {
    // remove the spaces
    let compactStr = str.replace(/\s/g, "");
    // check for validity of the expression
    if (!compactStr.length) throw new Error("Empty expression");
    this.checkValidity(compactStr);
    // convert to postfix
    let postfix = this.infixToPostfix(compactStr);
    // calculate the postfix
    this.result = this.postfixEvaluation(postfix);
  }
}

module.exports = Calculator;
