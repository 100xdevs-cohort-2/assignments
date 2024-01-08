// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;
function intervalId(value) {
    console.log("Current counter Value:",counter)
    counter++;
    if (counter <= value){
    setTimeout(function () {
        intervalId(value)
    },1000);
    }
}
intervalId(10)






































































// (Hint: setTimeout)