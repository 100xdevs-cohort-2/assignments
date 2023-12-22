counter = 0;
const incrementCounter = () => {
    counter += 1;
    console.log(counter);
    setTimeout(incrementCounter, 1000);
}
incrementCounter();