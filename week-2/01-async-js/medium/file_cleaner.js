/* // Approach
 // 1- Make a function that only reads the file

const readFile = () => {
    const fs = require('fs');
    fs.readFile('hello.txt', 'utf-8', function(err, data){

        console.log(data);
        return data;
    })
}

// readFile();

// 2- Make a function that trims the string
// (.split() property can be helpful 💡)

const splitStrings = () => {
    const string = readFile();
    const updatedString = string.split(' ');
    console.log(updatedString);
    return updatedString;
}

splitStrings();

// 3- Make a function that writes the updated string to the existing file. */


const fs = require('fs');

const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('hello.txt', 'utf-8', function(err, data){
            if (err) {
                reject(err);
            } else {
                console.log(data);
                resolve(data);
            }
        });
    });
}

const splitStrings = async () => {
    const string = await readFile();
    const updatedString = string.split(' ');
    console.log(updatedString);
    return updatedString;
}

splitStrings().catch(console.error);