// using middleware 
// http://localhost:3000/health-checkup?kidneyId=2

const express = require("express");
const app = express();
app.use(express.json()); //for using body from req as json

app.get('/', (req, res)=>{
    res.send('Hello');
})

let numberOfRequests = 0;
function calculateReequests(req, res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next()
}
app.use(calculateReequests)  // calculateRequests will be called at the start of every app. function.

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

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res)=>{
    // do something with kidney here
    const kidneysLength = req.body.kidneys.length;
    res.send("Your heart is healthy, you have "+ kidneysLength+ " kidneys.");
})

// global catches 
// This middleware will always executed in the last of a function 
app.use((err, req, res, next)=>{
    console.log(err);
    res.json({
        msg:"Sorry something is up with our server"
    })
})
app.listen(3000);