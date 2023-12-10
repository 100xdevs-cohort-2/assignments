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
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  top(){
    return this.items[this.items.length-1];
  }

  clear(){
    this.items = [];
  }

  isEmpty(){
    return this.items.length===0;
  }
}
class Calculator {
  constructor() {
    this.result = 0;
    this.st = new Stack();
  }
  add(num){
    this.result += num;
  }
  subtract(num){
    this.result -= num;
  }
  multiply(num){
    this.result *= num;
  }
  divide(num){
    if(num!=0){
      this.result /= num;
    }else{
      throw new Error("Division by 0 not possible!!");
    }
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(str){
    let n = str.length;

    const tokenRegex = /\d+(\.\d+)?|\+|\-|\*|\/|\(|\)/g;
    const paraRegex = /\(|\)/g;
    const alphaRegex = /[A-Za-z]/g;
  
    // Tokenize the expression using the regex
    const tokens = str.match(tokenRegex);
    const paraTokens = str.match(paraRegex);
    const alphaTokens = str.match(alphaRegex);

    // Filter out any whitespace
    const finalTokens = tokens.filter(token => token.trim() !== '');

    // Check if it contains any alphabet
    if(alphaTokens!==null){
      throw new Error("It contains characters !!!");
    }
    
    // check parentheses
    if(paraTokens!==null && !this.checkParentheses(paraTokens)){
      throw new Error("Not valid parentheses !!");
    }

    // Create precedence and a postfix expression

    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '(': 0,
      ')': 0,
    };

    n = finalTokens.length;
    let postfix = [];
    for(let i=0;i<n;i++){
      const c = finalTokens[i];
      if(c ==='('){
        this.st.push(c);
      }else if(c === ')'){
        while(this.st.top()!=='('){
          postfix.push(this.st.pop());
        }
        this.st.pop();
      }else if(!isNaN(parseInt(c))){
        postfix.push(c);
      }else{
        while (!this.st.isEmpty() && precedence[c] <= precedence[this.st.top()]) {
          postfix.push(this.st.pop());
        }
        this.st.push(c);
      }
    }
    while(!this.st.isEmpty()){
      postfix.push(this.st.pop());
    }

    // console.log(postfix);

    // Now evaluate postfix expression
    n = postfix.length;
    for(let i=0;i<n;i++){
      const c = postfix[i];
      if(!isNaN(parseFloat(c))){
        this.st.push(c*1);
      }else{
        const val2 = this.st.pop();
        const val1 = this.st.pop();
        switch (c) {
          case '+':
            this.st.push(val1 + val2);
            break;
          case '-':
            this.st.push(val1 - val2);
            break;
          case '*':
            this.st.push(val1 * val2);
            break;
          case '/':
            if(val2===0){
              throw new Error("Cannot divide by Zero !!");
            }
            this.st.push(val1 / val2);
            break;
        }
      }
    }

    this.result = this.st.pop();
  }
  checkParentheses(exp){
    if(exp.length===0){
      return true;
    }
    for(let i=0;i<exp.length;i++){
      const p = exp[i];
      if(p==='('){
        this.st.push(p); 
      }else{
        if(this.st.top()!=='('){
          return false;
        }else{
          this.st.pop(); 
        }
      }
    }
    if(!this.st.isEmpty()){
      return false;
    }
    return true;
  }
}

module.exports = Calculator;
