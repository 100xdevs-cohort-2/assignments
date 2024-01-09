/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const p =  new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, n * 1000);
    });
    return p;
}

async function main() {
    await wait();
}

main ();

module.exports = wait;


//Much more elegant code:
/*
const wait = (n) => new Promise(resolve => setTimeout(resolve, n * 1000));
const main = async () => await wait();
main();
module.exports = wait;
*/