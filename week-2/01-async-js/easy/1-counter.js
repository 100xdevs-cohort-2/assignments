// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


function counter(){
    let i = 0;

    setInterval(() => {
        i++;
        console.log(i);
    }, 1000);
}

counter();