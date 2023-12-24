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
  }
  add(number){
    this.result = this.result + parseInt(number);

  }
  subtract(number){
    this.result = this.result - parseInt(number);

  }
  multiply(number){
    this.result = this.result * parseInt(number);
    
  }
  divide(number){
    if(number == 0){
      throw new TypeError("Error")
    }
    this.result = this.result / parseInt(number);
  }
  clear(number){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }

  isNumeric(value) {
    return typeof value === 'number' && !isNaN(value);
  }


  isValid(expression) {
    var stack = [];
    
    for (var i = 0; i < expression.length; i++) {
      if (expression[i] === '(') {
        stack.push('(');
      } else if (expression[i] === ')') {
        if (stack.length === 0) {
          return false; 
        }
        stack.pop();
      }
    }
    
    return stack.length === 0; 
  };





  infixToPostfix(infix) {

    if (!this.isValid(infix)) {
      throw new TypeError("Error")
    }



    var output = [];
    var stack = [];
  
    var precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    infix = infix.replace(/\s/g, ''); // Remove spaces from the input string

    var tokens = infix.match(/(\d+(\.\d+)?|[\+\-\*\/\^\(\)])/g);
  
    if (!tokens) {
      return "Invalid input";
    }
  
    tokens.forEach(function (token) {
      if (/\d+(\.\d+)?/.test(token)) {
        output.push(token);
      } else if (token === '(') {
        stack.push(token);
      } else if (token === ')') {
        if (stack.length === 0) {
          throw new TypeError("Error")
        }
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          output.push(stack.pop());
        }
        stack.pop(); // Pop the '('
      } else {
        while (
          stack.length > 0 &&
          precedence[token] <= precedence[stack[stack.length - 1]]
        ) {
          output.push(stack.pop());
        }
        stack.push(token);
      }
    });
    while (stack.length > 0) {
      output.push(stack.pop());
    }
  
    return output;
  }

  containsAlphabets(str) {
    return /[a-zA-Z]/.test(str);
  }


  calculatePostfix(postfix) {
    var stack = [];
    postfix.forEach(function (token) {
      if (/\d+(\.\d+)?/.test(token)) {
        stack.push(parseFloat(token));
      } else {
        var operand2 = stack.pop();
        var operand1 = stack.pop();
  
        switch (token) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            if(operand2 == 0) throw new TypeError("Error")
            stack.push(operand1 / operand2);
            break;
        }
      }
    });
  
    return stack[0];
  }
  
  calculate(query){
    let queryArray = query.split("");
    let ops = [];
    for(let item of queryArray){
      if(this.containsAlphabets(item)){
        throw new TypeError('Input must be a number');
      }
      if(item != " "){
        ops.push(item)
      }
    }
    let queryString = ops.join("");
    let postfix = this.infixToPostfix(queryString);
    let answer = this.calculatePostfix(postfix)
    this.result =  answer
  }
}

module.exports = Calculator;
