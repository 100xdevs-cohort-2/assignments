/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return p1 = new Promise (function(resolve){
        setTimeout(function(){
            resolve("wait 1 second");
        }, 1000);
    })
}

function waitTwoSecond() {
    return p2 = new Promise (function(resolve2){
        setTimeout(function(){
            resolve2("wait 2 second");
        },2000);
    })
}

function waitThreeSecond() {
    return p3 = new Promise (function(resolve3){
        setTimeout(function(){
            resolve3("wait 3 seconds");
        }, 3000)
    })
}

function calculateTime() {
    const start = new Date().getTime();
    const p4 = Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(function(value){
        console.log(value);
        console.log("Promise all applied");
    });
    return p4;
}

calculateTime();
const end = new Date().getTime();
    var elapsed = (end - start)*1000;
    console.log("Time elapsed: " + elapsed);