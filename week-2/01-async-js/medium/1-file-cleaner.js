const fs = require("fs");

async function modData(){
    let data = await fs.promises.readFile("./week-2/01-async-js/medium/data.txt", "utf-8");
    console.log("String before modification: " + data);

    data2 = await fs.promises.writeFile("./week-2/01-async-js/medium/data.txt", data.replace(/\s+/g, " "));
    data2 = await fs.promises.readFile("./week-2/01-async-js/medium/data.txt", "utf-8");

    console.log("String after modification: " + data2);

}

modData();