let counter = 0

function increaseCounter() {
    counter ++
    console.log(counter)
}

setInterval(increaseCounter, 1000)