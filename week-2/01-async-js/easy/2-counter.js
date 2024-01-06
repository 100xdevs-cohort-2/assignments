// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function  counter() {
    let i =0;
    return function innerCounter() {
        setTimeout( function () {
            console.log(i);
            i++;
            innerCounter();
        } , 1000);
    
    }
}


const stopWatch =  counter();
stopWatch();





































































// (Hint: setTimeout)