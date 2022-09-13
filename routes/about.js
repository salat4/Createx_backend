const express = require("express");
const ctrlWrapper = require("../middlewares/ctrlWrapper");
const { getBlogs } = require("../controllers/Blogs");
const { getBlog } = require("../controllers/Blogs");
const { addAboutCourse } = require("../controllers/About");
const { deleteBlog } = require("../controllers/Blogs");
const { updateBlog } = require("../controllers/Blogs");

const router = express.Router();

// router.get("/", ctrlWrapper(getBlogs));
// router.get("/:id", ctrlWrapper(getBlog));
router.post("/", ctrlWrapper(addAboutCourse));
// router.delete("/:id", ctrlWrapper(deleteBlog));
// router.patch("/:id", ctrlWrapper(updateBlog));

module.exports = router;
