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

    add(number) {
        this.result += this.validateInput(number);
    }

    subtract(number) {
        this.result -= this.validateInput(number);
    }

    multiply(number) {
        this.result *= this.validateInput(number);
    }

    divide(number) {
        const validatedNumber = this.validateInput(number);
        if (validatedNumber == 0) {
            throw new Error("Error");
        } else {
            this.result /= validatedNumber;            
        }
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    validateInput(input) {
        if (/^[+-]?\d+(\.\d+)?$/.test(input)) {
            return parseFloat(input);
        } else {
            throw new Error("Error");
        }
    }
    
    evaluateExpression(expression) {
        const cleanedExpression = expression.replace(/\s+/g, '').trim();
        // Check for alphabets in the expression before attempting to tokenize
        if (/[a-zA-Z]/.test(cleanedExpression)) {
            throw new Error("Error");
        }
        const tokens = cleanedExpression.match(/(\d+(\.\d+)?|[+\-*/()])/g) || [];
        const operandStack = [];
        const operatorStack = [];
    
        function applyOperator() {
            const operator = operatorStack.pop();
            const operand1 = operandStack.pop();
            const operand2 = operandStack.pop();
    
            switch (operator) {
                case '+':
                    operandStack.push(operand1 + operand2);
                    break;
                case '-':
                    operandStack.push(operand2 - operand1);
                    break;
                case '*':
                    operandStack.push(operand1 * operand2);
                    break;
                case '/':
                    if (operand1 === 0) {
                        throw new Error("Error");
                    } else {
                        operandStack.push(operand2 / operand1);
                    }
                    break;
                default:
                    throw new Error("Error");
            }
        }
    
        for (const token of tokens) {
            if (!isNaN(parseFloat(token))) {
                operandStack.push(parseFloat(token));
            } else if (['+', '-'].includes(token)) {
                while (operatorStack.length > 0 && ['+', '-', '*', '/'].includes(operatorStack[operatorStack.length - 1])) {
                    applyOperator();
                }
                operatorStack.push(token);
            } else if (['*', '/'].includes(token)) {
                operatorStack.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                    applyOperator();
                }
                if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1] !== '(') {
                    throw new Error("Error");
                } else {
                    operatorStack.pop();
                }
            } else {
                throw new Error("Error");
            }
        }
    
        while (operatorStack.length > 0) {
            applyOperator();
        }
        if (operandStack.length !== 1 || operatorStack.length !== 0) {
            throw new Error("Error");
        }
        return operandStack[0];
    }

    calculate(expression) {
        const result = this.evaluateExpression(expression);
        this.result = result;
        return result;
    }
    
}
module.exports = Calculator;
