const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const blogsRouter = require("./routes/blogs");
const coursesRouter = require("./routes/courses");
const eventsRouter = require("./routes/events");
const aboutRouter = require("./routes/about");
const authRouter = require("./routes/auth");
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://createx:Z1Tn6kCtUK56bmjx@cluster0.gxh8q0h.mongodb.net/test"
  )
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
app.use("/createx/courses", coursesRouter);
app.use("/createx/events", eventsRouter);
app.use("/createx/about", aboutRouter);
app.use("/createx/auth", authRouter);

app.listen(process.env.PORT || 3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});
