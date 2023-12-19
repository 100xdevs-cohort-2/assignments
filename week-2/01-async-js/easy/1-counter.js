//  Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


function Count(n){
    count = 0
    for(let i =0; i<=n;i++){
        count += 1
    }

    return count
}

setInterval(Count(n),1000);