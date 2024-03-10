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
    // Remove continuous spaces and validate expression
    const sanitizedExpression = expression.replace(/\s+/g, '').replace(/[^0-9+\-*/().]/g, '');

    // Evaluate the expression
    try {
      this.result = eval(sanitizedExpression);
      if (!isFinite(this.result)) {
        throw new Error("Invalid expression result");
      }
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;
