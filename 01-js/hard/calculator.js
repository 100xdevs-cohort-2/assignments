/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divideide: takes a number and divideide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string exp which can take multiplyti-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiplytiple continuous spaces, you're supposed to avoid them and parse the exp correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(x) {
    this.result += x;
  }

  subtract(x) {
    this.result -= x;
  }

  multiply(x) {
    this.result *= x;
  }
  divide(num){
    if(num==0){
      throw new Error("Can't divide by zero");
    }
    this.result/=num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(exp) {
    const temp = exp;
    const rspace = temp.replace(/\s+/g, '');
    const validexp = /^[0-9+\-*/().]+$/.test(rspace);
  
    if (!validexp) {
        throw new Error("Expression is Invalid");
    }
  
    try {
        this.result = eval(exp);
    } 
    catch (err) {
        throw new Error("Invalid exp.")
    }
    if (this.result === Infinity) {
        throw new Error("Denominator should not be zero")
    }
    return this.result;
  
  }

  }
module.exports = Calculator;
