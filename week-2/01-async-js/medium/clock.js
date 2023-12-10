const fs = require ("fs");


function mySetTimeout(fn, delay) {

    const recursiveTimeOut = () => {
        fn();
        return setTimeout(recursiveTimeOut, delay);
    }

    setTimeout(recursiveTimeOut, delay);
}

function printTime() {
    console.clear();
    const currDate = new Date();
    console.log(currDate.toLocaleTimeString());
    console.log(currDate.toLocaleTimeString('en-US',{hour12: false}));
}

mySetTimeout(printTime, 1000);