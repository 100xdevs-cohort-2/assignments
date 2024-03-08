// Path: Week-2/assignments/counter.html
/**
 * Create a counter in JavaScript
 * We have already covered this in the second lesson, but as an easy   recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second.
 */
let coun = 0;
function counter() {
    console.clear();
    console.log(coun++);
}
setInterval(counter, 1000);
