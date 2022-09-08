const express = require("express");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");
const { getBlog } = require("../../controllers/getBlog");
// const { addBlog } = require("../../controllers/addBlog");

// const { blogSchema } = require("../../models/Blog");
const router = express.Router();

router.get("/", ctrlWrapper(getBlog));
// router.post("/add", ctrlWrapper(addBlog));

module.exports = router;
