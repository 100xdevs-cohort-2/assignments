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
	result;
	constructor() {
		this.result = 0;
	}
	add(num) {
		this.result += num;
	}
	subtract(num) {
		this.result -= num;
	}
	multiply(num) {
		this.result *= num;
	}
	divide(num) {
		this.result /= num;
	}
	clear() {
		this.result = 0;
	}
	getResult() {
		return this.result;
	}
	calculate(exp) {
		if (!exp.match(/^[0-9\+\-\*\/\(\)\s\.]+$/)) throw new Error("Invalid Expression");
		exp = exp.replace(/\s/g, "");
		let result = 0;
		let num = "";
		let op = "";
		let stack = [];
		let i = 0;
		while (i < exp.length) {
			if (exp[i] === "(") {
				stack.push(result);
				stack.push(op);
				result = 0;
				op = "";
			} else if (exp[i] === ")") {
				result = this.calculateOp(stack.pop(), stack.pop(), result);
			} else if (exp[i] === "+" || exp[i] === "-" || exp[i] === "*" || exp[i] === "/") {
				op = exp[i];
			} else {
				num += exp[i];
				if (
					i === exp.length - 1 ||
					exp[i + 1] === "+" ||
					exp[i + 1] === "-" ||
					exp[i + 1] === "*" ||
					exp[i + 1] === "/" ||
					exp[i + 1] === ")" ||
					exp[i + 1] === "("
				) {
					result = this.calculateOp(op, result, Number(num));
					num = "";
				}
			}
			i++;
		}
		this.result = result;
		return result;
	}
	calculateOp(op, num1, num2) {
		switch (op) {
			case "+":
				return num1 + num2;
			case "-":
				return num1 - num2;
			case "*":
				return num1 * num2;
			case "/":
				if (num2 === 0) throw new Error("Division by 0");
				return num1 / num2;
			default:
				return num2;
		}
	}
}

const calc = new Calculator();
console.log(calc.calculate("2 + 3 * 4")); //14
module.exports = Calculator;
