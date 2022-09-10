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
    speaker: {
      type: Array,
    },
    link: {
      type: String,
      default: "",
    },
    theme: {
      type: Array,
    },
    list: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Events", EventsSchema);
