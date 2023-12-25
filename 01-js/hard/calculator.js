/*
  Implement a class `Calculator` having below methods
    - initialise a this.result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the this.result
    - subtract: takes a number and subtracts it from the this.result
    - multiply: takes a number and multiply it to the this.result
    - divide: takes a number and divide it to the this.result
    - clear: makes the `this.result` variable to 0
    - getthis.result: returns the value of `this.result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its this.result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  result;
  constructor(){
    this.result = 0;
  }
  add(num){
    this.result = this.result + num;
  }
  subtract(num){
    this.result = this.result - num;
  }
  multiply(num){
    this.result = this.result*num;
  }
  divide(x)
  {
    if(x!=0)
      this.result /= x;
    else
      throw new Error("divide by zero");
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(str){
    if(eval(str) == Infinity){
      throw new Error("infinity");
    }
    else{
      return (this.result = eval(str));
    }
  }

}

module.exports = Calculator;
