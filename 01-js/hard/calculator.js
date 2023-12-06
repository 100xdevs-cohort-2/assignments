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
    constructor(initialValue = 0) {
        this.num = initialValue;
    }

    add(num) {
        if (typeof num !== 'number') {
            throw new Error('The type is not number');
        }
        this.num += num;
    }

    subtract(num) {
        if (typeof num !== 'number') {
            throw new Error('The type is not number');
        }
        this.num -= num;
    }

    multiply(num) {
        if (typeof num !== 'number') {
            throw new Error('The type is not number');
        }
        this.num *= num;
    }

    divide(num) {
        if (typeof num !== 'number') {
            throw new Error('The type is not number');
        }
        if (num === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.num /= num;
    }

    clear() {
        this.num = 0;
    }

    getResult() {
        return this.num;
    }

    calculate(expression) {
        const re = /[a-zA-Z]+/g;
        if (re.test(expression)) {
            throw new Error("Invalid expression");
        }
        expression = expression.replace(/\s+/g, " ");
        let result = eval(expression);
        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }
        this.num = result;
    }
}

module.exports = Calculator;
