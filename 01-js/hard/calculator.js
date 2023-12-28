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
  result;
  constructor () {
    this.result = 0;
  }
  add (x) {
    this.result += x;
  }
  subtract (x) {
    this.result -= x;
  }
  multiply (x) {
    this.result *= x;
  }
  divide (x) {
    if (x != 0)
      this.result /= x;
    else
      throw new Error("Divide by 0");
  }
  clear () {
    this.result = 0;
  }
  getResult () {
    return this.result;
  }
  calculate (exp_str) {
    // console.log("Type = " + typeof(exp))
    var exp = exp_str.split("").filter(function(x){
      if (x != " ")
      {
        return x;
      }
    });
    // console.log("Expression = " + exp);

    var operators = [];
    var operands = [];
    var first;
    var second;
    for(var i=0; i<exp.length; i++) {
      var ch = exp[i];
      // console.log("Ch = " + ch);
      if (ch == '+') {
        var last_op = operators[operators.length-1];
        if(last_op == '*'){
          operators.pop();
          second = parseFloat(operands.pop())
          first = parseFloat(operands.pop())
          operands.push(first*second);
        } 
        else if (last_op == '/') {
          operators.pop();
          second = parseFloat(operands.pop())
          first = parseFloat(operands.pop())
          operands.push(first/second);
        }
          operators.push(ch);
      }
      else if (ch == '-') {
        var last_op = operators[operators.length-1];
        if(last_op == '*'){
          operators.pop();
          second = parseFloat(operands.pop())
          first = parseFloat(operands.pop());
          operands.push(first*second);
        } 
        else if (last_op == '/') {
          operators.pop();
          second = parseFloat(operands.pop())
          first = parseFloat(operands.pop())
          operands.push(first/second);
        }
          operators.push(ch);
      }
      else if (ch == '*') {
        operators.push(ch);
      }
      else if (ch == '/') {
        operators.push(ch);
      }
      else if (ch == ')') {
        last_op = operators.pop();
        while(last_op != '(') { 
          second = parseFloat(operands.pop());
          first = parseFloat(operands.pop());
          // console.log("First ="+first + ", Second="+second);
          if (last_op == '+')
            operands.push(first+second);
          else if (last_op == '-')
            operands.push(first-second);
          else if (last_op == '*')
            operands.push(first*second);
          else if (last_op == '/')
            operands.push(first/second);
          last_op = operators.pop();
        }
      }
      else { // Number or (, if abc we'll throw an error
        if (ch.toLowerCase() != ch.toUpperCase()) {
          throw new Error("Alphabets encountered");
        }
        if (ch == '(') {
          operators.push(ch);
        }
        else {
          operands.push(ch);
        }
      }
      // console.log("operands = " + operands);
      // console.log("operators = " + operators);
      // console.log("========================");
    }
    while(operators.length != 0) { 
      last_op = operators.pop();
      if (last_op == '(')
        throw new Error("Invalid Parenthesis");
      second = parseFloat(operands.pop())
      first = parseFloat(operands.pop())
      if (last_op == '+')
        operands.push(first+second);
      else if (last_op == '-')
        operands.push(first-second);
      else if (last_op == '*')
        operands.push(first*second);
      else if (last_op == '/')
        operands.push(first/second);
    }
    // console.log("After removing spaces = " + exp)
    // console.log("operands = " + operands);
    // console.log("operators = " + operators);
    return operands.pop();
  }
}

module.exports = Calculator;

// var cal = new Calculator();
// x = cal.calculate('10 +   2 *    (6 - (4 + 1 ) / 2) + 7')
// console.log(x);