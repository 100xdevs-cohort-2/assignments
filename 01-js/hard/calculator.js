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
     this.result = 0
  }

  add(number){
    
    if(!isNaN(number)){
       this.result += number
       return this
    }
    
  }
  subtract(number){
    
    if(!isNaN(number)){
     
      this.result -= number
       return this
    }
  }
  multiply(number){
    
    if(!isNaN(number)){
      this.result *= number
       return this
    }
  }
  divide(number){
    
    if(!isNaN(number) && number !== 0){
      this.result /= number
      return this
    }
    else{
      throw new Error("Division by zero")
    }
  }
  clear(){
    this.result = 0

    return this
  }
  getResult(){
    return this.result
  }
  calculate(string){
    if(isNaN(string)){
      string = string.trim().replace(/\s/g, '')
      try{
          this.result = eval(string)

          if(isNaN(this.result) || !isFinite(this.result)){
            throw new Error("Invalid expression");
          }
          else{
              return this.result
            }
      }
      catch(error){
        throw new Error("Invalid expression");
      }
    }
  }
}

const tests = new Calculator()

module.exports = Calculator;
