let counter = 0

function increaseCounter(){
    counter++
    console.log(counter)
    setTimeout(increaseCounter, 1000)
}

increaseCounter()