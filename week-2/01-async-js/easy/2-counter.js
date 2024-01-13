// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count  = 0;
function counter2(){
    console.log(count);
    count += 1;
    setTimeout(counter2,1000);
}
counter2(0);






































































// (Hint: setTimeout)