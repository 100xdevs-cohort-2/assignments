// // fs ---> File system
const fs = require('fs')

// // err first fn, utf encoding 8 
// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data); // PENDING CALLBACKS: SO EVEN THOUGH THIS CALLBACK IS RESOLVED, THE THREAD WILL ONLY EXECUTE IT AFTER IT GETS IDLE.
// })

// console.log("hi there")

// // busy waiting thread
// function syncSleep(){
// let a=0;
// for(let i=0;i<10000;i++){
//   a++
// }
// console.log(a)
// }
// syncSleep()
// console.log("hi there 2")


// /*          */
// setTimeout(()=>{
//     console.log("from inside async fn 1")
// },2000)

// setTimeout(()=>{
//     console.log("from inside async fn 2")
// },1000)

// syncSleep()




// // OWN ASYNC FUNCTION

// // UGLY WAY: USING CALLBACKS (WHY ? : CALLBACK HELL)
// function ankitReadFile(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         cb(data)
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// ankitReadFile(onDone)

// // IT IS JUST A WRAPPER ON TOP OF ANOTHER ASYNC FUNCTION, 
// // WHICH IS FINE. USUALLY ALL ASYNC FUNCTIONS YOU WRITE WILL BE ON TOP OF JS PROVIDED ASYNC FUNCTION.


// // CLEANER WAY (PROMISES)
function anviReadFile(){
  return new Promise((resolve)=>{
    fs.readFile("a.txt","utf-8",(err,data)=>{
        resolve(data)
    })
  })
}

//cb fn to call
function onDone(data){
    console.log(data)
}

anviReadFile().then(onDone);


var p =new Promise(function(resolve){
    setTimeout(()=>{
        resolve("foo")
    },1000)
})
function callback(data){
    console.log(data)
}
console.log(p)
p.then(callback)
// when you don't return anything it shows undefined


function ankitAsyncFunction(){
    let v=new Promise(function(resolve){
        setTimeout(function(){
             resolve("hi there")
        })
    })
    return v
}
// other way no need of .then
async function print(){
    let value=await ankitAsyncFunction()
    console.log(value)
}
print()