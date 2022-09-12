const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const blogsRouter = require("./routes/blogs");
const authRouter = require("./routes/auth");
app.use(cors());
app.use(express.json());
// const { DB_HOST } = process.env;

mongoose
  .connect("mongodb+srv://createx:Z1Tn6kCtUK56bmjx@cluster0.gxh8q0h.mongodb.net/test")
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
app.use("/createx/blogs", blogsRouter);
app.use("/createx/auth", authRouter);

app.listen(3001, function () {
  console.log("CORS-enabled web server listening on port 3001");
});
