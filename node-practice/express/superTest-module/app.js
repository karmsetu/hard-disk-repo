//// app.js
const express = require("express");
const app = express();
// const indexRouter = require('./routes/index.js')
app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./routes/index.js");
app.use("/", indexRouter);

app.listen(3000, () => console.log("running"));