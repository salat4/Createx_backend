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
      type: Object,
    },
    link: {
      type: String,
      default: "",
    },
    theme: {
      type: Object,
    },
    list: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Events", EventsSchema);
