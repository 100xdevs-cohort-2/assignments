/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


function wait1(t) {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, t);
      });
}


function wait2(t) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve();
        }, t);
    });
}

// Function that returns a promise resolving after 3 seconds
function wait3(t) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve();
        }, t);
    });
}

function calculateTime(t1, t2, t3) {

    // console.time("Time Taken to resolve all the three Promises");
    const startTime = Date.now();

    const promise1 = wait1(t1 * 1000);
    const promise2 = wait2(t2 * 1000);
    const promise3 = wait3(t3 * 1000);

    return Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        return timeTaken;
    })
    .catch((err) => {
        console.log(err)
    })

}

async function main() {
    try {
        const t = await calculateTime(1, 2, 3);
        console.log(`Total time taken: ${t} milliseconds`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

main();


module.exports = calculateTime;
