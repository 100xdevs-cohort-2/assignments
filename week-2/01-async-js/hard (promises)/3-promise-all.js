/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function (resolve){
        setTimeout(resolve, 1 * 1000);
    });
}

function waitTwoSecond() {
    return new Promise(function (resolve){
        setTimeout(resolve, 2 * 1000);
    });
}

function waitThreeSecond() {
    return new Promise(function (resolve){
        setTimeout(resolve, 3 * 1000);
    });
}

function calculateTime() {
    const StartTime = Date.now();
    Promise.all([waitOneSecond().then(() => { }), waitTwoSecond().then(() => { }), waitThreeSecond().then(() => { })]).then(function (){
        console.log("It took " + (Date.now() - StartTime) / 1000 + " seconds");
    });
}

calculateTime();