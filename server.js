const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const blogRouter = require("./routes/blog");

app.use(cors());

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(`Database connection successful`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.get("/", (req, res, next) => {
  res.json({ message: "CORS is activated" });
});
app.use("/createx/blog", blogRouter);
// app.post("/createx/blog", addBlogRouter);

app.listen(3001, function () {
  console.log("CORS-enabled web server listening on port 3001");
});
