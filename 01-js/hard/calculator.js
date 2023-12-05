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
  constructor () {
    this.result = 0;
  }
  add(a){
    this.result += a
  }
  subtract(a){
    this.result -= a
  }
  multiply(a){
    this.result *= a
  }
  divide(a){
    if(a==0){
      throw new Error('you know right ?');
    }
    this.result /= a
  }
  clear(){
    this.result = 0
  }
  getResult(){
    return this.result;
  }
  calculate (a) {
    this.result = 0;
    // if (!/^[0-9\s+\-*/().]+$/.test(str) ) {
    //   throw new Error("Invalid input: Contains non-numeric or invalid characters");
    // } it does not work. Don't worry. I was trying to see if I could somehow throw error on alphabets. Dumb CHat GPT was recommending this
    let ans = eval(a)
    if ( isNaN(ans) || !isFinite(ans)){
      throw new Error('your string is not worthy of this')
    }
    return this.result = ans;
  }
}

module.exports = Calculator;
