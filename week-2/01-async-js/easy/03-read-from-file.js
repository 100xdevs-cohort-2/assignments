const fs = require('fs');

fs.readFile("../temp.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Something wrong " + err.message);
    } else {
        console.log(data);
    }
})

// expensive operation
let counter = 0;
for (let index = 0; index < 1000000000; index++) {
    counter++;
}

console.log(counter);