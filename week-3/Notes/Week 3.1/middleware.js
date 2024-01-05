const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello');
})

//without using middlewares 
// http://localhost:3000/health-checkup?kidneyId=2

app.get("/health-checkup", (req, res)=>{
    // do health checks here
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    console.log(username, password);

    if (username != "shivam" && password != "pass"){
        res.status(403).json({
            msg: "User does not exist",
        })
        return;
    }
    if(kidneyId != 1&& kidneyId !=2){
        res.status(411).json({
            msg: "wrong inputs",
        })
        return;
    }

    res.send("Your heart is healthy");
});


// using middleware 
// http://localhost:3000/health-checkup2?kidneyId=2
function userMiddleware(req, res, next){
    if (req.headers.username != "shivam" && req.headers.password != "pass"){
        res.status(403).json({
            msg: "User does not exist",
        });
    } else {
        next();
    }

}
function kidneyMiddleware(req, res, next){
    if(req.query.kidneyId != 1&& req.query.kidneyId !=2){
        res.status(411).json({
            msg: "wrong inputs",
        });
    } else {
        next();
    }

}

app.get("/health-checkup2", userMiddleware, kidneyMiddleware, (req, res)=>{
    // do something with kidney here

    res.send("Your heart is healthy");
})
app.listen(3000);