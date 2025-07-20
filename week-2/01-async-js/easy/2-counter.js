let counter = 0;

function counterFn() {
    console.log(counter);
    counter++;

    setTimeout(counterFn, 1000);
}

setTimeout(counterFn, 1000);