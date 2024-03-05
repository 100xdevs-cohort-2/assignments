// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function incrementCounter(){
    console.log(counter);
    counter++;

    setTimeout(incrementCounter, 1000);
}

incrementCounter();

 // 1000 milliseconds = 1 second

// To stop the counter after a certain condition, you can use clearInterval.
// For example, to stop the counter after 10 seconds:
// setTimeout(() => {
//  clearInterval(intervalId);
// }, 10000); // 10000 milliseconds = 10 seconds







































































// (Hint: setTimeout)