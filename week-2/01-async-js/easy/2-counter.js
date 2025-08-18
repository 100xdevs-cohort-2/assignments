// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function counterRun() {
    counter ++;
    console.log(counter);
    setTimeout(counterRun, 1000)
}

counterRun();






































































// (Hint: setTimeout)