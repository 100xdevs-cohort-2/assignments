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

  constructor() {
    this.result = 0;
    this.index = 0;
    this.bracketStack = [];
  }

  add(num){
    this.result += num;
  }

  subtract(num){
    this.result -= num;
  }

  multiply(num){
    this.result = this.result === 0 ? num : this.result * num;
  }

  divide(num){
    if(num === 0)
      throw new Error("Zero Division Error!");

    this.result = this.result / num;
  }

  clear()
  {
    this.result = 0;
  }

  getResult()
  {
    return this.result;
  }

  IsvalidExpression(expression)
  {
    // checks if the expressions are valid

    for(let character of expression){

      // if character is an '(' then push it to bracket Stack
      if(character === '(')
      {
        this.bracketStack.push(character);
      }

      // in case of ')' check if the top element of the stack is '('
      else if(character === ')')
      {
        let lastIndex = this.bracketStack.length - 1;
        if(this.bracketStack.length !== 0 && this.bracketStack[lastIndex] === '(')
        {
          // if it is true pop the top element of the stack
          this.bracketStack.pop();
        }

        // if not return false
        else{

          return false;
        }
      }
    }

    // finally check if the bracket Stack is empty 
    return (this.bracketStack.length === 0);

  }

  solve(expression)
  {
    let stack = [];
    let number = 0;
    let sign = '+';
    let currentNumber = '';

    // checks if the character is either a digit or a '.' 
    const isDigitOrDot = (char) => /\d|\./.test(char);

    // iterate through the expression
    while(this.index < expression.length)
    {
      let character = expression[this.index];

      // if it's a digit or a '.' then add it to var currentNumber
      if(isDigitOrDot(character))
      {
        currentNumber += character;
      }

      if((isNaN(character) && (character !== '.')) || this.index === expression.length-1)
      {

        // if currentNumber isn't empty or it is the last index of the expression
        // convert it into float and store it in number var
        if ((currentNumber !== '') || (this.index === expression.length-1)) 
        {
          number = parseFloat(currentNumber);
          currentNumber = '';
        }

        // perform a recursive call if the character is '('
        if(character == '(')
        {
          this.index++;
          number = this.solve(expression);       
        }

        // call stackOperations if the character is ')'
        else if(character === ')')
        {
          this.stackOperations(stack, number, sign);
          break;
        }

        // if it encounters alpha values 
        // throw an error
        else if(/^[A-Za-z]+$/.test(character))
        {
          throw new Error("Invalid expression!");
        }

        // perform stack operations and update the variables
        this.stackOperations(stack, number, sign);
        number = 0;
        sign = character;

      }
      this.index++;
    }


    // finally add all the elements pushed in the stack
    let total = 0;
    while(stack.length != 0)
    {
      total += stack.pop();
    }

    return total;
  }

  calculate(expression) {

    // remove all the whitespaces using regex from the input expression
    expression = expression.replace(/[ ]/g, "");

    // check for invalid characters
    if (/[^0-9]]/.test(expression)) {
      throw new Error("Invalid Expression");
    }

    // check for zero division error
    if (/\/0/.test(expression)) {
        throw new Error("Cannot divide by zero");
    }

    this.result = eval(expression);
    return this.result;
}

  
  // calculate(expression)
  // {
  //     // remove all the whitespaces using regex from the input expression
  //     expression = expression.replace(/[ ]/g, "");

  //     // if the expression is not valid throw an error
  //     if(!this.IsvalidExpression(expression))
  //     {
  //       throw new Error('Invalid Parenthesis');
  //     }
      
  //   //  invoke the solve method 
  //     this.result = this.solve(expression);
  // }

  stackOperations(stack, number, sign)
  {
    switch (sign) {
      case '+':
        stack.push(number);
        break;
      
      case '-':
        stack.push(-1 * number);
        break;
    
      case '*':
        stack.push(stack.pop() * number);
        break;
    
      case '/':
        if (number === 0) {
          throw new Error("Zero Division Error!");
        }
        stack.push(stack.pop() / number);
        break;
    }
  }

}

// let calc = new Calculator();
// calc.calculate('10 + (2 + 3')
// console.log(result)
// calc.add(10);
  // calc.divide(3);
// calc.divide(2);
// calc.add(5);

// console.log(calc.result);
// console.log(calc.getResult());
module.exports = Calculator;
        
