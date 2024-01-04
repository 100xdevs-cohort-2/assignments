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

  getResult() {
    return this.result;
  }

  add(num) {
    this.result += num;
    return this.result;
  }

  subtract(num) {
    this.result -= num;
    return this.result;
  }

  multiply(num) {
    this.result *= num
    return this.result
  }

  divide(num) {
    if(num === 0) throw Error("Division by 0 is invalid");
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  calculate(expression) {
    const cleanedExpression = expression.replace(/\s+/g, '');
    const validExpression = /^[0-9+\-*/().]+$/.test(cleanedExpression);
  
    if (!validExpression) {
        throw new Error("Invalid expression.");
    }
  
    try {
        this.result = eval(expression);
    } catch (err) {
        throw new Error("Invalid expression.")
    }
    if (this.result === Infinity) {
        throw new Error("Cannot divide a number by 0.")
    }
    return this.result;
  
  }

  // toNum(char) {
  //   return char.charCodeAt() - '0'.charCodeAt();
  // }

  // isNum(c) {
  //   let num = this.toNum(c);
  //   return num >= 0 && num <= 9;
  // }

  // performOperation(operators, operands) {
  //   let b = operands.pop();
  //   let a = operands.pop();
  //   let operator = operators.pop();
  //   let output = null;
  //   switch(operator) {
  //     case '+':
  //       output = a + b;
  //       break;
  //     case '-':
  //       output = a - b;
  //       break;
  //     case '*':
  //       output = a * b;
  //       break;
  //     case '/':
  //       if(b === 0) throw Error;
  //       output = a / b;
  //       break;
  //     default:
  //       throw Error("Invalid operator");
  //   }
  //   operands.push(output)
  // }

  // calculate(expression) {
  //   let operators = [];
  //   let operands = [];
  //   let operatorPresedence = {
  //     '+': 1,
  //     '-': 1,
  //     '*': 2,
  //     '/': 3
  //   };
  //   let openParanthesis = '(';
  //   let closedParanthesis = ')';
    
  //   // loop over each character in string
  //   for(let i = 0; i < expression.length; i++) {
  //     if(expression[i] === ' ') {
  //       // ignore spaces move to next iteration
  //       continue;
  //     }
  //     // process numbers
  //     else if(this.isNum(expression[i])) {
  //       let num = 0;
  //       while(i < expression.length && this.isNum(expression[i])) {
  //         num = num * 10 + this.toNum(expression[i]);
  //         i++;
  //       }
  //       operands.push(num);
  //     }
  //     // push open paranthesis to operator stack
  //     else if(expression[i] === openParanthesis) {
  //       operators.push(expression[i]);
  //     }
  //     // when closed paranthesis is encountered, process all operators till open paranthesis is encountered
  //     else if(expression[i] === closedParanthesis) {
  //       while(operators.length > 0 && operators[operators.length - 1] != openParanthesis) {
  //         this.performOperation(operators, operands)
  //       }
  //       if (operators.pop !== openParanthesis) {
  //         throw Error;
  //       }
  //     }
  //     // when an operator is encountered
  //     else if(operatorPresedence[expression[i]]) {
  //       //1. If current operator has higher precedence than operator on top of the stack,
  //       //the current operator can be placed in stack
  //       // 2. else keep popping operator from stack and perform the operation in  numbers stack till
  //       //either stack is not empty or current operator has higher precedence than operator on top of the stack
  //       while(operators.length > 0 && operatorPresedence[expression[i]] <= operatorPresedence[operators[operators.length - 1]]) {
  //         this.performOperation(operators, operands);
  //       }
  //       operators.push(expression[i]);
  //     }
  //     else {
  //       throw Error(`Invalid expression ${expression[i]}`);
  //     }
  //   }

  //   while(operators.length > 0) {
  //     this.performOperation(operators, operands);
  //   }
  //   console.log("--------begin----------")
  //   console.log("expression => ", expression)
  //   console.log("operands =>", operands, "operators =>", operators);
  //   console.log("-------end----------")
  //   // if(operators.length > 0 || operands.length > 0) {
  //   //   throw Error("Invalid expression")
  //   // }
  //   this.result = operands.pop();
  // }
}

module.exports = Calculator;
