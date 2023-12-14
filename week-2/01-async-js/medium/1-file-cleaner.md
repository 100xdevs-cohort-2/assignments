## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


const fs = require("fs");

const filePath = "example.txt";

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// Function to remove extra spaces
const removeExtraSpaces = (content) => {
    return content.replace(/\s+/g, ' ');  
}

// Function to write content to the file
const writeFile = (path, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, "utf-8", (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

// Main Logic
readFile(filePath).then((fileData) => {
    // Remove extra spaces
    const cleansedData = removeExtraSpaces(fileData);  

    // Write cleaned content back to the file
    return writeFile(filePath, cleansedData);
}).then(() => {
    console.log("File cleaned and updated successfully.");
}).catch((error) => {
    console.log("ERROR:", error);
});
