// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second.

function counter_time(){
    let date = new Date();
    console.log(`Time is - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\r`);
}

setInterval(counter_time,1000);