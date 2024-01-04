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
    if (num == 0) {
      throw new Error("Division by zero error!");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  extractFirstNumber(expression) {
    // match the first sequence of digits
    const regex = "(\.?\d+\.?\d?)";  // /^\d+/;
    // extract the first number
    const match = regex.exec(expression);
    // return extracted number or null if no match found
    return match ? parseInt(match[0], 10) : null;
  }
  
  evaluate(operand1, operand2, operator) {
    switch (operator) {
      case '+':
        this.result = operand1;
        this.add(operand2);
        break;
      case '-':
        this.result = operand1;
        this.subtract(operand2);
        break;
      case '*':
        this.result = operand1;
        this.multiply(operand2);
        break;
      case '/':
        this.result = operand1;
        
        if(operand2 == 0) {
          throw new Error('Division by Zero error');
          return NaN;
        }
        this.divide(operand2);
        break;                  
    }
    

    return this.result;
  }


   addSpacesToNumbers(str, paddingLength = 2) {
    const regex = /\d+\.?\d?/g;
    const paddedExpr = str.replace(regex, (match) => {
      const padding = " ".repeat(paddingLength);
      return padding + match + padding;
    });
    return paddedExpr;
  }

  calculate(expression) {
    if(!validParanthesisBalance(expression)) {
      throw new Error("expression with invalid parentheses");
    }

    expression = expression.replace("/\s+/", " ");
    expression = this.addSpacesToNumbers(expression).trim();
    if (!/^[\W0-9\.\+\-\/\*\(\)]+$/.test(expression)) {
      throw new Error("Invalid expression!" + expression);
    }

    const operatorStack = [];
    const operandStack = [];
    const operatorPrecedence = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
      "(": 0,
    };

    const tokens = expression.split(/\s+/);
    

    for(let token of tokens) {      
      if(!isNaN(Number(token))) {
        operandStack.push(token);
      } else if (token === "(") {
        operatorStack.push(token);
      } else if (token in operatorPrecedence) {
          while (operatorStack.length > 0 
            && operatorPrecedence[operatorStack[operatorStack.length - 1]] >= operatorPrecedence[token]) {
              const operand2 = Number(operandStack.pop());
              const operand1 = Number(operandStack.pop());
              const operator = operatorStack.pop();

              this.evaluate(operand1,operand2, operator);
              operandStack.push(this.result);
            }
            operatorStack.push(token);
      } else if (token === ")" ) {
          while(operatorStack[operatorStack.length-1] != "(") {
            const operand2 = Number(operandStack.pop());
            const operand1 = Number(operandStack.pop());
            const operator = operatorStack.pop();
            this.evaluate(operand1,operand2, operator);
            operandStack.push(this.result);
          }
          operatorStack.pop();
      } else {
          throw new Error("Invalid Expression!");
      }
    }  
    
    while(operatorStack.length>0) {
      const operand2 = Number(operandStack.pop());
      const operand1 = Number(operandStack.pop());
      const operator = operatorStack.pop();
      this.evaluate(operand1,operand2, operator);
      operandStack.push(this.result);

    }

    let finalresult =  this.result;
    
    return finalresult;
  }
}

const validParanthesisBalance = (expression) => {
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



//let calc = new Calculator()
//let res = calc.calculate('((25.5 + 15) * 3');
//let res = calc.calculate('10 - (4 + 2)');
//console.log(res);
module.exports = Calculator;
