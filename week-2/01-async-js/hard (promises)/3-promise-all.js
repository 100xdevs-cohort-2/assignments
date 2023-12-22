/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
return new Promise(function(resolves) {
    setTimeout(resolves, t * 1000);
});

}

function wait2(t) {
return new Promise(function(resolves) {
    setTimeout(resolves , t * 1000);
})
}

function wait3(t) {
return new Promise(function(resolves) {
    setTimeout(resolves, t * 1000);
})
}

async function calculateTime(t1, t2, t3) {
    let start = Date.now();
    let totalTime = await Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(function(results) {
        console.log(results);
    })
    let end = Date.now();
    return (end - start);
}
calculateTime(1, 2, 3);
module.exports = calculateTime;
