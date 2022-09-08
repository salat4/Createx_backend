const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "",
    },
    dates: {
      type: Object,
    },
    eventInfo: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Events", EventsSchema);
