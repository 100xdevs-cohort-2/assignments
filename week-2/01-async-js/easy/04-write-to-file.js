const fs = require('fs');

let data = " this is  the  new  line  i       added        ";
fs.writeFile("../temp.txt", data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Success");
    }
})