let counter = 0;
const incrementCounter = () => {
    counter += 1;
    console.log(counter);
}

setInterval(incrementCounter, 1000);