let counter = 1;


const intervalId = setInterval(() => {
    console.log(counter);
    counter++;

}, 1000);

const stopAfterSeconds = 11;

setTimeout(() => {
    clearInterval(intervalId);
}, stopAfterSeconds * 1000);

