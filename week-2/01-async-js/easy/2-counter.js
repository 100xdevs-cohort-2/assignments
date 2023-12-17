// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let timer=1;
function times(){
    console.log(timer);
    timer++;
    setTimeout(times, 1000);
} 

times();






































































// (Hint: setTimeout)