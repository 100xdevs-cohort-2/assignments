class Calculator {
    constructor(input = '') {
      this.result = 0;
      this.setInput(input);
    }
  
    setInput(input) {
      if (!this.isValidInput(input)) {
        throw new Error('Invalid input. Only digits, "+", "-", "*", "/", and "." are allowed.');
      }
      this.cleanedInput = input.replace(/\s/g, '');
    }
  
    isValidInput(input) {
      return /^[\d\s\+\-\*\/\.]*$/.test(input);
    }
  
    getResult() {
      return this.result;
    }
  
    updateResult(newResult) {
      this.result = newResult;
    }
  
    clear() {
      this.result = 0;
      return "Result cleared!";
    }
  
    operate(operator, operand) {
      switch (operator) {
        case '+':
          return this.result + operand;
        case '-':
          return this.result - operand;
        case '*':
          return this.result * operand;
        case '/':
          if (operand === 0) {
            throw new Error('Division by zero is not allowed.');
          }
          return this.result / operand;
        default:
          throw new Error('Invalid operator.');
      }
    }
  
    calculate(input) {
      if (input !== undefined) {
        this.setInput(input);
      }
  
      const expression = this.cleanedInput.split(/\b/).filter(token => token.trim() !== '');
  
      let currentOperand = '';
      let currentOperator = '+';
      let tempResult = 0;
  
      for (const token of expression) {
        if (/\d|\./.test(token)) {
          currentOperand += token;
        } else {
          tempResult = this.operate(currentOperator, parseFloat(currentOperand));
          currentOperator = token;
          currentOperand = '';
        }
      }
  
      const finalResult = this.operate(currentOperator, parseFloat(currentOperand));
  
      this.updateResult(finalResult);
      return this.getResult();
    }
  }
    