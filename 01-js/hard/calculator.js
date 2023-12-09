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
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  calculate(expression) {
    if (expression.length === 0) {
      return 0;
    }

    let count = 0;

    for (let char of expression) {
      if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        throw new Error("Invalid character in expression");
      }
      if (char == "(") {
        count += 1;
      } else if (char == ")") {
        count -= 1;

        if (count < 0) {
          throw new Error("Unbalanced parentheses in expression");
        }
      }
    }

    if (count !== 0) {
      throw new Error("Unbalanced parentheses in expression");
    }

    let nums = [];
    let operators = [];

    for (let i = 0; i < expression.length; ) {
      if (expression[i] >= "0" && expression[i] <= "9") {
        let val = expression[i];
        let isDecimal = false;

        while (
          i + 1 < expression.length &&
          ((expression[i + 1] >= "0" && expression[i + 1] <= "9") ||
            expression[i + 1] === ".")
        ) {
          if (expression[i + 1] === ".") {
            if (isDecimal) {
              throw new Error("Invalid decimal in number");
            }
            isDecimal = true;
          }
          
          val += expression[i + 1];
          i++;
        }

        nums.push(parseFloat(val));
      } else if (this.isOperator(expression[i])) {
        while (
          operators.length > 0 &&
          this.hasPrecedence(expression[i], operators[operators.length - 1])
        ) {
          if (nums.length < 2) {
            throw new Error("Invalid expression");
          }

          try {
            nums.push(
              this.calculateValue(operators.pop(), nums.pop(), nums.pop())
            );
          } catch (error) {
            throw new Error("Error during calculation");
          }
        }

        operators.push(expression[i]);
      } else if (expression[i] === "(") {
        operators.push("(");
      } else if (expression[i] === ")") {
        while (
          operators.length > 0 &&
          operators[operators.length - 1] !== "("
        ) {
          if (nums.length < 2) {
            throw new Error("Invalid expression");
          }

          try {
            nums.push(
              this.calculateValue(operators.pop(), nums.pop(), nums.pop())
            );
          } catch (error) {
            throw new Error("Error during calculation");
          }
        }

        operators.pop(); // Pop the '('
      }

      i += 1;
    }

    while (operators.length > 0) {
      if (nums.length < 2) {
        throw new Error("Invalid expression");
      }

      try {
        nums.push(this.calculateValue(operators.pop(), nums.pop(), nums.pop()));
      } catch (error) {
        throw new Error("Error during calculation");
      }
    }

    this.result = nums.length === 0 ? 0 : nums.pop();
  }

  getResult() {
    return this.result;
  }

  isOperator(c) {
    return c === "+" || c === "-" || c === "*" || c === "/";
  }

  hasPrecedence(op1, op2) {
    if (op2 === "(" || op2 === ")") {
      return false;
    }
    if ((op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-")) {
      return false;
    }

    return true;
  }

  calculateValue(op, val1, val2) {
    if (op === "+") {
      return val1 + val2;
    } else if (op === "-") {
      return val2 - val1;
    } else if (op === "*") {
      return val1 * val2;
    } else if (op === "/") {
      if (val1 === 0) {
        throw new Error("Cannot divide by zero");
      }
      return val2 / val1;
    }
  }
}

module.exports = Calculator;
