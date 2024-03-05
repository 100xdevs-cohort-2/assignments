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

const checkIsBalancedParantheses = (expression) => {
  const stack = [];
  for (let character of expression) {
    if (character === "(") stack.push(character);
    else if (character === ")") {
      if (stack.length) stack.pop();
      else return false;
    }
  }
  return stack.length ? false : true;
};

const infixToPostfix = (exp) => {
  const operators = new Set(["+", "-", "*", "/", "(", ")", "^"]);
  const priority = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
  const stack = [];
  const output = [];
  let i = 0;

  while (i < exp.length) {
    if (exp[i] === " ") {
      i++;
      continue;
    }

    if (!operators.has(exp[i])) {
      let charString = "";
      while (!operators.has(exp[i]) && i < exp.length) {
        charString += exp[i];
        i++;
      }
      output.push(charString);
      i--;
    } else if (exp[i] === "(") stack.push(exp[i]);
    else if (exp[i] === ")") {
      while (stack.length && stack.at(-1) != "(") {
        output.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        stack.at(-1) !== "(" &&
        priority[exp[i]] <= priority[stack.at(-1)]
      ) {
        output.push(stack.pop());
      }
      stack.push(exp[i]);
    }
    i++;
  }
  while (stack.length) output.push(stack.pop());
  return output;
};

const evaluatePostfix = (exp) => {
  const operators = new Set(["+", "-", "*", "/"]);
  const stack = [];
  for (let item of exp) {
    if (operators.has(item)) {
      const a = parseFloat(stack.pop());
      const b = parseFloat(stack.pop());
      if (isNaN(a) || isNaN(b)) throw new Error("invalid characters");
      switch (item) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(b - a);
          break;
        case "*":
          stack.push(b * a);
          break;
        case "/":
          if (a === 0) throw new Error("Division by 0");
          stack.push(b / a);
          break;
      }
    } else {
      stack.push(item);
    }
  }
  return stack[0];
};

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
    if (n === 0) throw new Error("Division by 0");
    this.result /= n;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    if (!checkIsBalancedParantheses(expression))
      throw new Error("invalid parantheses");
    const postfix = infixToPostfix(expression);
    this.result = evaluatePostfix(postfix);
  }
}

module.exports = Calculator;
