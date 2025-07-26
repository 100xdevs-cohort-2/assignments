/**
 * setTimeout(fn,time)->async function given by Javascript
 * Some other common async functions in JS are -> fs.readFile , Fetch etc
 */

//File System Example

const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})

console.log("Hi there !!!");
let a=0;
for(let i=0;i<=100000000;i++)
{
    a+=i;
}
console.log("Hi there 2!!!!!");

//Usage Of CallBacks

function readFile(cb){
    fs.readFile("a.txt","utf-8",(err,data)=>{
        cb(data);
})

}

function showData(data){
    console.log(data);
}

readFile(showData);

/**
 * Promises are nothing but syntacticall sugar to do the above
 * Used to avoid callback hell
 * A promise can have three states majorly => pending , resolved , rejected
 */

//Promises

//my own asynchronous function
function readFileUsingPromise()
{
    return new Promise(function(cb){
        fs.readFile("a.txt","utf-8",(err,data)=>{
            cb(data);
        })
    })
}

//callback function to call
function displayData(data)
{
    console.log(data);
}

readFileUsingPromise().then(displayData);

//Async Await
/**
 * In async await the logic put after the await in a praticular function 
 * But the other logic outside of the function keeps on working without being blocked
 * TO use await we need to use async keyword on that function
 */

function resolveMyMethod()
{
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there!!");
        },1000);
    });

    return p;
}

async function main()
{
    let value = await resolveMyMethod();
    console.log(value);
}

main();
console.log("Outside await !!!!");