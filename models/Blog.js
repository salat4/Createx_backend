const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    author: {
      type: Array,
    },
    typeofBlog: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    date: {
      type: String,
    },
    link: {
      type: Array,
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: Array,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
