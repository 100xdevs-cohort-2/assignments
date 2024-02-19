/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait2(n) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve("Resolved");
        }, n);
    })
}

function toDo(data){
    console.log(data);
}

async function wait(n){
    let value = await wait2(10000);
    console.log(value);
}


// wait();

module.exports = wait;
