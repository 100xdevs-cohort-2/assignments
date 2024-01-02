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
    this.updated = false;
  }

  add(number) {
    this.result += number;
    this.updated = true;
  }

  subtract(number) {
    this.result -= number;
    this.updated = true;
  }

  multiply(number) {
    if (this.updated) {
      this.result *= number;
    }
    else {
      this.result = number;
      this.updated = true;
    }
  }

  divide(number) {

    if(number === 0) throw new Error("Cannot divide by zero.");

    if (this.updated) {
      this.result /= number;
    }
    else {
      this.result = number;
      this.updated = true;
    }
  }

  calculate(expression) {
    let newExp = "";
    for(let i = 0; i < expression.length; i++){
      if((expression[i] >= '0' && expression[i] <= '9') || expression[i] === '(' || expression[i] === ')'
        || expression[i] === '+' || expression[i] === '-' || expression[i] === '*' || expression[i] === '/' || expression[i] === '.'){
        
          newExp += expression[i];

      }
      else if(expression[i] === ' '){
        continue;
      }
      else{
        throw new Error("Invalid input.");
      }
    }
    //10+2*(6-(4+1)/2)+7
    let res = eval(newExp);
    
    if(res === Infinity || res === NaN){
      throw new Error("Invalid input.");
    }

    this.result = res;
    this.updated = true;
  }

  clear() {
    this.result = 0;
    this.updated = false;
  }

  getResult() {
    return this.result;
  }

}

module.exports = Calculator;
