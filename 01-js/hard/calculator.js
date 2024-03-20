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
  constructor(input = ''){
    this.result = 0;
    this.setInput(input);
  }

  setInput(input){
    const specialChars = /[`!@#$%^&_\[\]{};':"\\|,<>\?~qwertyuiopsdfghjklzxcvbnm]/;
    if(specialChars.test(input)){
      throw new Error('Invalid Input.');
    }
    this.cleanedInput = input.replace(/\s/g, '');
  }

  getResult(){
    return this.result;
  }

  updateResult(input){
    this.result = input;
  }

  clear(){
    this.result = 0;
    return "Result cleared!";
  }

  add(number){
    const newResult = this.result + number;
    this.updateResult(newResult);
    return newResult;
  }

  subtract(number){
    const newResult = this.result - number;
    this.updateResult(newResult);
    return newResult;
  }

  multiply(number){
    const newResult = this.result * number;
    this.updateResult(newResult);
    return newResult;
  }

  divide(number) {
      if (number == 0) {
        throw new Error('Division by zero is not allowed.');
      }
      const newResult = this.result / number;
      this.updateResult(newResult);
      return newResult;
  }

  
  calculate(input){
    if(input !== undefined){
      this.setInput(input);
    }
    if (this.cleanedInput.includes('/0')) {
      throw new Error('Division by zero is not allowed.');
    }
    const answer = eval(this.cleanedInput);
    this.updateResult(answer);
    return this.getResult();
  }
}


/*
28.02.2024 - Tuesday.
Spent this dy by completing the code for the calcultor assignement.

The Calculator class is defined.
The constructor method constructor(input = '') initializes the calculator with an optional input, defaulting to an empty string.
Inside the constructor, setInput(input) method is called to clean and validate the input.
The setInput(input) method sanitizes the input by removing whitespace and checking for any special characters using a regular expression. If any special character is found, it throws an error indicating invalid input.
The cleaned input is stored in the cleanedInput property of the calculator object.
getResult() method returns the current result.
updateResult(input) method updates the result with the given input.
clear() method resets the result to 0 and returns a message indicating that the result has been cleared.
add(number), subtract(number), multiply(number), and divide(number) methods perform basic arithmetic operations and update the result accordingly. Division by zero is checked and an error is thrown if attempted.
calculate(input) method is the main method which takes an input, sanitizes it if provided, evaluates the expression, and updates the result. If the input is not provided, it evaluates the previously set expression.
Before evaluation, it checks if the cleaned input contains '/0' to prevent division by zero.
It uses eval() function to evaluate the expression, which is generally discouraged due to security concerns but used here for simplicity.
Finally, it returns the calculated result.
*/


module.exports = Calculator;
