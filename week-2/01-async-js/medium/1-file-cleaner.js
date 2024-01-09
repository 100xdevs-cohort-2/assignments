const fs = require("fs").promises; // promisified fs library instead of passing call back use async await syntax or .then() syntax;

let str = "";
async function main(){
    const data = await fs.readFile("a.txt","utf-8")
    console.log(`Old data : {${data}}`);
    const x = data
                .trim()
                .split(' ')
                .filter((el)=>{
                    if(el == " " || el == "") return false;
                    return true;
                })
                .join(" ");
    console.log(`updated data : {${x}}`)
    await fs.writeFile("a.txt",x,"utf-8");
    console.log("file updated successfully !!")
}
main()