let counter = 0;
const promisifiedCounter = (counter) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(++counter, 1000));
    })
}

promisifiedCounter(counter).then((value) => {
    console.log(value);
    promisifiedCounter(value).then((value) => {
        console.log(value);
    })
})