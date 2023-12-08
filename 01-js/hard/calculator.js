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
    this.result=0;
    this.operators = ['-','+','*', '/']
  }

  add(x){
    this.result+=x;
  }

  subtract(x){
    this.result-=x;
  }

  divide(x){

    if(x===0){
      throw new Error("Divide by zero error");
    }
      

    this.result/=x;
  }
  multiply(x){
    this.result*=x;
  }

  clear(){
    this.result=0;
  }

  getResult(){
    return this.result;  
  }

  calculate(str){
    str = str.split(" ").join("");
    this.checkInvalidInput(str);

    //convert to postfix
    let postfix = this.convertToPostfix(str);
    console.log(postfix);
    //evaluate postfix
    let stack = [];
    postfix.forEach(ch => {
      if (this.operators.includes(ch)) {
        let op2 = stack.pop();
        let op1 = stack.pop();
        let res = this.evaluate(op1,op2,ch);
        console.log(res);
        stack.push(res);
      } else {
        stack.push(ch);
      }
    });
    this.result = stack.pop();
    return this.result;

  }

  //function to convert infix to postfix
  convertToPostfix(str){

    let stack = [];
    let postfix = [];
    str = str.split('');
    str.forEach(ch => {
      if (this.operators.includes(ch)) {
        while (stack.length>0 && this.precedence(stack[stack.length-1])>=this.precedence(ch)) {
          postfix.push(stack.pop());
        }
        stack.push(ch);
      } else if (ch==='(') {
        stack.push(ch);
      } else if (ch===')') {
        while (stack.length>0 && stack[stack.length-1]!=='(') {
          postfix.push(stack.pop());
        }
        stack.pop();
      } else {
        postfix.push(ch);
      }
    });

    while (stack.length>0) {
      postfix.push(stack.pop());
    }

    return postfix;
  }

  //function to check precedence of operators
  precedence(ch){
    if (ch==='+' || ch==='-') {
      return 1;
    } else if (ch==='*' || ch==='/') {
      return 2;
    }
    return 0;
  }

  //function to check for invalid input
  checkInvalidInput(str){
    
    let stack = [];
    str= str.split('');
  
    str.forEach(ch => {
      if(ch == '('){
        stack.push(ch);
      }
      else if(ch == ')') {
        if (stack.length==0) {
          throw new Error("Invalid Paranthesis ");
        }
        else{
          stack.pop();
        }
      }
    });

    let prev = 0;
    for (let i = 1; i < str.length; i++) {
      const ch = str[i];
      if(this.operators.includes(ch) || ch=='(' || ch == ')'){
        if(i-prev > 2){
          throw new Error("multiple string input");
        }
        prev = i;
      }
    }
    return true;
  }


  //function to evaluate the given postfix expression
  evaluate(op1,op2,ch){

     
    op1 = parseInt(op1);
    op2 = parseInt(op2); 

    console.log(op1);
    console.log(op2);
    console.log(ch);
    
    if(isNaN(op1) || isNaN(op2)){
      throw new Error("Invalid input");
    }

    if (ch==='+') {
      return op1+op2;
    } else if (ch==='-') {
      return op1-op2;
    } else if (ch==='*') {
      return op1*op2;
    } else if (ch==='/') {
      return op1/op2;
    }
  }

}
let calci = new Calculator()
console.log(calci.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7'))

module.exports = Calculator;
