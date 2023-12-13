const fs = require("fs").promises;

async function cleanFile(file) {
  //READ
  const data = await fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading the file: ", err.message);
    } else {
      console.log("Original data: ", data);
    }
  });

  //PROCESS
  let newData = data.replace(/\s+/g, " ");

  //WRITE
  await fs.writeFile("1-fileCleaner.txt", newData, (err) => {
    if (err) {
      console.log("Error writing the file: ", err.message);
    }
  });

  console.log("Updated the file successfully");
}

cleanFile("1-fileCleaner.txt");

/*
If the data from file is read without Async-await, it will produce undefined result while processing it.
Therefore, it is important for asynchronous functions to be returned as promises or asynchronous tasks.
*/
