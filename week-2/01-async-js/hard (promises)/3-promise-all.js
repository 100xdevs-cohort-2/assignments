/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

<<<<<<< HEAD

function waitOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Resolved after 1 second');
      }, 1000);
    });
  }
  
// Function that returns a promise resolving after 2 seconds
function waitTwoSecond() {
return new Promise(resolve => {
    setTimeout(() => {
    resolve('Resolved after 2 seconds');
    }, 2000);
});
}

// Function that returns a promise resolving after 3 seconds
function waitThreeSecond() {
return new Promise(resolve => {
    setTimeout(() => {
    resolve('Resolved after 3 seconds');
    }, 3000);
});
=======
function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

>>>>>>> upstream/master
}

function calculateTime(t1, t2, t3) {

<<<<<<< HEAD
    console.time("Time Taken to resolve all the three Promises");

    const promise1 = waitOneSecond();
    const promise2 = waitTwoSecond();
    const promise3 = waitThreeSecond();

    Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
        console.timeEnd("Time Taken to resolve all the three Promises")
    })
    .catch((err) => {
        console.log(err)
    })
}

function main()
{
    calculateTime();
}

main();
=======
}

module.exports = calculateTime;
>>>>>>> upstream/master
