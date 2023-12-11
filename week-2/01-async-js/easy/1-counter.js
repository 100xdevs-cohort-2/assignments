// ## Create a counter in JavaScript
//
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function countFor(seconds) {
    let count = 1;
    let intervalId = setInterval(function () {
        console.log(`Counter: ${count}`);
        count++;
    }, 1000);
    setTimeout(() => clearTimeout(intervalId), (seconds + 1) * 1000);
}

countFor(10);

// Output:
// Counter: 1
// Counter: 2
// Counter: 3
// Counter: 4
// Counter: 5
// Counter: 6
// Counter: 7
// Counter: 8
// Counter: 9
// Counter: 10
