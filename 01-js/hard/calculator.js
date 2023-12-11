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
        this.digits = "0123456789";
        this.operations = "+-/*";
    }
    add(number) {
        this.result += number;
    }
    subtract(number) {
        this.result -= number;
    }
    multiply(number) {
        this.result *= number;
    }
    divide(number) {
        if(number == 0)
            throw new Error("Divide By Zero")
        else
            this.result /= number;
    }
    clear() {
        this.result = 0;
    }
    getResult() {
        return this.result;

    }
    calculate(expression) {
        // remove spaces
        expression = expression.replace(/\s+/g, '');
        // console.log("Expression :", expression)
        // check for validity of expression
        let p = 'a';
        let n = expression.length;
        let valid = true;
        let openBrackets = 0;
        for(let i = 0; i < n && valid; i++) {
            let ch = expression[i];
            if(this.digits.includes(ch))
                ;
            else if(this.operations.includes(ch)) {
                if(this.operations.includes(p)) {
                    // console.log("Validity Failed :", p, ch);
                    valid = false;
                }
                    
            }
            else if(ch == '(')
                openBrackets += 1;
            else if(ch == ')')
                openBrackets -= 1;
            else if(ch == '.') {
                if(!this.digits.includes(p)) {
                    valid = false;
                }
            }
            else {
                // console.log("Validity Failed due to else block:", ch);
                valid = false;
            }
                
            if(openBrackets < 0) {
                // console.log("Validity Failed due to openBrackets :", openBrackets)
                valid = false;
            }
            p = ch;
        }
        if(openBrackets != 0) {
            // console.log("Validity Failed due to openBrackets :", openBrackets)
            valid = false;
        }

        if(!valid)
            throw new Error("Invalid Expression");
        
        // Compute Expression
        if(expression[0] == '(' && expression[n - 1] == ')') {
            this.calculate(expression.substring(1, n - 1));
            return this.getResult();
        }
            

        let breaks = [];
        openBrackets = 0;
        for(let i = 0; i < n; i++) {
            let ch = expression[i];
            if(ch == '(')
                openBrackets += 1;
            else if(ch == ')')
                openBrackets -= 1;
            
            if(this.operations.includes(ch) && openBrackets == 0)
                breaks.push(i);
        }
        
        if(breaks.length == 0) {
            this.result = Number(expression);
            return this.getResult();
        }
        breaks.push(n);

        // console.log("Breaks :", breaks);

        let stack = new Array();
        let startIndex = 0;
        for(let i = 0; i < breaks.length - 1; i++) {
            let temp = new Calculator();
            stack.push(temp.calculate(expression.substring(startIndex, breaks[i])));
            stack.push(expression[breaks[i]]);
            startIndex = breaks[i] + 1;
        }
        stack.push(this.calculate(expression.substring(startIndex)))

        // console.log("Stack : ", stack);

        // perform divides
        let newStack = new Array();
        for(let i = 0; i < stack.length; i++) {
            let ch = stack[i];
            if(ch == '/') {
                newStack.pop();  
                let temp = new Calculator();
                temp.add(stack[i - 1]);
                temp.divide(stack[i + 1]);
                i += 1;
                newStack.push(temp.getResult());
            }
            else {
                newStack.push(ch);
            }
        }

        // console.log("Stack after divides : ", newStack);

        // perform multiplies
        let newStack1 = new Array();
        for(let i = 0; i < newStack.length; i++) {
            let ch = newStack[i];
            if(ch == '*') {
                newStack1.pop();  
                let temp = new Calculator();
                temp.add(newStack[i - 1]);
                temp.multiply(newStack[i + 1]);
                i += 1;
                newStack1.push(temp.getResult());
            }
            else {
                newStack1.push(ch);
            }
        }

        // console.log("Stack after divides and multiplies : ", newStack1);

        // perform add and sub
        let ans = newStack1[0];
        for(let i = 2; i < newStack1.length; i += 2) {
            let ch = newStack1[i - 1];
            if(ch == '+')
                ans += newStack1[i]
            else
                ans -= newStack1[i]
        }
        
        // console.log("Result : ", expression, "=", ans)
        this.result = ans;
        return ans;
    }
}

module.exports = Calculator;
