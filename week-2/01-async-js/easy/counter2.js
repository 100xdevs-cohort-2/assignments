// Counter with setTimeout

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let timer = 0;

function count() {
    console.log(timer++);
    setTimeout(count,1000);
}

count();



