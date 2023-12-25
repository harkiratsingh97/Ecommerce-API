const express = require("express");
const PORT = "8080";
const app = express();
const db = require("./config/mongoose");

app.use(express.urlencoded())

app.use('/', require("./routes/index"))

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	}
	console.log("Server is up and running at port ", PORT);
});
