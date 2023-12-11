const fs = require("fs");

(async () => {
  try {
    const content = await fs.writeFile(
      "./4-write-to-file.md",
      "new addition",
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
})();
