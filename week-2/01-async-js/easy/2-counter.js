// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
function createCounter(counter=1){
    console.log(`Counter: ${counter}`);
    counter++;
    setTimeout(function(){
    createCounter(counter);
    },1000);
}

createCounter();