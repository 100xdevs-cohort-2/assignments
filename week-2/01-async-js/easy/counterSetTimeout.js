// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let countDown = function () {
    for (let i =30; i >= 0; i-- ){
        setTimeout(function(){
            console.log(i)
    }, 1000 * (30-i))
    }
}
countDown();