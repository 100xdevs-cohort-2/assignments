const fs = require("fs");
const newContent = "This is new content";
function writefile() {
    fs.writeFile("about.txt", newContent, function(err) {
        console.log("new content data is succesfully written in the about.txt file");
    });
}
writefile();