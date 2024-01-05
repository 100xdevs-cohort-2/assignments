const fs = require("fs");

fs.readFile("a.txt", "utf8" , function(err,data){
    let newData = (" I am the Super Saiyan "+ data + " ");

    console.log(newData);
    modifier(newData);
});

function modifier(data){
    console.log(data.trim());
}

fs.readFile("a.txt", "utf8" , function(err,data){
    console.log(data);
})