const fs = require("fs")

async function cleanUp(str){
    // return a.split(" ").filter(e=>e!="").join(" ")
    try{
        let a = await fs.promises.readFile("1file.txt","utf-8")
        return a.replace(/\s+/g," ")
    }
    catch(err){
        return err
    }
}

cleanUp().then((a)=>{
    console.log(a)
})