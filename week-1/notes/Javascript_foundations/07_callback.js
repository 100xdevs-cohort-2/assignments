// Function callback: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Examples :

// The calculatorArithmatic function takes two numbers and a callback function as arguments
function calculatorArithmatic(a, b, arthmaticFinalFunction){
    // The callback function is invoked with the two numbers as arguments
    const ans = arthmaticFinalFunction(a, b);
    // The result of the callback function is returned
    return ans;
}

// The sum function is a simple function that adds two numbers
function sum(a, b){
    return a+ b;
}

// The sum function is passed as a callback to the calculatorArithmatic function
const value = calculatorArithmatic(1, 2, sum);
console.log(value); // Outputs: 3

// The greet function logs a greeting to the console
function greet(){
    console.log("Hello World");
}

// The setTimeout function takes a callback function and a delay as arguments
// After the delay, the callback function is invoked
setTimeout(greet, 3*1000); // Outputs: "Hello World" after 3 seconds

setInterval(greet, 1*1000)