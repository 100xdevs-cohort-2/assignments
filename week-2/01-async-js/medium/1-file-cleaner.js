const fs = require("fs");

const cleanFile = async (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const cleanedContent = fileContent.replace(/\s+/g, " ");
    fs.writeFileSync("cleanedFile.txt", cleanedContent, (err) => {
      if (err) console.log("something went wrong writing file content");
    });
  } catch (error) {
    console.log("Something went wrong!");
  }
};
cleanFile("./file.txt");
