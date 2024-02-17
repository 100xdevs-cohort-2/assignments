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
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num == 0) throw new Error("Divide By Zero Error");
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(op) {
    op = op.replace(/\s/g, "");

    if (op.match(/[A-Za-z]/)) {
      throw new Error("Invalid Operation");
    }

    let stack = [];

    let opArr = op.split(/(?=[+\-/*()]|(?<=[+\-*/()]))/g);

    for(let x of opArr)
    {
      //  Iterate over each. Keep pushing the elements on the stack.

      if(x == ")")
      {
        // Pop all the elements of the stack till you find the opening bracket
        let tempArr = []
        let curr;
        while(stack.length != 0)
        {
        curr = stack.pop();
        if(curr == "(") break;
        tempArr.push(curr);
        }

        if(curr != "(")
        {
          throw new Error("Invalid Expression");
        }
        tempArr.reverse();
        let res = solve(tempArr.join(""));
        stack.push(res.toString());
      }
      else
      {
        stack.push(x);
      }

    }

    // Now solve once the stack is generated.
    
    return this.result = solve(stack.join(""));

  }
}

function solve(mathExpression) {
  // Contains no brackets
  // Split the string around the operators

  //Check if it contains brackets
  if(mathExpression.match(/[()]/))
  {
    throw new Error("Invalid Expression");
  }

  mathExpression = mathExpression.replace(/\s/g,"");
  let mathArr = mathExpression.split(/(?=[+*/\-])|(?<=[+*/\-])/g);

  if (mathArr.length == 1) return Number(mathArr[0]);
  if (mathArr.length == 2) throw new Error("Invalid Expression");

  let res = 0;

  let left = Number(mathArr[0]);
  let op = mathArr[1];

  if (op == "+" || op == "-") {
    if (op == "+") {
      return Number(left + solve(mathArr.slice(2).join("")))
    }
    else{
      return Number(left - solve(mathArr.slice(2).join("")))
    }
  } else if (op == "/" || op == "*") {
    let right = Number(mathArr[2]);
    if(op == "/")
    {
      if(right == 0) throw new Error("Divide By Zero");
      left = left / right;
      let tempArr = mathArr.slice(3);
      tempArr.unshift(left.toString());

      return solve(tempArr.join(""));      
    }
    else
    {
      left = left * right;
      let tempArr = mathArr.slice(3);

      tempArr.unshift(left.toString());

      return solve(tempArr.join(""));   
    }
  } else {
    throw new Error("Invalid Expression");
  }
}

module.exports = Calculator;
