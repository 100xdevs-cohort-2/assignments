const fs = require("fs");

function dataRequest(){
    return new Promise((resolve, reject) => {
        fs.readFile("week02\\01-async-js\\medium\\1-file-cleaner.md","utf-8",(err,data)=> err ? reject(err) : resolve(data));
    })
}


async function dataReceived(){
    const resolve = await dataRequest();
    const data = await resolve.split(" ").filter((ele)=> ele!=="").join(" ")
    fs.writeFile("week02\\01-async-js\\medium\\1-file-cleaner.md", data,"utf-8",((err)=>{err?console.log(err):console.log("file send success");;}))
};

dataReceived();


