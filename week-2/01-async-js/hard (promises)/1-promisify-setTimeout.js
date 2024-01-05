/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
<<<<<<< HEAD
    return new Promise((resolve) => {
    const time=n/1000;
      setTimeout(() => {
        
        resolve(`Event done successfully after ${time} seconds`);
      }, n);
    });
  }

  wait(1200)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
=======
}

module.exports = wait;
>>>>>>> origin/master
