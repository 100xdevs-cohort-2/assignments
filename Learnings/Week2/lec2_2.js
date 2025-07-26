/**
 * Ecmascript :- It is scripting language specification on which Javacript is based .
 * Basically if someone wants to write a JS compiler(or Engine) they are supposed to support all of the standards set by ecma
 * 
 * Javascript :- It is a scripting language that conforms to the ECMAScript specification. It is most widely known and used implementation of ECMA
 * JS includes features that are not part of ECMA like DOM Manipulation etc
 * 
 * Common JS Browser Engines ->
 * V8 -> Used by google chrome/chromium - C++
 * SpiderMonkey -> Used by Firefox - C & Rust
 * 
 * Node JS :- Some smart people took out the V8 Engine added some Backend things on top to create a new 
 * runtime to compete with BE langugaes like Java
 * JS was never meant to be run in the backend , eventually became very popular and is a popular choice 
 * of runtime on backend
 * 
 * Bun :- Other than the fact that JS is single threaded , Node.js is slow (multiple reasons for it) some
 * smart people said they wanted to re-write the JS runtime for the Backend and introduced Bun.
 * It is a significantly faster runtime . It is written in Zig. 
 */

/**
 * Few things that we can do with node Js are ,
 * Create CLIs
 * Create a Vide Player
 * Create a game
 * Create a HTTP Server
 */

/**
 * HTTP -> Hyper Text Transfer Protocol
 * A protocol that is defined for machines to communicate
 * Specifically for websites , it is the most common way for your website's frontend to talk to its backend
 * 
 * When we make a HTTP call the client should know the following,
 * 1. HTTP/HTTPS
 * 2. Address/port/ip
 * 3. Headers,Body,Query Params
 * 4. Route
 * 5. Method
 * 
 * During the same sever needs to worry about ,
 * 1. Response headers
 * 2. Response body
 * 3. Status codes          
 */

/**
 * Common Types of Requests
 * GET
 * POST
 * PUT
 * DELETE
 * 
 * Common Types of Error Codes
 * 200 - Everything is ok
 * 404 - Page/route not found
 * 403 - Authentication Issue
 * 500 - Internal Server Error
 * 400 - Bad Request
 * 411 - Inputs were incorrect
 */

/**
 * For creation and usage of a HTTP Server express is used , now more and more people are moving towards next js
 */

//npm init -y
//npm install express

const express = require("express");
/**
 * Here process.env.PORT is a global env , to set global env we do export PORT=3000
 * Fow windows powershell $env:PORT = 3000
 * Instead of setting env variables manually, use a .env file and load it with the dotenv package:
 * npm install dotenv
 * PORT=3000 ,OPENAI_API_KEY=your-api-key
 * require('dotenv').config();
 */
require('dotenv').config({ path: './properties.env' })
const port = process.env.PORT || 8500;
const app = express();

app.get("/",(req,res)=>{
    res.send("This is a GET Call!!!");
})

//POST Api 
//To parse the incoming bodies in JS we need to setup a middleware

//For JSON
app.use(express.json());

//For URL Encoded Bodies
app.use(express.urlencoded({ extended: true }));

app.post("/conversations",(req,res)=>{
    console.log("POST EP HIT!!!");
    console.log(req.body);
    console.log(req.headers);

    res.send({
        responseData : "This is my response"
    });
})

app.listen(port,()=>{
    console.log("Listening on "+port);
});

//When we make changes to our code and want it to automatically restart we make use of npx nodemon filename.js
//But for the above to work we need to install nodemom , npm install nodemon