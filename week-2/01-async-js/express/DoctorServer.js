const express = require("express")
const app = express();
const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());


app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;
    let numberofhealthy = 0;
    for(let i = 0;i<numberofKidneys;i++){
        if(johnKidneys[i].healthy){
            numberofhealthy = numberofhealthy+1;
        }
    }
    const numberofunhealthy = numberofKidneys - numberofhealthy;
    res.json({
        numberofKidneys,
        numberofhealthy,
        numberofunhealthy
    })

})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
for(let i = 0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = false;
}
res.json({
    msg:"Done putting"
})
})

app.delete("/",function(req,res){

    if(isthereatleastone()){
        const newKidneys = [];
        for(let i = 0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg:"Done Deleting"
        })
    }
    else{
        res.status(411).json({
            msg :"you have no bad kidneys "
        });
    }



function isthereatleastone(){
    let atleastoneunhealthy = false;
    for(let i = 0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneunhealthy = true;
        }
    }
    return atleastoneunhealthy
}
})

app.listen(3000);