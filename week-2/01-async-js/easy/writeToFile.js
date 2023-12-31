const fs = require("fs");

fs.writeFile("./files/b.txt", "Writing the data to f", {flag: 'a+'}, (err) => {
    //console.log(err);
})


for(let i =0 ; i < 10000000000; i++) {

}