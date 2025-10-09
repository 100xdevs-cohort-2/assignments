## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

Here's the code:

let i=0;
function tick(){

    console.log(i);
    i++;
    setTimeout(() => tick(), 1000);
}

tick()





























































(Hint: setTimeout)