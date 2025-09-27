## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

Here's the code:

let i=0;
setInterval(() => {
    console.log(i);
    i++
}, 1000);