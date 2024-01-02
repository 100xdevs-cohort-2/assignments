const fs = require("fs");

fs.writeFile("b.txt", "Prepare Yourself", function(err,data){
    console.log(data);
});