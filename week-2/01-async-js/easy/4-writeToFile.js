import fs from "fs";

const data = "from 4-writeToFile.js";

fs.writeFile("./write.txt", data, "utf-8", (err, data) => {
  console.log(err);
});
