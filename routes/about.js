const express = require("express");
const ctrlWrapper = require("../middlewares/ctrlWrapper");
const { getAbout } = require("../controllers/About");
const { addAboutCourse } = require("../controllers/About");

const router = express.Router();

router.get("/", ctrlWrapper(getAbout));
router.post("/", ctrlWrapper(addAboutCourse));

module.exports = router;
