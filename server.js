const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
require("dotenv").config();
const app = express();
const blogRouter = require("./routes/blog");
// const addBlogRouter = require("./routes/api/blog");

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
app.use("/createx/auth", authRoute);

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});
