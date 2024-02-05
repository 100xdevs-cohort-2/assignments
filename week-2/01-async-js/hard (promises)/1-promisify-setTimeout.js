/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            resolve("the resolved stuff");
        },n)
    })
}

// wait().then(function(data) {
//     console.log(data);
// })

async function main(){
    let data = await wait(1000);
    console.log(data);
}

main();

module.exports = wait;
