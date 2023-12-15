class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    if (isNaN(number)) {
      throw new Error("Error");
    }
    this.result += number;
  }

  subtract(number) {
    if (isNaN(number)) {
      throw new Error("Error");
    }
    this.result -= number;
  }

  multiply(number) {
    if (isNaN(number)) {
      throw new Error("Error");
    }
    this.result *= number;
  }

  divide(number) {
    if (isNaN(number)) {
      throw new Error("Invalid input: Input must be a number");
    }
    if (number === 0) {
      throw new Error("Error");
    } else {
      this.result /= number;
    }
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
    if (/^[0-9+*\/().-]*$/.test(expression)) {
      this.result = eval(expression);
    } else {
      throw new Error("Error");
    }
    // Evaluate expression using eval() - be cautious with eval for security reasons
  }
}

module.exports = Calculator;
