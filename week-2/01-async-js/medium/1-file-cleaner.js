const fs = require("fs");

// approach 1 call back approach success callback with the write file with the data

function readFile(path, successCallback, errorCallback) {
    fs.readFile(path, "utf-8", function(err, data) {
        if(!err) {
            // no error we encounter => correct the data and write to it
            let modifiedData = data.trim(); // removes the leading and trailing spaces from the string
            const stringChunks = modifiedData.split(" "); // this array will also contains empty string

            let finalData = "";
            stringChunks.forEach(val => {
                if(!val) {
                    return
                }
                finalData += ` ${val}`;
            })

            finalData = finalData.trim(); // will remove the empty space from the first letter

            successCallback(path, finalData);

            return
        }

        errorCallback(err);
    }) 
}

// readFile("./a.txt", function(path, finalData) {
//     fs.writeFile(path, finalData, {
//         encoding: "utf-8",
//         // flag: "a" we does not use this because we want to append all the fresh data 
//     }, function(err) {
//         console.log("error found while writing the data");
//         console.log(err);
//     })
// }, function(err) {
//     if(err) {
//         console.log("error is present while reading the data");
//         console.log(err);
//         return
//     }

//     // do any other thing
//     console.log("Successfully appended the data");
// })


// approach 2 promise with .then and .catch syntax ( this syntax is only use to pass the callback in a cleaner manner)
function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, "utf-8", function(err, data) {
            if(!err) {
                resolve({
                    data,
                    path,
                });
                return
            }
            // resolve and reject these methods only take the 1 arguments
            reject(err);
        })
    })
}
// destructing the object only getting the path and finalData from it
function writeFilePromise({path, data}) {
    return new Promise(function(resolve, reject) {
        let modifiedData = data.trim(); // removes the leading and trailing spaces from the string
        const stringChunks = modifiedData.split(" "); // this array will also contains empty string

        let finalData = "";
        stringChunks.forEach(val => {
            if(!val) {
                return
            }
            finalData += ` ${val}`;
        })

        finalData = finalData.trim();
        
        fs.writeFile(path, finalData, {
            encoding: "utf-8"
        }, function(err) {
            if(err) {
                reject({
                    result: false,
                    err, // key will be err with its value as of err
                });
                return
            }

            resolve({
                result: true,
            })
        })
    })
}

readFilePromise("./a.txt").then(function({data, path}) {
    console.log(data);
    writeFilePromise({data, path}).then(function({result}) {
        console.log("successfully appended the data " + result);
    }).catch(function({result, err}) {
        console.log("1")
        console.log(err);
    })
}).catch(function(err) {
    console.log("2")
    console.log(err);
})