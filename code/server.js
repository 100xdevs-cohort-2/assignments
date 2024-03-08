function calculateSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans
}


// const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'application/json'})
//     res.write("Hello Ankit, OM SHANTI \n")
//     res.end('Hello world \n')
// })

// server.listen(3000,()=>{
//     console.log('Server listening at 3000')
// })

/*
    http.createServer((req,res)=>{
     res.writeHead(200,{'Content-type':'application/json'})
     res.write("Hello Ankit, OM SHANTI \n")
     res.end('Hello world \n')
  }).listen(3000)
*/

const express = require('express')
const app=express()

app.get('/',(req,res)=>{
  res.send("Hello World")
})

app.get("/sum",(req,res)=>{
    const n=req.query.n;
    const ans=calculateSum(n);
    res.send(ans.toString()) //better to give back in a string otherwise it will understand it as a status code.
})

app.listen(3000,()=>{
    console.log("Listening on 3000")
})