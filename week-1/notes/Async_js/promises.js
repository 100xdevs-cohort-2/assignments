// promises : Just a wrapper in front of another js provided async function to make our own async functions.


const fs = require('fs');

function shivamReadFile() {
    console.log("Inside shivamReadFile")
    return new Promise(function(resolve){
       console.log("Inside promise before resolve"); 
       fs.readFile("a.txt", "utf-8", function(err, data){
           resolve(data);
        })
        console.log("Inside promise after resolve"); 
    })
}

function onDone(data){
    console.log(data);
    // console.log(a); // when resolved then promise contain the final result of the promise
}

// shivamReadFile().then(onDone);  //or
var a = shivamReadFile()
console.log(a); //a is an promice object
a.then(onDone);


// how it is wokring?
// first shivamReadFile is called and it sync and immediately return a promise that it wil do the task in promise whereever you will call .then().
// upon calling promiseObject.then(onDone), then main task inside the promise will be executed at that place, in this case the main task is to readfile using an async function readFile so that will be executed and its return value will be passed to onDone function as its parameters which is data in this case.



// Same thing without promise but using callback

// const fs = require('fs');

// function shivam2ReadFile(cb){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         cb(data);
//     })
// }

// function ondone(data){
//     console.log(data);
// }
// shivam2ReadFile(ondone);
// function is passed as a parameter in shivam2ReadFile.

