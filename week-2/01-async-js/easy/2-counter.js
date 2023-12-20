/* ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. */

// Tried by nesting:

/* let counter = 0;
setTimeout(function() {
    console.log(counter++)
    setTimeout(function() {
        console.log(counter++);
        setTimeout(function() {
            console.log(counter++);
        }, 1000);
    }, 1000);
}, 1000); */

// recursive fn
let count = 0;
function counter(){
    console.log(count);  // 2  // 5
    count++;             // 3  // 6
    setTimeout(counter,1000)  // 4  // 7    // this will keep calling counter
}

counter();  // 1






































































(Hint: setTimeout)