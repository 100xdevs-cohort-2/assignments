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
      throw new Error('Division by zero');
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
    // Remove spaces from the expression
    expression = expression.replace(/\s+/g, '');

    // Validate expression (basic check for invalid characters)
    if (!/^[\d+\-*/().]+$/.test(expression)) {
      throw new Error('Invalid expression');
    }

    // Check for division by zero
    if (/\/0/.test(expression)) {
      throw new Error('Division by zero');
    }

    // Evaluate the expression
    try {
      this.result = eval(expression);
    } catch (e) {
      throw new Error('Error in evaluating the expression');
    }
  }
}

module.exports = Calculator;