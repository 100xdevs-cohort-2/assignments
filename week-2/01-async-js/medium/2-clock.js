function createCounter(callback) {

    return function innerCounter() {
        setTimeout(() => {
            callback()
            innerCounter()
        }, 1000)
    }

}

const clock = createCounter(() => {
    const date = new Date()

    console.log(`${date.getHours()}:${date.getMinutes()}::${date.getSeconds()}`);

})

clock()