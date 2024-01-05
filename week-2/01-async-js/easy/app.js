// const fs = require('fs');

// // @call back code

// const square = (n)=>{
//     return n*n;
// }

// const cube =  (n)=>{
//     return n*n*n;
// }

// const quad = (n)=>{
//     return n*n*n*n;
// }

// const calc = (n,fn)=>{
//     return fn(n);
// }

// console.log(calc(5,cube));



// // @@@ async function

// /*

// The three famos asyncronous function
// setTimeout
// fs.readFile
// sending a request network
// */

// //setTimeout example
// const onDone = () => {
//     console.log("Hii its Asyncronous");
// }

// // function onDone() {
// //     console.log("Hii its Asyncronous");
// // }

// const myAsyncFunction = (t, fn) => {
//     setTimeout(fn, t);
// }

// console.log('may by JS is syncronous !!');

// myAsyncFunction(3000, onDone);

// //readFile example
// console.log("Hi  this is asyncronous function usinf file read");

// fs.readFile("a.txt","utf-8",(err,data)=>{                             //error first callback
//     console.log("the data in the file is :" + data);  
// })

// let ans =  0 ;
// for (let i=0; i< 100000;i++){
//     ans ++;
// }
// console.log(ans);

/*
Promises and Promisify a function using .then and resolve function
async await functiion to make code more redable and neat

When do we use async or promises :

1. do a network call 
2. sleep/wait for sometime 
3. read a file  
4. do a database call


*/

//function using promises, resolve and .then function


const myOwnSetTimeoutFunction = (duration) =>{
    let p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
    return p;
}

myOwnSetTimeoutFunction(2000)
.then(()=>{
    console.log("after timeout")
})

console.log("before time out")

// same function using async await functions can be written a lot cleaner
 
const mySecondTimeoutFunction = ()=>{
    let p = new Promise(function(resolve){
        // setTimeout(resolve,duration);
        console.log("In the Promise function");
        resolve("hi there!");
    })
    return p;
}

async function main (){             //This function basically starts when the main thread i free after the execution of the entire code
    const c = await mySecondTimeoutFunction();
    // console.log(c)
    console.log("after async await function");
}

main()
console.log("This message is printed from outside the function");