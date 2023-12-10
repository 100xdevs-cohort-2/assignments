function createCounter() {
    let i = 0
    return function innerCounter() {
        setTimeout(() => {
            console.log(i);
            i++
            innerCounter()
        }, 1000)
    }

}

const counter = createCounter()

counter()