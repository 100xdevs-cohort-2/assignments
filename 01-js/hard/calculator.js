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
  constructor(){
    this.result = 0;
  }

  add(value){
    this.result += value;
  }
  subtract(value){
    this.result -= value;
  }
  multiply(value){
    this.result *= value;
  }
  divide(value){
    if(value === 0){
      throw new Error("divide by 0");
    }
    this.result /= value;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }

  areParenthesesBalanced(expression) {
    let stack = [];
  
    for (let char of expression) {
      if (char === '(') {
        stack.push(char); // Push an opening parenthesis onto the stack
      } else if (char === ')') {
        if (stack.length === 0) {
          return false; // No matching opening parenthesis
        }
        stack.pop(); // Pop a matching opening parenthesis from the stack
      }
    }
  
    // The parentheses are balanced if the stack is empty at the end
    return stack.length === 0;
  }

  calculate(expression) {
    // Remove continuous spaces
    const cleanedExpression = expression.replace(/\s+/g, '');

    // Check for invalid characters using a regular expression
    if (!/^[0-9+\-*/().]+$/.test(cleanedExpression)) {
      throw new Error("Invalid expression");
    }
    if(!this.areParenthesesBalanced(cleanedExpression)){
      throw new Error("Invalid expression");
    }
    try {
      // Use eval to calculate the result
      let result = eval(cleanedExpression);
      
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid expression");
      }
      return result;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

let obj = new Calculator();
console.log(obj.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7'));


module.exports = Calculator;