const fs = require("fs");

function writeToFile(path) {
  let content =
    "Writing to the file to understand the async nature of writeToFile function";
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.log("Error: ", err.message);
    } else {
      console.log("content written to file successfully.");
    }

    //some other expensive task
    let expensiveTask = () => {
      let result = 0;
      for (let i = 0; i < 100000000000000; i++) {
        result += i;
      }
      return result;
    };

    console.log("\n Expensive task result: ", expensiveTask());
  });
}

writeToFile("3-4-file.txt");

//Async makes the code non-blocking, meaning while file read or write is taking place, it starts executing the other operations or tasks
