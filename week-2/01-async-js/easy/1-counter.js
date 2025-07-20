// we will be creating counter using setInterval (call a function after every second provided)
let counter = 0;
function counterFn() {
    console.log(counter)
    counter+=1
}

// setInterval is a global asynchronous function using which we can delegate the task of putting the counterFn in the callbackQueue of the main thread after every 1 second / 1000 millisecond 
setInterval(counterFn, 1000);