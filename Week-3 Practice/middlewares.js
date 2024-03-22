const express=require("express")
const app=express()
app.use(express.json());

function usermiddleware(req, res, next){
    if (req.query.username!="admin" && req.query.password!="password"){
        res.status(403).json({message:"invalid credentials"})
    } else {
        next()
    }
};

function kidneymiddleware(req, res, next){
    if (req.query.kidneyId!=1 || req.query.kidneyId!=2){
        res.status(403).json({message:"invalid kidney"})
    } else{
        next()
    }
}

app.get("/kidney", usermiddleware, kidneymiddleware, function(req, res){
    res.send("kidney is fine")
});

const path = require("path");

// Serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ... rest of your code ...

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});