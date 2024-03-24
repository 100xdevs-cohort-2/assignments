<<<<<<< HEAD
/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    // given seconds as input but setTimeout function only takes milliseconds
    const milliseconds = n * 1000;

    const p = new Promise(function (resolve) {
        setTimeout(function () {
        resolve();
        }, milliseconds);
    });

    return p;
}

// const ans = wait(3);

async function main(){
    let p = await wait(3);

    console.log(p);
}

main();

module.exports = wait;
||||||| empty tree
=======
/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
}

module.exports = wait;
>>>>>>> a3fa79c5a8030e58d055c1b728d3df963fe878fd
