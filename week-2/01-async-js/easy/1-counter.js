// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function counter(seconds)
{
    let count = 0;

    let intervalId = setInterval(() => {

        console.log(++count);
        // clear the interval if the count is equal to number of seconds
        if(count === seconds)
            clearInterval(intervalId);

    }, 1000)

}

function main()
{
    counter(10);
}

main()