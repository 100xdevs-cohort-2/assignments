const fs = require('fs');

fs.readFile('a.txt', "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let content = data.replace(/\s+/g, " ");
    console.log("content: ", content);

    fs.writeFile("a.txt", content, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("File changed ✔");
    });
});