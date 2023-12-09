/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n=0) {
    const newPromise = new Promise(() => {
        setTimeout(()=>{
            console.log('Inside Promise')
        },n)
    })
    return newPromise
}

wait(5000)
