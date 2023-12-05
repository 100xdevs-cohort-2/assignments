class Calculator {
    constructor() {
        this.result = 0;
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
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= number;
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        // Remove extra spaces and validate expression
        expression = expression.replace(/\s+/g, "");
        if (!/^[0-9+\-*/().]+$/.test(expression)) {
            throw new Error("Invalid expression");
        }

        // Evaluate the expression
        this.result = eval(expression);
    }
}

// Example usage:
const calculator = new Calculator();

calculator.add(5);
calculator.multiply(2);
console.log(calculator.getResult()); // Output: 10

calculator.clear();
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Output: 24
