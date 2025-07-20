const fs = require("fs");

// We will be using fs.writeFile method that is also asynchronous function (means it will be  send to the webApis / other thread / core )

// fs.writeFile(pathOfFile, data , encoding / mode/ flag , errorCallback) -> In this order We need to send the arguments
// if the file does not exist then fs.writeFile will create a new file and append data
// if the file is already present then it will default append the new data, if we does not want that then either use flag as {flag: 'a'} or use fs.appendFile(path,"data", errorCallback)


// approach 1 passing callback directly 

function writeDataToFile(path, newData, callback) {
    fs.writeFile(path, newData, "utf-8", callback);
}

writeDataToFile("./c.txt", "This is the lastest data", function(err) {
    if(err) {
        console.log(err);
        console.log("error is present!!!");
        return
    }

    // do something after the writing the data
})

// approach 2 Promised version of writeFile and then using .then and .catch syntax to pass the callback and then mapping success and error callback using .then and .catch
function writeDataToFilePromise(path, newData, flag) {
    return new Promise(function(resolve,reject) {
        fs.writeFile(path, newData, flag, function(err) {
            if(!err) {
                resolve("the data is sucessfully added!")
                return
            }
            reject(err);
        })
    })
}

// approach 3 Using async and await syntax instead of using .then and .catch
// Using the await keyword we are able to get the data that is passed to the resolve

async function writeDataToFile2(path, newData, flag) {
    try {
        const data = await writeDataToFilePromise(path, newData, flag);
        // after returing the data we will be sending data to function to update the logic
        return data;
    } catch(error) {
        throw error;
    }
}

async function writeTheFinalData(path, newData, flag = null) {
    if(!flag) {
        flag = {
            encoding: "utf-8"
        }
    }
    try {
        const data = await writeDataToFile2(path, newData, flag); // async function always returns a promise whose state will be either pending, resolved (when the function returns) and reject (if the function throws error in the catch block)
        console.log(data);
        // update the logic of rendering the data on the UI
    } catch(err) {
        console.log(err);
    }
}

writeTheFinalData("./b.txt", "The situations are normal here again 2!!!", {
    encoding: "utf-8",
    flag: "a" // this is used when we only want to append the new data, does not want to remove the previous data and appends the data at end of the file
})

// the default parameters should be passed once the required ones are passed and should be passed in the same order of the default parameter (does not skip the value), the default value will be applicable if we does not pass the value or the value passed is undefined in other case t


// using the fs.appendFile method instead of passing flag to the fs.writeFile

fs.appendFile("./c.txt", "This data we want to append!!", {
    encoding: "utf-8",
}, function(err) {
    if(err) {
        console.log(err);
        return
    }

    console.log("the newdata is successfully appended")
})
