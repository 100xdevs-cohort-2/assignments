// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let counter = 0;

function time1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Counter => ${counter}`);
            counter++;
            resolve();
        }, 1000);
    });
}

function timeLoop() {
    return time1().then(timeLoop);
}

timeLoop();