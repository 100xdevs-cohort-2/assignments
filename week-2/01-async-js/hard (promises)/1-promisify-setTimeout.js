/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    let delayPromise = new Promise((resolve, reject) => {
        
        // reject if n is less than 0 or n is not a number
        if(isNaN(n) || n < 0)
        {
            reject("Invalid value of n!");
        }

        // resolve 
        n *= 1000; // convert secs to ms
        setTimeout(() => {
            resolve(`${n/1000} secs have passed!`);
        }, n)
        
    })

    return delayPromise;
}

function main()
{   
    let seconds = 2;
    wait(seconds).then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(`There is an Error: ${err}`);
    })
}

main();
