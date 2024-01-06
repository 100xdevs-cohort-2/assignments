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
    this.result = 0;
    this.expressions = ['+', '-', '*', '/']
    this.numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    this.braces = ['(', ')']
    
  }

  add(a){
    this.result += a;
  }

  subtract(a){
    this.result -= a;
  }

  multiply(a){
    this.result *= a;
  }

  divide(a){
    if(a == 0){
      throw new Error("Division by 0");
    }

    this.result /= a;
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }

  static #checkParanthesis(str){
    let count = 0;
    for(let i = 0; i<str.length; i++){
      let c = str[i];
      if(c == '(') count++;
      else if(c == ')') count--;
      if(count < 0) return false;
    }

    return count == 0;
  }


  static #evaluate(lastOp, stack, num){
    if(lastOp == '+'){
      stack.push(num);
    }else if(lastOp == '-'){
      stack.push(-1 * num);
    }else if(lastOp == '*'){
      stack.push(stack.pop()*num);
    }else if(lastOp == '/'){
      if(num == 0){
        throw new Error('Division by 0');
      }
      stack.push((stack.pop()/num));
    }
  }

  static #sum(stack){
    
    let sum = 0;
    
    while(stack.length != 0){
      let curr = stack.pop();
      sum+= curr
    }
    return sum;
  }


  static #parseNum(str, i){
    let num_str = '';
    while(i < str.length && ( (str[i] >= '0' && str[i] <= '9') || str[i] == '.')){
      num_str+=str[i];
      i++;
    }

    return {num: Number(num_str), idx: i-1}
  }


  static #recur(str, start){
    let stack = [];
    let num = 0;
    let isDecimal = false;
    let decimalNum = 0;
    let divisor = 1;
    let lastOp = '+';

    for(let i = start; i<str.length; i++){
      let c = str[i];

      if(c>='0' && c <= '9'){
       let temp = Calculator.#parseNum(str, i);
       num = temp.num;
       i = temp.idx;
      }else if('+-*/'.includes(c)){
        Calculator.#evaluate(lastOp, stack, num);
        num = 0;
        lastOp = c;
        divisor = 1;
        isDecimal = false
      }else if(c == '('){
        let res = Calculator.#recur(str, i+1);
        num = res.val;
        i = res.idx;
        divisor = 1;
        isDecimal = false
      }else if(c == ')'){
        Calculator.#evaluate(lastOp, stack, num);
        let sumStack = Calculator.#sum(stack);
        return {val:sumStack, idx: i};
      }
    }

    Calculator.#evaluate(lastOp, stack, num);
    return {val: Calculator.#sum(stack), idx: str.length};

  }

  calculate(str){

    const validChar = char => {
      if( this.numbers.includes(char) || this.braces.includes(char) || this.expressions.includes(char) || char === '.'){
        return true;
      }else if(char != ' ' ){
        throw new Error("Invalid Input");
      }else{
        return false;
      }
    }

   

    let formatted = str.split("").filter(validChar).join("");

    if(!Calculator.#checkParanthesis(formatted)){
       throw new Error("Invalid Paranthesis");
    }

    this.result = Calculator.#recur(formatted, 0).val;
    return this.result;
  }

  
}

module.exports = Calculator;
