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

function sanitize(str) {
  let sanitized = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") sanitized += str[i];
  }
  return sanitized;
}

function precedence(operator) {
  if (operator === "*" || operator === "/") return 2;
  if (operator === "+" || operator === "-") return 1;
  return 0;
}

function calc(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      return b !== 0
        ? a / b
        : (() => {
            throw new Error("Cannot divide by zero");
          })();
    default:
      return 0;
  }
}

function isValidCharacter(char) {
  return (
    (char >= "0" && char <= "9") ||
    ["+", "-", "*", "/", "(", ")", " "].includes(char) ||
    char === "."
  );
}

function getNextToken(expr, index) {
  let token = "";
  while (
    index < expr.length &&
    ((expr[index] >= "0" && expr[index] <= "9") || expr[index] === ".")
  ) {
    token += expr[index];
    index++;
  }

  return token.length
    ? { token, ind: index - 1 }
    : { token: expr[index], ind: index };
}

function checkParantheses(expr) {
  const stack = [];
  let badFlag = 0;
  for(char of expr) {
    if(char === '(') stack.push(char);
    if(char === ')') {
      let res = stack.pop();
      if(!res) badFlag = 1;
    }
  }

  if(stack.length > 0) badFlag = 1;
  return badFlag;
}

function evaluateExpr(expr) {
  const numStack = [], opStack = [];
  expr = sanitize(expr);

  if(checkParantheses(expr)) throw new Error(`Unmatching parantheses`);

  for (let i = 0; i < expr.length; i++) {
    if (!isValidCharacter(expr[i]))
      throw new Error(`Invalid character '${expr[i]}' in expression`);


    let { token, ind } = getNextToken(expr, i);
    i = ind;

    if (!isNaN(token)) {
      numStack.push(parseFloat(token));
    } else if (token === "(") {
      opStack.push(token);
    } else if (token === ")") {
      while (opStack.length > 0 && opStack[opStack.length - 1] !== "(") {
        let val2 = numStack.pop();
        let val1 = numStack.pop();
        let op = opStack.pop();
        numStack.push(calc(val1, val2, op));
      }
      if (opStack.length > 0) opStack.pop(); // removing '('
    } else {
      while (
        opStack.length > 0 &&
        precedence(opStack[opStack.length - 1]) >= precedence(token)
      ) {
        let val2 = numStack.pop();
        let val1 = numStack.pop();
        let op = opStack.pop();
        numStack.push(calc(val1, val2, op));
      }
      opStack.push(token);
    }
  }

  while (opStack.length > 0) {
    let val2 = numStack.pop();
    let val1 = numStack.pop();
    let op = opStack.pop();
    numStack.push(calc(val1, val2, op));
  }

  return numStack.pop();
}

class Calculator {
  constructor() { this.result = 0; }

  add(n) { this.result += n; }
  subtract(n) { this.result -= n; }
  multiply(n) { this.result *= n; }
  divide(n) {
    if (n !== 0) {
      this.result /= n;
    } else {
      throw new Error("Cannot divide by zero");
    }
  }

  clear() { this.result = 0; }
  getResult() { return this.result; }

  calculate(expr) {
    this.result = evaluateExpr(expr);
    return this.result;
  }
}


module.exports = Calculator;
