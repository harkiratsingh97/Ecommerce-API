require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.db).then(() => console.log("DB Connected"));
