/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation ✅
    - add: takes a number and adds it to the result ✅
    - subtract: takes a number and subtracts it from the result ✅
    - multiply: takes a number and multiply it to the result ✅
    - divide: takes a number and divide it to the result ✅
    - clear: makes the `result` variable to 0 ✅
    - getResult: returns the value of `result` variable ✅
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7` ✅
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
 constructor()
 {
    this.result = 0; 
 }
 add(num)
 {
    this.result+=num;  
 }
 subtract(num)
 {
    this.result-=num; 
 }
 multiply(num)
 {
    this.result*=num; 
 }
 divide(num)
 {
    if(num===0)
    throw new Error("Can't divide by zero"); 
    this.result/=num; 
 }
 clear()
 {
  this.result = 0; 
 }
 getResult()
 {
   return this.result; 
 }
 deleteSpace(str)
 {
   let newStr="";
   for(let i=0;i<str.length;i++)
   {
     if(str[i]!==' ')
     newStr+=str[i]; 
   }
   return newStr; 
 }
 calculate(string)
 {
    string = this.deleteSpace(string); 
    const evalResult = eval(string); 
    if(evalResult===Infinity)
    throw new Error(); 
    this.result = evalResult;
 }
}
const calc = new Calculator(); 
calc.add(12);
calc.divide(4);

console.log(calc.calculate('2 + 3 * 4')); 

// console.log(calc.getResult()); 
// console.log(calc.calculate('10 + (2 + 3+6)')); 

module.exports = Calculator;
