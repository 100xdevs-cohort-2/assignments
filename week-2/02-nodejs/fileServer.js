/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const folderName = "./files";
const url = require("url");

app.get("/files", (req, res) => {
	if (fs.existsSync(folderName)) {
		fs.readdir(folderName, (err, files) => {
			if (err) {
				res.status(500).json({
					message: "error in retreiving the files",
				});
			}
			res.json({
				dirContent: files,
			});
		});
	}
});

app.get("/files/:fileName", (req, res) => {
	const filePath = path.join(__dirname, "./files", req.params.fileName);

	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			res.status(404).json({
				message: "file not found",
			});
		}

		res.json(data);
	});
});

app.listen(3000, () => {
	console.log(`the app is listening to the port 3000`);
});

module.exports = app;
