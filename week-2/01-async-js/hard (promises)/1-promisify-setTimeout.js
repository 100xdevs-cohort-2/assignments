/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promiseval(n){
    let p = new Promise(function(resolve , reject){
        setTimeout(function(){
                resolve("hekllo world");
        } , n *1000);
    })
    return p;
}
 function wait(n){
    let val =  promiseval(n)
    console.log(val)
    return val;
}

let val = wait(2);
console.log(val);
// module.exports = wait;