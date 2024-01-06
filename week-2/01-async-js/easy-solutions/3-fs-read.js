const fs = require("fs");

const fileContent = fs.readFile("./readme.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})

function sayWelcomeToJavascript() {
    let ans = 0;
    for (let i = 0; i < 10000000000; i++) {
        ans += i;
    }
    console.log("Here is Work: ", ans);
}

sayWelcomeToJavascript();