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
  Calculator(){
    this.result=0;

  }
  add(number){
    this.result+=number;
  }
  subtract(number){
    this.result-=number;
  }
  multiply(number){
    this.result*=number;
  }
  divide(number){
    if(number==0){
      console.log("Zero cannot be divided")
    }
    else{
      this.result/=number;
    }

  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  calculate(expression) {
    // Remove multiple continuous spaces and trim the expression
    expression = expression.replace(/\s+/g, ' ').trim();

    // Check for invalid characters in the expression
    if (!/^[0-9\s\+\-\*\/\(\)]+$/.test(expression)) {
      throw new Error("Invalid characters in the expression");
    }

    const tokens = expression.match(/(\d+|\S)/g);
    const evaluateExpression=()=>{
      const stack=[];
      let currtoperator='+';
      
      while(tokens.length>0){
        const token = tokens.shift();
        if(token==='('){
          stack.push(evaluateExpression())
        
          
        }
        else if(token===')'){
          break;
        }
        else if (['+', '-', '*', '/'].includes(token)){
          currtoperator =token;
        }
        else{
          const num = parseFloat(token);
          switch(currtoperator){
            case '+':
              stack.push(num);
              break
            case '-':
              stack.push(-num);
              break;

              case '*':
              stack.push(stack.pop() * num);
              break;
            case '/':
              stack.push(stack.pop() / num);
              break;
          }

        }
      }
      return stack.reduce((acc, val) => acc + val, 0);

    }

  }
}
const calculator = new Calculator();
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Output should be 24
module.exports = Calculator;
