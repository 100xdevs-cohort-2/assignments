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

  constructor(num=0){
    this.num=num
  }

  add(num){
    if(typeof num !='number'){
      throw new Error('The type is not number')
    }
    this.num+=num
  }

  subtract(num){
    
    if(typeof num !='number'){
      throw new Error('The type is not number')
    }
    this.num-=num
  }

  multiply(num){
    
    if(typeof num !='number'){
      throw new Error('The type is not number')
    }
    this.num*=num
  }

  divide(num){
    
    if(typeof num !='number'){
      throw new Error('The type is not number')
    }
    if(num==0){
      throw new Error(`Can't divide with zero`)
    }
    this.num/=num 

  }

  clear(){
    this.num=0
  }

  getResult(){
    return this.num
  }

  calculate(expr){
    if(expr.match(/^[a-z]+$/)){
      throw new Error(`Can't evaluate this expression this expression contains alphabets`)
    }
    expr=expr.replaceAll(' ','')
    if(expr.includes('/0')){
      throw new Error("Can't divide by zero")
    }
    return this.num=eval(expr)
  }
}

module.exports = Calculator;
