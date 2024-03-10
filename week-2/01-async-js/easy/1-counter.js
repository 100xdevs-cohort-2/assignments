// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
let a=0;
function counter(a)
{
    let d = setInterval(() => {
        console.log(a++)
       if(a>=10)
       {
        clearInterval(d);
       }
    }, 1000);
}

counter(a);