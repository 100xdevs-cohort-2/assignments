/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

<<<<<<< HEAD
function wait(n) {}
=======
function wait(n) {
   return new Promise((res, req) => {
      setTimeout(() => {
         res();
      }, n * 1000);
   });
}
>>>>>>> 66c5d6ca6fa7a0d7e22eab9f82889f7004e24b33

module.exports = wait;
