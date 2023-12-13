// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function startCounter(interval = 1000, count = 0) {
    setTimeout(() => {
        console.log("Count: " + count++);
        startCounter(interval, count);
    }, interval)
}


startCounter();