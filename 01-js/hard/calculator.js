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
    this.res = 0;
  }
  add(n){
    this.res += n;
  }
  subtract(n){
    this.res -= n
  }
  multiply(n){
    this.res *= n
  }
  divide(n){
    if(n==0){
      throw new Error("divided by 0");
    }
    this.res /= n
  }
  clear(){
    this.res = 0;
  }
  getResult(){
    return this.res;
  }
  calculate(str){
    this.clear();
    str = str.replace(/\s/g,'');

    if (!/^[0-9\s+\-*/().]+$/.test(str)){
      throw new Error("Invalid characters found in the string.");
    }

    try{
      let res = eval(str);
      if (isNaN(res) || !isFinite(res)){
        throw new Error("not a definite value");
      }
      return this.res = res;
    }
    catch (err){
      throw new Error({err});
    }

  }
}

module.exports = Calculator;
