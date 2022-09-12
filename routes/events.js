const express = require("express");
const ctrlWrapper = require("../middlewares/ctrlWrapper");
const { getEvents } = require("../controllers/Events");
const { getEvent } = require("../controllers/Events");
const { addEvent } = require("../controllers/Events");
const { deleteEvent } = require("../controllers/Events");
const { updateEvent } = require("../controllers/Events");

const router = express.Router();

router.get("/", ctrlWrapper(getEvents));
router.get("/:id", ctrlWrapper(getEvent));
router.post("/", ctrlWrapper(addEvent));
router.delete("/:id", ctrlWrapper(deleteEvent));
router.patch("/:id", ctrlWrapper(updateEvent));

module.exports = router;
