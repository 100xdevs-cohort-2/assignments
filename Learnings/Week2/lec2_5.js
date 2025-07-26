const express = require("express");

const app = express();
require('dotenv').config({ path: './properties.env' })
const port = process.env.PORT

console.log(port);
app.use(express.json());

// app.get("/test",(req,res)=>{
//     console.log(req.query.n);
//     res.send("Boom Bam Bro");
// });

//Hospital App

const user = {
    name : "Vanshit",
    kidney :[{
        healthy : true
    },{healthy:true}]
}

const users = [user];

app.get("/getUsers",(req,res)=>{
    console.log(users);
    res.send(users);
});

app.post("/addUser",(req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.send("User added Successfully!!!!");
}
);

app.post("/getUserKidney",(req,res)=>{
    const userName = req.query.name;
    for(const itr of users)
    {
        if(itr.name === userName)
        {
            let length = itr.kidney.length;
            let badKidneys =0;
            for(const itr2 of itr.kidney)
            {
                if(itr2.healthy === false)
                    badKidneys++;
            }
            let goodKidneys = length - badKidneys;

            res.json(
                {
                    totalKidneys : length,
                    badKidneys : badKidneys,
                    goodKidneys : goodKidneys
                }
            )
        }
    }
})

app.put("/updateKidneyStatus",(req,res)=>{
    const userName = req.query.name;
    for(const itr of users)
    {
        if(itr.name === userName)
        {
            for(let itr2 of itr.kidney)
            {
                itr2.healthy =true;
            }
        }
    }

    res.send("Done!!!");
});

app.delete("/",(req,res)=>{
    const userName = req.query.name;
    for(let itr of users)
    {
        if(itr.name === userName)
        {
            itr.kidney.pop();
        }
    }

    res.send("Kidney Removed");
});

app.listen(port);