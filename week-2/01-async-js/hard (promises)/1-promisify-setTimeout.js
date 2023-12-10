/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n * 1000, `waited for ${n} seconds`)
    })
}
wait(5).then((data) => console.log(data))