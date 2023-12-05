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
      return evaluate(str)
  }
}



function evaluate(expression)
    {
        let tokens = expression.split('');
  
  let values = [];
  
  let ops = [];
  
        for (let i = 0; i < tokens.length; i++)
        {
            if (tokens[i] == ' ')
            {
                continue;
            }
            if (tokens[i] >= '0' && tokens[i] <= '9')
            {
                let sbuf = "";
                
                 while (i < tokens.length &&
                        tokens[i] >= '0' &&
                            tokens[i] <= '9')
                {
                    sbuf = sbuf + tokens[i++];
                }
                values.push(parseInt(sbuf, 10));
                
                 i--;
            }
            else if (tokens[i] == '(')
            {
                ops.push(tokens[i]);
            }
            else if (tokens[i] == ')')
            {
                while (ops[ops.length - 1] != '(')
                {
                  values.push(applyOp(ops.pop(),
                                   values.pop(),
                                  values.pop()));
                }
                ops.pop();
            }
  
   else if (tokens[i] == '+' ||
                     tokens[i] == '-' ||
                     tokens[i] == '*' ||
                     tokens[i] == '/')
            {
               
                while (ops.length > 0 &&
                         hasPrecedence(tokens[i],
                                     ops[ops.length - 1]))
                {
                  values.push(applyOp(ops.pop(),
                                   values.pop(),
                                 values.pop()));
                }
                ops.push(tokens[i]);
            }
        }
        while (ops.length > 0)
        {
            values.push(applyOp(ops.pop(),
                             values.pop(),
                            values.pop()));
        }
        return values.pop();
    }
  
    
     function hasPrecedence(op1, op2)
    {
        if (op2 == '(' || op2 == ')')
        {
            return false;
        }
        if ((op1 == '*' || op1 == '/') &&
               (op2 == '+' || op2 == '-'))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    function applyOp(op, b, a)
    {
        switch (op)
        {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b == 0)
            {
                document.write("Cannot divide by zero");
            }
            return parseInt(a / b, 10);
        }
        return 0;
    }

module.exports = Calculator;
