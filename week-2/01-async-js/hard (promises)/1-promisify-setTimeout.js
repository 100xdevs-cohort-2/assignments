/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise is resolved")
        }, n*1000)
    })
    return p;
}


setTimeout(() =>{
    console.log(wait(2))
},5000)

