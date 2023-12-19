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
  /*constructor(result){
    this.result = result;
  }

  add(...nums){
    let sum = nums.reduce((acc,val) => acc + val, 0 );
    this.result = sum;
    return this.result;
  }
  subtract(...nums){
    let sub = nums.reduce((acc,val) => acc - val);
    this.result = sub;
    return this.result;
  }
  multiply(...nums) {
    this.result = nums.reduce((acc, val) => acc * val, 1);
    return this.result;
  }

  divide(...nums) {
    if (nums.some((num) => num === 0)) {
      return Infinity; // Returning Infinity for division by zero
    }

    this.result = nums.reduce((acc, val) => acc / val);
    return this.result;
  }

 clear(){
  this.result = 0;
  return this.result;
 }
 getResult(){
  return this.result;
 }
 calculate(str){
  let clrstr = str.trim().replace(/\s/g, '');
  
  
    // Check for division by zero
    if (clrstr.includes('/0')) {
      return Infinity; // Return Infinity for division by zero
    }

    // Check for invalid operations with negative numbers (e.g., "5 * -2", "10 / -2")
    const negativeOperationRegex = /(\*-|\*[\s]*-|\/-|\/[\s]*-)/;
    if (negativeOperationRegex.test(clrstr)) {
      clrstr = clrstr.replace(/\*-/g, '*-1*'); // Convert negative multiplication to multiplication by -1
      clrstr = clrstr.replace(/\/-/g, '/-1/'); // Convert negative division to division by -1
    }

    // Check for invalid operations with decimal numbers (e.g., "5.2 * 2", "10 / 2.5")
    const decimalOperationRegex = /(\*\.|\*[\s]*\.|\.)/;
    if (decimalOperationRegex.test(clrstr)) {
      clrstr = clrstr.replace(/\*\.(\d+)/g, '*$1'); // Remove the decimal point in multiplication
      clrstr = clrstr.replace(/\/\.(\d+)/g, '/$1'); // Remove the decimal point in division
    }

  let perform = eval(clrstr);
  this.result = perform;
  return this.result;
 }*/

 constructor(){
  this.result = 0
}
add(n){
  this.result += n
}
subtract(n){
  this.result -= n
}
multiply(n){
  this.result *= n
}
divide(n){
  if(n == 0){
    throw new Error("Error!")
  }
  this.result /= n
}
clear(){
  this.result = 0
}
getResult(){
  return this.result
}
calculate(exp){
  exp = exp.split("").filter((ele)=>{
    if("0123456789+-*/(). ".includes(ele)){
      return true
    }else{
      throw new Error("Error!")
    }
  }).join("")
  const res = eval(exp)
  if(res === Infinity || res === -Infinity){
    throw new Error("Error!")
  }else{
    this.result = res
    return res
  }
}

}


module.exports = Calculator;
