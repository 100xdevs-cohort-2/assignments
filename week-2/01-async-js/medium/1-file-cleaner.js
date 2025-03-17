const fs = require('fs')


fs.readFile('1-file-cleaner.md','utf8',function(err,data){
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Data Before Write Operation:",data);
    let Data=data.replace(/\s+/g, ' ').trim();
    console.log("After Trim",Data);
   
    fs.writeFile('1-file-cleaner.md',Data,'utf8', function(err) {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File written successfully");
    });
}
);

    

