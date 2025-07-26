// Function	                    Type	    Use Case
// setTimeout	                Delayed	    Run once after delay
// setInterval	                Repeating	Run repeatedly every x ms
// clearTimeout	                Control	    Cancel a setTimeout
// clearInterval	            Control	    Cancel a setInterval
// requestAnimationFrame	    Animation	Sync with screen refresh
// queueMicrotask	            Microtask	Run after current execution ends
// setImmediate (Node.js)	    Immediate	Run immediately after I/O

// Q1

// let count =0;

// const intervalId = setInterval(()=>{
//     console.log(count);
//     count++;
// },1000);

// Q2

// let count = 0;

// function counter(){
//     console.log(count);
//     count++;

//     if(count<=10){
//         setTimeout(counter,1000);
//     }
// }

// counter();

//Q3

const fs = require("fs");

// function vanshReadFile(cb){
//     fs.readFile("a.txt","utf-8",(err,data)=>{
//         cb(data);
//     })
// }

// function promisifiedVanshReadFile(){
//     return new Promise(function(cb){
//         fs.readFile("a.txt","utf-8",(err,data)=>{
//         cb(data);
//         })
//     })
// }

// async function asyncVanshReadFile(){
//     let value = await promisifiedVanshReadFile();
//     console.log("This is from async await "+value);
// }

// function printData(data){
//     console.log("Normal CallBack "+data);
// }   

// vanshReadFile(printData);

// promisifiedVanshReadFile().then(printData);

// asyncVanshReadFile();

//Q4

function writeToFile(){
    return new Promise(function (resolve,reject){
        fs.writeFile("a.txt","We have overwriiten on a.txt",(err)=>{
            if(err)
            {
                return reject(err);
            }
            resolve("Data Written Successfully!!!");
        });
    });
}

async function logFileContents(data){
    try {
    const val = await writeToFile();
    console.log(val);
  } catch (err) {
    console.error("❌ Error writing to file:", err);
  }
}

logFileContents();