/** * ## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second */

let counter = 0;
setInterval(() => {
    counter++;
    console.log(counter);
}, 1000);



/** ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. */

let counter1 = 0;
function counterWithoutSetInterval() {
    setTimeout(() => {
        counter1++;
        console.log(counter);
       
        counterWithoutSetInterval();
    },1000);
 
}
counterWithoutSetInterval();


