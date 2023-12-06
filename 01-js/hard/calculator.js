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

  add(n) {
    this.result += n;
  }

  subtract(n) {
    this.result -= n;
  }

  multiply(n) {
    this.result *= n;
  }

  divide(n) {
    if (n === 0) throw new Error("Division by zero is not allowed");
    this.result /= n;
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
  }

  calculate(str) {
    let operators = [];
    let operands = [];
    let i = 0;

    str = str.replace(/\s/g, "");

    const PerformOperation = (operator, num1, num2) => {
      let val = 0;
      switch (operator) {
        case "+":
          val = num2 + num1;
          break;
        case "-":
          val = num2 - num1;
          break;
        case "*":
          val = num2 * num1;
          break;
        case "/":
          if (num1 === 0) throw new Error("Division by zero is not allowed");
          val = num2 / num1;
          break;
        default:
          throw new Error("Invalid operator");
      }

      return val;
    };

    const precedenceCheck = (stackOpr, expOpr) => {
      //if stack opr has higher or equal precednece to current exp opr perform operation
      if (stackOpr === "(") return false;
      else if (stackOpr === "*" || stackOpr === "/") return true;
      else if (
        (stackOpr === "+" || stackOpr === "-") &&
        (expOpr === "+" || expOpr === "-")
      )
        return true;
      else return false;
    };

    while (i < str.length) {
      //extract operands
      if (str[i] >= "0" && str[i] <= "9") {
        //get all numbers before the next operator
        let val = 0;
        while (str[i] >= "0" && str[i] <= "9") {
          val = val * 10 + parseInt(str[i]);
          i++;
        }
        operands.push(val);
        i--;
      }

      //decimal
      else if (str[i] == ".") {
        i++;
        let val = operands.pop();
        let count = 1;
        while (str[i] >= "0" && str[i] <= "9") {
          val = val * 10 + parseInt(str[i]);
          count *= 10;
          i++;
        }
        operands.push(val / count);
        i--;
      }

      //extract operators
      else if (str[i] === "(") {
        operators.push("(");
      } else if (str[i] === ")") {
        //Perform operations on all values till "("
        while (operators[operators.length - 1] != "(") {
          operands.push(
            PerformOperation(operators.pop(), operands.pop(), operands.pop())
          );
        }
        operators.pop();
      } else if (
        str[i] === "+" ||
        str[i] === "-" ||
        str[i] === "*" ||
        str[i] === "/"
      ) {
        //check precedence and push to operator stack
        while (
          operators.length > 0 &&
          precedenceCheck(operators[operators.length - 1], str[i])
        ) {
          operands.push(
            PerformOperation(operators.pop(), operands.pop(), operands.pop())
          );
        }
        operators.push(str[i]);
      } else {
        throw new Error("NAN is not allowed");
      }

      i++;
    }

    //clear stack
    while (operators.length > 0) {
      operands.push(
        PerformOperation(operators.pop(), operands.pop(), operands.pop())
      );
    }
    this.result = operands.pop();
  }
}
module.exports = Calculator;
