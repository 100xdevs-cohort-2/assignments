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
    this.result = 0
  }

  add(num) {
    this.result += num
  }

  subtract(num) {
    this.result -= num
  }

  multiply(num) {
    this.result *= num
  }

  divide(num) {
    if (num == 0) {
      throw new Error("Divide by 0 error.")
    }
    this.result /= num
  }

  clear() {
    this.result = 0
  }

  getResult() {
    return this.result
  }

  calculate(expression) {
    // add brackets at start and end for uniformity purposes
    expression = '(' + expression
    expression += ')'

    // replace whitespace in expression
    expression = expression.replace(/\s+/g, '')

    // check for letter characters in expression
    if (/([a-zA-Z])/.test(expression)) {
      throw new Error("Incorrect literal in expression.")
    }

    // check for direct divide by 0 errors
    if (/(\/0)/.test(expression)) {
      throw new Error("Divide by 0 error.")
    }

    // function to decide operator precedence while evaluation
    function operatorPrecedence(op) {
      if (op === '+' || op === '-') {
        return 1
      }
      if (op === '*' || op === '/') {
        return 2
      }
    }

    // function to evaluate mini operations while evaluation
    function applyOperator(operand1, operand2, op) {
      if (op === '+') {
        return operand1 + operand2
      } else if (op === '-') {
        return operand1 - operand2
      } else if (op === '*') {
        return operand1 * operand2
      } else {
        if (operand2 === 0) {
          throw new Error('Divide by 0 error.')
        }
        return operand1 / operand2
      }
    }

    let stack = []
    let operatorStack = []
    const operators = ['+', '-', '*', '/']

    for (let i = 0; i < expression.length; ) {
      if (expression[i] === '(') {
        // check for opening bracket
        stack.push('(')
        i++
      } else if (/([0-9.])/.test(expression[i])) {
        // check for operands
        let num = ""
        while (i < expression.length && /([0-9.])/.test(expression[i])) {
          num += expression[i]
          i++
        }
        stack.push(parseFloat(num))
      } else if (operators.includes(expression[i])) {
        // check operators
        if (operatorStack.length > 0 && operatorPrecedence(operatorStack[operatorStack.length - 1]) > operatorPrecedence(expression[i])) {
          // check if there is an operator precedence evaluation necessary
          let operand1, operand2
          if (expression[i - 1] === ')') {
            operand1 = stack[stack.length - 2]
            operand2 = stack[stack.length - 1]
          } else {
            operand1 = stack[stack.length - 3]
            operand2 = stack[stack.length - 2]
          }

          if (operand1 === '(' || operand2 === '(') {
            operatorStack.push(expression[i])
            i++
            continue
          }

          let prevResult = applyOperator(operand1, operand2, operatorStack[operatorStack.length - 1])
          stack.splice(expression[i - 1] === ')' ? stack.length - 2 : stack.length - 3, 2, prevResult)
          operatorStack.pop()
        }
        operatorStack.push(expression[i])
        i++
      } else {
        // check closing bracket
        if (stack[stack.length - 1] === '(') {
          throw new Error("No expression between brackets.")
        }
        while (stack.length > 0 && stack[stack.length - 2] !== '(') {
          let operand1 = stack[stack.length - 2]
          let operand2 = stack[stack.length - 1]
          let operator = operatorStack[operatorStack.length - 1]
          if (operand1 === undefined || operand2 === undefined || operator === undefined) {
            throw new Error("Incorrect brackets.")
          }
          stack.splice(stack.length - 2, 2, applyOperator(operand1, operand2, operator))
          operatorStack.pop()
        }
        if (stack.length === 0) {
          throw new Error("Mismatched brackets.")
        }
        stack.splice(stack.length - 2, 1)
        i++
      }
    }

    // in case operators are still remaining to be processed
    while (operatorStack.length > 0) {
      let operand1 = stack[stack.length - 2]
      let operand2 = stack[stack.length - 1]
      let operator = operatorStack[operatorStack.length - 1]
      if (operand1 === undefined || operand2 === undefined) {
        throw new Error("Incorrect number of operands for evaluation.")
      }
      stack.splice(stack.length - 2, 2, applyOperator(operand1, operand2, operator))
      operatorStack.pop()
    }

    // if there is still some operands/brackets on stack after processing all operators, there is mismatch of brackets
    if (stack.length > 1) {
      throw new Error("Mismatched brackets in expression.")
    }

    this.result = stack[0]

  }
}

module.exports = Calculator;
