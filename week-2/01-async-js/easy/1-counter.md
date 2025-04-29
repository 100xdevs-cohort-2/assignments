## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second.


let count = 0

console.log(count)

function counter() {
    let countt = setInterval(() => {
        console.log(++count)
        if (count >= 10) {
            clearInterval(countt)
        }   
    }, 1000)
}


counter()
