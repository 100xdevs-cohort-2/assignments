
function shivamAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there!")
        }, 3000)
    });
    return p;
}

async function main(){
    // no callback, no .then syntax
    // shivamAsyncFunction().then(function(value){
        // console.log(value)
    // })
    let value = await shivamAsyncFunction();
    console.log("hi there1");
}

main();
console.log("after main");


// await stops the execution of th next cmds in the same functions and awaits till it gets the resolve, for the mean time it jumps to the next functions.