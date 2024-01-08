/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
      setTimeout(() => {
        //resolve(console.log('hey resolved after ' + n + ' seconds'));
        // console.log("hey resolved after " + n + " seconds");
        resolve();
      }, n * 1000);
    });
  }
  

  
//         //syntax change
//   function wait(n) {
//     return new Promise(function (resolve) {
//       setTimeout(() => {
//         //resolve(console.log('hey resolved after ' + n + ' seconds'));
//         console.log("hey resolved after " + n + " seconds");
//       }, n);
//     });
//   }
  

module.exports = wait;
