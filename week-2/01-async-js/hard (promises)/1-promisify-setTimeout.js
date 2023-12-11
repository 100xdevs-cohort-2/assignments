/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promisfy(n) {
  return new Promise((resolve, _) => {
    console.log('Promise Construcutor');
    setTimeout(() => {
      resolve();
    }, n);
  });
}

function wait(n) {
  console.log('Promise Started');
  promisfy(n).then(() => console.log('Promise Fullfilled'));
  console.log('Promise Made');
}

wait(1000);
