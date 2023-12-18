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

  result = 0
  removeUnwanted
  number = 0
  

  add(num){
    this.result = this.result + num
  }

  subtract(num){
    this.result = this.result - num
  }

  multiply(num){
    this.result = this.result * num
  }

  divide(num){
    if( num == 0 ){
      throw newError()
    }
    this.result /= num
  }

  clear(){
    this.result = 0
  }

  getResult(){
    console.log(this.result)
    return this.result
  }

  calculate(str){
  
    this.removeUnwanted =  str.replace(/[^0-9\+*/-]/g,'').split(/([+\-*/])/).filter(Boolean);

    this.number = this.removeUnwanted[0]

    for (let i =1 ; i<this.removeUnwanted.length ; i++){

      switch(this.removeUnwanted[i]){
        case('+'):
          this.number += this.removeUnwanted[i+1];
          i++;
          break;
        case('-'):
          this.number = this.number - this.removeUnwanted[i+1];
          i++;
          break;
        case('*'):
          this.number *= this.removeUnwanted[i+1];
          i++;
          break;
        case('/'):
          this.number /= this.removeUnwanted[i+1];
          i++;
          break;
      }


    
    }

    console.log(this.number)
  }
  
}

let calc = new Calculator()

calc.calculate("0+2+500+ hj1 *20 -jksdflh /12")


// module.exports = Calculator;
