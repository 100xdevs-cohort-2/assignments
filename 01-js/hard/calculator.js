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
  constructor(result=0){
    this.result=result;
  }
  add(number)
  {
    this.result+=number;
  }
  subtract(number)
  {
    this.result-=number;
  }
  multiply(number){
    this.result*=number;
  }
  divide(number){
    if(number == 0 )
      throw new Error('Divide by 0 not allowed'); // insted of ' throw 'divide by 0 not spossinle ' ot is string where as new Error will throw an error object
    else {
      this.result/=number;
    }
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  calculate(expression){
    expression=expression.replace(/\s/g, ''); // it will replace the part of expression which contains the given regex by ''.
    if(/^[a-zA-Z]+$/.test(expression))
      throw "Expression should only conatin numbers and operators";
    else if(expression.includes('/0'))   // it checks if the expression contins any perticular regex for string
      throw new Error('divde by ox');
    else
      this.result=eval(expression);
  }
}

module.exports = Calculator;
