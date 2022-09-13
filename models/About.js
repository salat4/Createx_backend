const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", AboutSchema);
