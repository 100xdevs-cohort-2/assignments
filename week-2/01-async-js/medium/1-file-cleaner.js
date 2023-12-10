const fs = require("fs");

let data = fs.readFileSync("a.txt");
let str = data.toString();
let arr = str.split(" ");
arr = arr.filter((el)=>{
    return el.length!==0;
});
let finalStr = arr.join(" ");

fs.writeFile("a.txt", finalStr, (err, data)=>{
    if(err){
        return console.error(err);
    }
    console.log("Saved !");
})