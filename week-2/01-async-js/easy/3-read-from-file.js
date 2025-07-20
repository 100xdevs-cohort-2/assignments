const fs = require("fs");

// we will be reading file using fs module that provides us readFile method that belongs to the asynchrnous programming - means we will delegate this to the other thread because it is an expensive operation and we does not want our thread to get hung up

// approach 1 directly passing the callback to the readFile which looks ugly and can lead to callback hell
function readData(path, succesCallback, errorCallback) {
    if(!path) return "Provide a valid Path!!";

    fs.readFile(path,"utf-8", function(err, data) {
        if (err) {
            errorCallback(err);
            return
        }

        succesCallback(data);
    })
}

// directly passing the callbacks
readData("./a.txt", function(err) {
    console.log(err);
}, function(result) {
    console.log(result);
});

// approach 2 Using Promise (will wrap the asynchronous code inside the Promise class) and providing the callback using .then and .catch syntax

function readDataPromised(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, "utf-8", function(err, data) {
            if(err) {
                reject(err);
                return
            }

            resolve(data);
        })
    })
}


readDataPromised("./a.txt").then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
})


// approach 3 Promise version but instead of using .then and .catch we will be using async await syntax

async function getReadData(path) {
    try {
        const data = await readDataPromised(path);
        // here add the logic of updating the UI or make new function that will update the UI
        console.log(data);
        return data
    } catch(err) {
        console.log(err);
        throw err;
    }
}

getReadData("./a.txt");



// await gets whatever is passed to resolve

// falsy values -> 0, -0, 0n (bright value), undefined, null, "", NaN, false