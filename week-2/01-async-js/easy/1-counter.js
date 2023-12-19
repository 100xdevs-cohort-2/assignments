//Create a counter in JavaScript

//We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
//It should go up as time goes by in intervals of 1 second

let count = 0;


let interval = setInterval(function counter() {
    console.log(count);
    count++;   // exist as 29, 28 ... valur of local variable
    
    if (count > 6) {
        clearInterval(interval);  // tried callback syntax function passed as an argument to another function
    }
}, 1000);

