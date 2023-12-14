const fs = require("fs");
let sum = 0;
for (let i = 0; i < 100000000; i++) {
    sum += i;
}
console.log('Expensive operation completed ' + sum);

fs.readFile("easy/dummy.txt", "UTF-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

