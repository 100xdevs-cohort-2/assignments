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

  constructor() {
    this.result = 0;
  }

  add(num) {    
    this.result += num;
  }

  sub(num) {
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

  calculate(exp) {
    const tokens = exp.split(" ");
    const stack = [];
    const precedence = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
    };

    for (const token of tokens) {
      if (!isNaN(token)) {
        stack.push(Number(token));
      } else if (token in precedence) {
        while (
          stack.length > 0 &&
          precedence[stack[stack.length - 1]] >= precedence[token]
        ) {
          const op = stack.pop();
          const b = stack.pop();
          const a = stack.pop();
          switch (op) {
            case "+":
              stack.push(a + b);
              break;
            case "-":
              stack.push(a - b);
              break;
            case "*":
              stack.push(a * b);
              break;
            case "/":
              stack.push(a / b);
              break;
          }
        }
        stack.push(token);
      } else if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        while (stack.length > 0 && stack[stack.length - 1] !== "(") {
          const op = stack.pop();
          const b = stack.pop();
          const a = stack.pop();
          switch (op) {
            case "+":
              stack.push(a + b);
              break;
            case "-":
              stack.push(a - b);
              break;
            case "*":
              stack.push(a * b);
              break;
            case "/":
              stack.push(a / b);
              break;
          }
        }
        stack.pop();
      } else {
        throw new Error("Invalid character: " + token);
      }
    }
    while (stack.length > 0) {
      const op = stack.pop();
      const b = stack.pop();
      const a = stack.pop();
      switch (op) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    }
    return stack[0];
  }
  
}


const calc = new Calculator();
calc.add(10);
console.log(calc.getResult());
calc.sub(2);
console.log(calc.getResult());
calc.multiply(6);
console.log(calc.getResult());
calc.divide(2);
console.log(calc.getResult());
calc.clear();
console.log(calc.getResult());



module.exports = Calculator;
