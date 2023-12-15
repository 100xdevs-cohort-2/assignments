const { log } = require("console");
const fs = require("fs")

fs.readFile("medium.txt", "utf-8", function(err, data){
    if(err){
        console.log(err);
    }
    data = data.replace(/\s+/g, ' ');
    log(data)
    fs.writeFile("medium.txt", data, (err) => {
        if(err){
            log(err)
        }
    })
})