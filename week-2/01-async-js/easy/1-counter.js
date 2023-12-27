// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// let count = 0;
// for (let i = 1; i <= 10; i++) {
//     setInterval(function () {
//         count += i;
//         console.log(count);
//     }, 1000);

// }
// console.log(count);

let count2 = 0;
setInterval(function () {
    count2++;
    console.log(count2);
}, 1000);