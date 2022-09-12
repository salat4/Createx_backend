const express = require("express");
const ctrlWrapper = require("../middlewares/ctrlWrapper");
const { getBlogs } = require("../controllers/Blogs/getBlogs");
const { getBlog } = require("../controllers/Blogs/getBlog");
const { addBlog } = require("../controllers/Blogs/addBlog");
const { deleteBlog } = require("../controllers/Blogs/deleteBlog");
const { updateBlog } = require("../controllers/Blogs/updateBlog");

const router = express.Router();

router.get("/", ctrlWrapper(getBlogs));
router.get("/:id", ctrlWrapper(getBlog));
router.post("/", ctrlWrapper(addBlog));
router.delete("/:id", ctrlWrapper(deleteBlog));
router.patch("/:id", ctrlWrapper(updateBlog));

module.exports = router;
