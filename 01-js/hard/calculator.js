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

/* Attempting cohort assignment while also preparing for Data Structures exam */

class Stack {
  constructor() {
    this.stack = []
  }
  top() {
    if (this.stack.length < 1) {
      console.log("Stack is empty!");
      return false
    }
    else {
      return this.stack[this.stack.length - 1]
    }
  }
  push(x) {
    this.stack.push(x);
  }
  pop() {
    if (this.stack.length >= 1) {
      // let temp = this.stack[this.stack.length - 1];
      this.stack.pop();
      // return temp;
    }
    else {
      console.log("Stack is empty!");
      return false;
    }
  }
  isEmpty() {
    return (this.stack.length === 0);
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
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  evaluatePostfix(expression) {
    let s = new Stack();

    for (let i in expression) {
      if (isNaN(expression[i]) === false) {
        s.push(expression[i]);
      }
      else if (isNaN(expression[i]) === true) {
        let x = s.top();
        s.pop();
        let y = s.top();
        s.pop();

        let res;
        if (expression[i] === '+') {
          res = y + x;
        }
        if (expression[i] === '-') {
          res = y - x;
        }
        if (expression[i] === '*') {
          res = y * x;
        }
        if (expression[i] === '/') {
          if (x === 0) {
            throw new Error('Division by 0 is not allowed!')
          }
          else {
            res = y / x;
          }
        }

        s.push(res);
      }
    }
    let result = s.top();
    return result;
  }

  convertToPostfix(expression) {
    let output = [];
    let s = new Stack();
    for (let i in expression) {
      // console.log(expression[i])
      if (expression[i] === '') {
      }

      else if (Number(expression[i]) || expression[i] === '0') {
        output.push(Number(expression[i]));
      }

      else if (expression[i] === '+' || expression[i] === '-') {
        if (!s.isEmpty()) {
          while (s.top() === '*' || s.top === '/') {
            output.push(s.top());
            s.pop();
          }
        }
        s.push(expression[i])
      }

      else if (expression[i] === '*' || expression[i] === '/') {
        s.push(expression[i])
      }

      else if (expression[i] === '(') {
        s.push(expression[i])
      }

      else if (expression[i] === ')') {
        while (!s.isEmpty() && s.top() !== '(') {
          output.push(s.top());
          s.pop();
        }
        if (s.isEmpty() || s.top() !== '(') {
          throw new Error('Invalid parenthesis!')
        }
        else if (s.top() === '(') {
          s.pop()
        }
      }
    }
    while (!s.isEmpty()) {
      if (s.top() === '(') {
        throw new Error('Invalid parenthesis!')
      }
      else {
        output.push(s.top());
        s.pop();
      }

    }

    return output
  }

  validateExpression(expression) {
    let final_expression = ''
    for (let i = 0; i < expression.length; i++) {
      if (expression[i] != ' ') {
        if (Number(expression[i]) || expression[i] === '0' || expression[i] === ".") {
          final_expression += expression[i];
        }
        else if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*' || expression[i] === '/' || expression[i] === '(' || expression[i] === ')') {
          final_expression += " " + expression[i] + " ";
        }

        else if (expression[i].toLowerCase().charCodeAt(0) >= 97 && expression[i].toLowerCase().charCodeAt(0) <= 122) {
          throw new Error('Calculator can handle only numbers, characters/strings not allowed!');
        }
      }
    }

    return final_expression;
  }
  calculate(expression) {
    let validated_expression = this.validateExpression(expression).split(" ");
    let postfix_expression = this.convertToPostfix(validated_expression);
    let result = this.evaluatePostfix(postfix_expression);
    return result;
  }
}

module.exports = Calculator;