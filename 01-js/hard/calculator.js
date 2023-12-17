class Calculator {
  /**
   * Initializes a new Calculator object.
   * The result variable is set to 0.
   */
  constructor() {
    this.result = 0;
  }

  /**
   * Validates if the given string contains only valid numerical and arithmetic characters.
   * @param {string} numberString - The string to be validated.
   * @returns {boolean} - True if the string is valid, false otherwise.
   */
  validate(numberString) {
    const regex = /^[\d+\-*/().]+$/;
    return regex.test(numberString);
  }

  /**
   * Adds the given number to the result.
   * @param {number} number - The number to be added.
   */
  add(number) {
    this.result += number;
  }

  /**
   * Subtracts the given number from the result.
   * @param {number} number - The number to be subtracted.
   */
  subtract(number) {
    this.result -= number;
  }

  /**
   * Multiplies the result by the given number.
   * @param {number} number - The number to be multiplied.
   */
  multiply(number) {
    this.result *= number;
  }

  /**
   * Divides the result by the given number.
   * Throws an error if the given number is 0.
   * @param {number} number - The number to be divided by.
   * @throws {Error} - If the given number is 0.
   */
  divide(number) {
    if (number === 0) throw new Error("Cannot divide by zero");
    this.result /= number;
  }

  /**
   * Resets the result to 0.
   */
  clear() {
    this.result = 0;
  }

  /**
   * Returns the current value of the result.
   * @returns {number} - The current value of the result.
   */
  getResult() {
    return this.result;
  }

  /**
   * Evaluates the given mathematical expression and updates the result.
   * @param {string} expression - The mathematical expression to be evaluated.
   * @throws {Error} - If the expression is invalid or contains division by zero.
   */
  calculate(expression) {
    const cleanedExpression = expression.replace(/\s+/g, '');
    if (!this.validate(cleanedExpression)) {
      throw new Error("Invalid expression");
    }
    if (cleanedExpression.includes('/0')) {
      throw new Error("Cannot divide by zero");
    }
    this.result = eval(cleanedExpression);
  }
}

module.exports = Calculator;
