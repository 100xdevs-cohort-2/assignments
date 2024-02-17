let counter = 0;

function counterFunction() {
    process.stdout.write(`\rCounter Value: ${counter}`)
    if (counter < 10)
        setTimeout(counterFunction, counter++ * 1000);
}

counterFunction();