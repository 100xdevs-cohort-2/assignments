let counter = 0;
const timer = setInterval(() => {
    if (counter === 40) {
        clearInterval(timer);
    }
    console.log(counter);
    counter++
}, 1000);

