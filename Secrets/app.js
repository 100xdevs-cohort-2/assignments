require("dotenv").config();
const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const mongoose=require("mongoose");
const encrypt=require("mongoose-encryption");

const ejs=require("ejs");
mongoose.connect("mongodb://127.0.0.1:27017/userDB");
const userSchema=new mongoose.Schema({
  email:String,
  password:{type:String,bcrypt:true}
});

app.set("view engine",'ejs');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.render("home");
});
app.get("/login",function(req,res){
  res.render("login");
});
app.get("/register",function(req,res){
  res.render("register");
});
app.post("/register",function(req,res)
{
  const newUser= new User({
    email:req.body.username,
    password:req.body.password
  });
  newUser.save().then(()=>
{
  res.render("secrets");
}).catch((err)=>
{
  console.log(err);
});
});

userSchema.plugin(require("mongoose-bcrypt"));
userSchema.plugin(encrypt,{secret:process.env.SECRET,requireAuthenticationCode: false,encryptedFields:["password"]});
const User= new mongoose.model("User",userSchema);
app.post("/login",function(req,res)
{
  const username=req.body.username;
  const password=req.body.password;
  User.findOne({email:username}).then((foundUser)=>
{
  if(foundUser.password===password)
  {
    res.render("secrets");
  }
}).catch((err)=>{
  console.log(err);
});
});
app.listen(4321,function(){
  console.log("Server started on port 4321");
});
