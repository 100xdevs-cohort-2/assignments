


const fs = require("fs");

function clean(data) {
    var arr = data.split(" ");
    var ansArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length !== 0) {
            ansArray.push(arr[i]);
        }
    }
    var ansString = ansArray.join(" ");
    console.log(ansString);
    return ansString;
}

function fileWritten(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("done");
    }
}

function fileRead(err, data) {
    if (err) {
        console.error(err);
        return;
    }
    let cleanData = clean(data);
    fs.writeFile("a.txt", cleanData, "utf8", fileWritten);
}

fs.readFile('abc.txt', 'utf8', fileRead);
