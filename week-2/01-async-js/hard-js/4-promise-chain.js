/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve()
        },t1)
    })
  }


function wait2(t2) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },t2)
    })
}

function wait3(t3) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },t3)
    })
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();

    return wait1(t1)
        .then((result) => wait2(t2))
        .then((result) => wait3(t3))
        .then((result) => {
            const end = Date.now();
            return end - start; // Return the time taken
        });
   
}

const t1 = 2000;
const t2 = 3000;
const t3 = 1500;

calculateTime(t1, t2, t3)
    .then((timeTaken) => {
        console.log(`All functions executed in ${timeTaken} milliseconds.`);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
module.exports = calculateTime;


/* const start = Date.now()
   return wait1(t1).then(function(result) {
    return wait2(t2)
   })
   .then(function(result) {
    return wait3(t3)
   }
   .then(() => {
    const end = Date.now();
    return end - start; // Return the time taken
})
   )
   Arrow Functions:

Arrow functions don't bind their own this value; instead, they inherit this from the surrounding code (lexical scoping). In promise chaining, this is crucial, and arrow functions preserve the context from the surrounding block, which is often what you want in promise chains.
Arrow functions also have implicit return behavior. If the function body consists of a single expression, the result of that expression is automatically returned. Hence, in a single-line arrow function without curly braces, the expression's result becomes the return value of the function.
Regular Functions:

Regular functions have their own this value, which can cause issues with context, especially in asynchronous code like promise chains, where this might change based on where the function is executed.
Regular functions don't have implicit return behavior; if you want to return a value explicitly, you need to use the return keyword explicitly.
   

DON'T USE RESOLVE WITH SETTIMEOUT, ONLY WITH PROMISE INSTANTIATION USE IT, IN .THEN() USE RESULT IN ARROW FUNCTION AS ARGUMENT
   */