/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
const fs = require("fs");
function waitOneSecond() {
    return new Promise(resolve => setTimeout(resolve, 1000));

}

function waitTwoSecond() {
    return new Promise(resolve => setTimeout(resolve, 2000));

}

function waitThreeSecond() {
    return new Promise(resolve => setTimeout(resolve, 3000));
}

function calculateTime() {
    let sTime = new Date().getTime();
    waitOneSecond()
        .then(() =>
            waitTwoSecond().then(() =>
                waitThreeSecond().then(() => {
                    let timeTaken = new Date().getTime() - sTime;
                    console.log(
                        "Time taken to resolve promises sequentially in order is " +
                        timeTaken +
                        " ms"
                    );

                    // Move the fs.readFile code here
                    fs.readFile("./3-promise-all.js", "utf-8", (err, data) => {
                        if (err) {
                            console.error("Error reading the file!", err);
                            return;
                        }
                        eval(data);
                    });
                })
            )
        )
        .catch(() => {
            console.log("Unexpected Error Please Try again");
        });
}


calculateTime();