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
  constructor(result){
    this.result = result;
    this.result = 0;
  }

  add(num){
    this.result = this.result + num;
  }

  subtract(num){
    this.result = this.result - num;
  }

  multiply(num){
    this.result = this.result * num;
  }

  divide(num){
    if (num!=0){
      this.result = this.result/num;
    } else {
      throw new Error("Cannot divide by 0")
    }
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }

  calculate(expression){
    expression = expression.replace(/\s/g,"")
    const arrExp = expression.split("");
    for (let i=0;i<arrExp.length;i++){
      if (/^[a-zA-Z]+$/.test(arrExp[i])) {
        throw new Error("This is bad input");
      } else {
          if (arrExp.indexOf('/') - arrExp.indexOf('0')==1){
            throw new Error("Error occured")
          } else {
            this.result = eval(expression)
          }          
      }
      }
    }
  }

module.exports = Calculator;
