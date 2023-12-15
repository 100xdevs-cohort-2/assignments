const { log } = require('console');
const fs = require('fs')

// const fileName = a.txt

fs.readFile("a.txt", "utf-8", function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(`Content : ${data}`);
    // console.log("1");
    // let a = 0;
    // for(let i =0; i<100000000000; i++){
    //     a++
    // }
    // console.log("2");
})
