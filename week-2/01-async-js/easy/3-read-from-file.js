const fs = require("fs");

(async () => {
  try {
    const content = await fs.readFile(
      "./1-counter.js",
      "utf-8",
      function (err, data) {
        if (err) throw err;
        console.log(data);
        return data;
      }
    );
  } catch (err) {
    console.error(err);
  }
})();
