const express = require("express");
const app = express();

app.get("/all",(req,res) => {
	res.send({
		
	})
});

app.listen(3000,() => {
	console.log("listening at port 3000");
})