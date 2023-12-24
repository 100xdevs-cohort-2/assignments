// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let i = 0; 

let timer = setInterval(counter, 1000)

function counter(){
    console.log(i);
    i++ ;
    if(i > 30){
        clearInterval(timer)
    }
}

counter()
