// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
// var date = new Date();
function counter_setTimeout(){
    let date = new Date();
    console.log(`Time is - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\r`);
    setTimeout(counter_setTimeout,1000);
}

counter_setTimeout();