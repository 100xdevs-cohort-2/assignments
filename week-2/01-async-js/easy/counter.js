// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let count = 0;

function counter(){
    setInterval(() =>{
        count++;
        console.log(count);
    }, 1000);
}

function counter(){
    count++;
    console.log(count);

    setTimeout(counter, 1000);
}
counter();

