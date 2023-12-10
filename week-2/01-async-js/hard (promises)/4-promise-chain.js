/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    let p = new Promise((resolve) => {
        setTimeout(() => {resolve()}, 1000);
    });
    return p;
}

function waitTwoSecond() {
    let p = new Promise((resolve) => {
        setTimeout(() => {resolve()}, 2000);
    });
    return p;
}

function waitThreeSecond() {
    let p = new Promise((resolve) => {
        setTimeout(() => {resolve()}, 3000);
    });
    return p;
}

function calculateTime() {

    // v1
    let start = new Date().getTime();

    waitOneSecond().then(() => {
        let end = new Date().getTime();
        console.log("Promise chaining -> Time Taken by waitOneSecond v1 " + (end - start));

        let s1 = new Date().getTime();
        waitTwoSecond().then(() => {
            let e1 = new Date().getTime();
            console.log("Promise chaining -> Time Taken by waitTwoSecond v1 " + (e1 - s1));

            let s2 = new Date().getTime();
            waitThreeSecond().then(() => {
                let e2 = new Date().getTime();
                console.log("Promise chaining -> Time Taken by waitThreeSecond v1 " + (e2 - s2))
                console.log("Promise chaining -> Total Time Taken by v1 " + (e2 - start))
            })
        })
    });

    // v2
    let startV2 = new Date().getTime();
    waitOneSecond().then(() => {
        return waitTwoSecond();
    }).then(() => {
        return waitThreeSecond();
    }).then(() => {
        let end = new Date().getTime();
        console.log("Promise chaining -> Total Time Taken by v2 " + (end - startV2));
    })
}

calculateTime();