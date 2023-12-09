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
    if(number === 0) {
      throw new Error("Illegal operation: can not divide by 0")
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    expression = preProcessing(expression);
    let evaluatedExpression = evaluateExpression(expression);
    return (this.result = evaluatedExpression);
  }
}

function preProcessing(expression) {
  //Remove spaces
  expression = expression.replace(/\s+/g, "");
  
  //Check if expression is invalid
  if(/.*[a-zA-Z].*/.test(expression)) {
    throw new Error("Expression is invalid")
  } 

  //Check for incorrect parenthesis usage
  let openingParen = 0;
  let closingParen = 0;
  let parenNestedLevel = 0;
  for(const char of expression) {
    if(char === '(') {
      openingParen++;
      parenNestedLevel++;
    } 
    else if(char === ')' && (parenNestedLevel == 0)) {
      throw new Error("Expression is invalid");
    } 
    else if(char === ')'){
      closingParen++;
      parenNestedLevel--;
    }
  }
  if(openingParen != closingParen) {
    throw new Error("Expression is invalid")
  }
  return expression;
}

function evaluateExpression(expression) {
  return evaluator(expression, 0)[1];
}

function evaluator(expression, idx) {
  let num = 0;
  let operator = "+";
  let stack = [];
  let i = idx;
  for( ; i<expression.length; i++) {
    let char=expression[i];
    if(isNumber(char)) {
      [endOfNum, num] = extractNumberFromString(i, expression);
      idx += endOfNum-i;
      i=endOfNum;
    } 
    if(!isNumber(char) || i===expression.length-1) {
      if(char === '(') {
        idx=i+1;
        [i, num]=evaluator(expression, idx);
      } else if(char === ')') {
        insertInStack(operator, stack, num);
        break;
      }
      insertInStack(operator, stack, num);
      num=0;
      operator=char;
    }
    idx++;
  }
  let evaultedExpression=0;
  while(stack.length>0) evaultedExpression+=stack.pop();
  return [i, evaultedExpression]; 
}

function extractNumberFromString(i, expression) {
  let numberString = '';
  for(let j=i; j<expression.length; j++) {
    if(isNumber(expression[j]) || expression[j] === '.') {
      numberString +=expression[j];
      i++;
    }
    else {
      break;
    }
  }
  return [i-1, numberString - '0'];
}

function insertInStack(operator, stack, num) {
  if(operator === '+') stack.push(num);
  else if(operator === '-') stack.push(-1*num);
  else if(operator === '*') stack.push(num*stack.pop());
  else if(operator === '/') {
    if(!num) {
      throw new Error("Illegal operation: can not divide by 0");
    }
    stack.push(stack.pop()/num);
  }
}

function isNumber(char) {
  return char>='0' && char<='9';
}

module.exports = Calculator;
