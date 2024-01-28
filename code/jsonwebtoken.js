const express=require('express')
const jwt=require('jsonwebtoken')
const jwtPassword="123456"

const app=express()

const allUsers=[
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
      },
      {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
      },
      {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
      },
]

function userExists(username,password){
    allUsers.forEach(obj=>{
        if(obj.username==username && obj.password==password)
           return true;
        }
    )
}

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User doesn't exist in our memory db",
        })
    }

    var token=jwt.sign({username:username},"shhhh")
})