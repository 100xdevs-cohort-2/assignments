const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://admin:12345678910@cluster0.nctvbbi.mongodb.net/testing")    

const User=mongoose.model('Users',{name :String,email: String, password: String});
const user= new User({name:" Subesh ", email: "abc@gmail.c", password: "1234567"});
user.save(); 