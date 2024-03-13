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

  add(a) {
    this.result += a;
  }

  subtract(a) {
    this.result -= a;
  }
  multiply(a) {
    this.result = this.result * a;
  }
  divide(a) {
    if (a == 0) throw Error();
    this.result = this.result / a;
  }
  getResult() {
    return this.result;
  }
  clear() {
    this.result = 0;
  }

  calculate(expression) {
    this.result = eval(expression);
    if (this.result === Infinity) {
      throw new Error("Infinity");
    }
  }
}

//   calculate(str) {
//     let reducedStr = str.replace(/ /g, "");
//     this.calc(reducedStr);
//   }

//   calc(str) {
//     for (let i = 0; i < str.length; i++) {
//       if (
//         str[0] == "+" ||
//         str[0] == "/" ||
//         str[0] == "*" ||
//         str[0] == "-" ||
//         str[0] == ")"
//       ) {
//         throw Error;
//       }
//       if (str[i] == "+") {
//         let a = parseInt(str.slice(0, i));
//         a.add(str.slice(i + 1, str.length));
//       }
//       if (str[i] == "-") {
//         let a = parseInt(str.slice(0, i));
//         a.subtract(str.slice(i + 1, str.length));
//       }
//       if (str[i] == "*") {
//         let a = parseInt(str.slice(0, i));
//         a.multiply(str.slice(i + 1, str.length));
//       }
//       if (str[i] == "/") {
//         let a = parseInt(str.slice(0, i));
//         a.divide(str.slice(i + 1, str.length));
//       }
//     }
//   }
// }

// let cal = new Calculator();
// cal.calculate("22+44");

module.exports = Calculator;
