const fs = require("fs");

console.log("Started")

fs.readFile("a.txt", (err, data)=>{
    if(err){
        return console.log(err.message);
    }
    console.log(data.toString());
});

const data = fs.readFileSync("a.txt");
console.log(data.toString()+"\n2nd time!!");

let t = 0;
while(t<100000000){
    t++;
}
console.log("Ended");