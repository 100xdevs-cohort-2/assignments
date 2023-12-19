/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

      //2 
      function wait(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("undefined");
            }, n * 1000); // Delay in seconds before resolving
        });
    }


module.exports = wait;
