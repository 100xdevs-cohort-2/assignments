// Counter with setInterval function(Repeats every 'x' mx where x is the second argument )

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let timer = 0;

function count() {
    timer++;
    console.log(timer);
}

setInterval(count , 1000);