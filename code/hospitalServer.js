const express=require('express')
const app=express()

const users=[{
    name:"John",
    kidneys:[{
        healthy:false
    }]
},{
    name:"Charles",
    kidneys:[{
        healthy:false
    }]
}]

app.use(express.json())

// query params, most popular way of sending data.
app.get("/",(req,res)=>{
  
  const userDetails=users.filter(user=>user.name=="John")
  console.log(userDetails)
  
  const userKidneys=userDetails[0].kidneys;
  console.log(userKidneys)

  let numOfHealthyKidneys=0;
  for(let i=0;i<userKidneys.length;i++){
    if(userKidneys[i].healthy)
    numOfHealthyKidneys++
  }
  
    
    res.json({
        numOfHealthyKidneys,
        userKidneys
    })
})


// req.body
app.post("/addHealthyKidney",(req,res)=>{
    // req.body is now undefined
    const user=req.body.name;
    console.log(user)
    const isHealthy=req.body.healthy;
    const userD=users.filter(u=>u.name==user)
    console.log(userD)
    userD[0].kidneys.push({
        healthy:isHealthy
    })
    
    console.log(userD[0].kidneys)
    res.json({
        msg:"Done!"
    })
})

app.put("/",(req,res)=>{
    const makeHealthy=req.body.makeHealthy;
    console.log(users[0].kidneys[0].healthy)
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy && makeHealthy){
             users[0].kidneys[i].healthy=true
        }
    }

    res.json({
        msg:"updated"
    })
})
app.listen(3000,()=>{
    console.log("STATUS OK")
})