const express = require("express");
const ctrlWrapper = require("../middlewares/ctrlWrapper");
const { getCourse } = require("../controllers/Courses");
const { getCourses } = require("../controllers/Courses");
const { addCourse } = require("../controllers/Courses");
const { deleteCourse } = require("../controllers/Courses");
const { updateCourse } = require("../controllers/Courses");

const router = express.Router();

router.get("/", ctrlWrapper(getCourses));
router.get("/:id", ctrlWrapper(getCourse));
router.post("/", ctrlWrapper(addCourse));
router.delete("/:id", ctrlWrapper(deleteCourse));
router.patch("/:id", ctrlWrapper(updateCourse));

module.exports = router;
