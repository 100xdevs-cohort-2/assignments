/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function(resolve) {
        setTimeout( function() {
            resolve('foo1');
        }, 1000);
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve) {
        setTimeout( function() {
            resolve('foo2');
        }, 2000);
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve) {
        setTimeout( function() {
            resolve('foo3');
        }, 3000);
    })
}

function onDone(startTime) {
    var endTime   = new Date();
    var seconds = (endTime.getTime() - startTime.getTime());
    console.log("Time taken = ", seconds);
}

function calculateTime() {
    let startTime = new Date();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((x) => {
        var endTime = new Date();
        console.log("Time taken in milliseconds = ", (endTime-startTime));
        //console.log(x);
    });
}

calculateTime();