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

class Stack{
  size = 0;
  top = -1;
  storage = [];

  push(value){
    this.top++;
    this.storage[this.top] = value;
  }

  pop(){
    this.top--;
  }

  empty(){
    if(this.top == -1) return true;
    return false;
  }

  size(){
    return this.top+1;
  }
}

class Calculator {
  result=0;
  Calculator(){
  }

  add(value){
    this.result+=value;
  }

  subtract(value){
    this.result-=value;
  }

  multiply(value){
    this.result*=value;
  }

  divide(value){
    if(value == 0) throw Error(); 
    this.result/=value;
  }

  // prec(input){
  //   if(input == '/' || input == '*') return 3;
  //   if(input == '+' || input == '-') return 2;
  //   return 1;
  // }
  calculate(input){
    // - calculate: takes a string expression which can take multi-arithmetic operations and give its result
    // example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
    // Points to Note: 
    //   1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
    //   2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs
    // var letters = /[A-Za-z]/g;
    // if(letters.test(input)) throw Error();

    // input = input.split(' ').join('');
    // console.log("-----------------", input) 
    // let st = new Stack();
    // let postfix = [];
    // input = input.split('');
    // input.map(item =>{
    //   if(item - '0' != NaN){
    //     postfix.push(item);
    //   }else if(item == '('){
    //     st.push('(');
    //   }else if(item == ')'){
    //     while(st.top() != '('){
    //       postfix.push(st.top());
    //       st.pop();
    //     }
    //     st.pop();
    //   }else{
    //     if(st.empty()){st.push(item)}
    //     else{
    //       if(this.prec(item) > this.prec(st.top())){
    //         st.push(item);
    //       }else{
    //         while(!st.empty() && this.prec(item) < this.prec(st.top() && st.top() != '(')){
    //           postfix.push(st.top());
    //           st.pop();
    //         }
    //       }
    //     }
    //   }
    // })
    // console.log("POSTFICCCCC ",postfix);
    if(eval(input) == Infinity) throw Error();
    this.result = eval(input);
    return this.result;

  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }
}

module.exports = Calculator;
