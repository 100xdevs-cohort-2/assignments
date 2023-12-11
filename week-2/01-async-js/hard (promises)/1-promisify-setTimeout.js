/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res(`Resolved after ${n} seconds`);
      }, n);
   });
}

wait(1000).then((data) => console.log(data));
