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
  
  //Function to return precedence of operators
  #precedence(c) {
      if(c == '^')
          return 3;
      else if(c == '/' || c == '*')
          return 2;
      else if(c == '+' || c == '-')
          return 1;
      else
          return -1;
  }

  #isExpressionValid(exp) {
      let st = [];
      
      for(let i = 0; i < exp.length; ++i) {
          if(exp[i] == '.') {
              if(i == 0) {
                  return false;
              } else if(i == exp.length - 1) {
                  return false;
              } else if((exp[i - 1] <= '0' || exp[i - 1] >= '9') || (exp[i + 1] <= '0' || exp[i + 1] >= '9')) {
                  return false;
              }
          } else if((exp[i] >= '0' && exp[i] <= '9') || exp[i] == '+' || exp[i] == '-' || exp[i] == '*' || exp[i] == '/' || exp[i] == '^' || exp[i] == '(' || exp[i] == ')') {
              if(exp[i] == '(') {
                  st.push(exp[i]);
              } else if(exp[i] == ')') {
                  if(st.length == 0) {
                      return false;
                  }
                  st.pop();
              }
          } else {
              return false;
          }
      }
      return st.length == 0;
  }

  #findResult(x, y, operator) {
    let result;
    switch(operator) {
        case '^': 
            result = Math.pow(x, y);
            break;
        case '/':
            if(y != 0) {
                result = x / y;
            } else {
                throw new Error('Divide by zero');
            }
            break;
        case '*': 
            result = x * y;
            break;
        case '+':
            result = x + y;
            break;
        case '-': 
            result = x - y;
            break;
        default:
            result = 0;
    }
    return result;
  }

  add(number) {
    this.result = this.result + number;
  }

  subtract(number) {
    this.result = this.result - number;
  }

  multiply(number) {
    this.result = this.result * number;
  }

  divide(number) {
    if(number == 0) {
      throw new Error("Divide by 0");
    } else {
      this.result = this.result / number;
    }
  }

  calculate(str) {
    let st = [];
    let result = [];
    const exp = str.replace(/\s/g, "");
    
   
        // check if the expression is valid or not
        const isValid = this.#isExpressionValid(exp);
        if(isValid == false) {
            throw new Error("Invalid expression");
        } else {
            for(let i = 0; i < exp.length; ++i) {
                if(exp[i] >= '0' && exp[i] <= '9') {
                    let tempExp = "";
                    let wasDot = false;
                    while(i < exp.length && (exp[i] >= '0' && exp[i] <= '9') || exp[i] == '.') {
                        tempExp += exp[i];
                        if(exp[i] == '.') {
                            wasDot = true;
                        }
                        i++;
                    }
                    i--;
                    if(wasDot == true) {
                        result.push(parseFloat(tempExp));
                    } else {
                        result.push(parseInt(tempExp));
                    }
                    // console.log(result);
                } else {
                    const priorityOfCurrentOperator = this.#precedence(exp[i]);
                    if(st.length == 0 || exp[i] == '(' || st[st.length - 1] == '(' || this.#precedence(st[st.length - 1]) < priorityOfCurrentOperator) {
                        st.push(exp[i]);
                        // console.log(st);
                    } else if(exp[i] == ')' || this.#precedence(st[st.length - 1]) >= priorityOfCurrentOperator) {
                        if(exp[i] == ')' && st.length == 0) {
                            throw new Error('Invalid expression');
                        } else {
                            while((st.length != 0) && (this.#precedence(st[st.length - 1]) >= priorityOfCurrentOperator)) {
                                if(st[st.length - 1] == '(') {
                                    if(exp[i] == ')') {
                                        st.pop();
                                    }
                                    break;
                                }
                                // pull out the two topmost element from the result stack
                                const rightOperand = result[result.length - 1];
                                result.pop();
                                const leftOperand = result[result.length - 1];
                                result.pop();
                                const operator = st[st.length - 1];
                                st.pop();
        
                                if(exp[i] == ')' && st.length == 0) {
                                    throw new Error('Invalid expression');
                                }
        
                                // calculate the intermediate result
                                const tempResult = this.#findResult(leftOperand, rightOperand, operator);
                                result.push(tempResult);
                            }
                            if(exp[i] != ')') {
                                st.push(exp[i]);
                            }
                        }
    
                    }
                }
            }
            while(st.length != 0) {
                const rightOperand = result[result.length - 1];
                result.pop();
                const leftOperand = result[result.length - 1];
                result.pop();
                const operator = st[st.length - 1];
                st.pop();
            
                // calculate the intermediate result
                const tempResult = this.#findResult(leftOperand, rightOperand, operator);
                result.push(tempResult);
            }
            this.result = result[0];

          }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
}

module.exports = Calculator;
