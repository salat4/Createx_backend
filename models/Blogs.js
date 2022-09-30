const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      default: "",
    },
    authorImage: {
      type: String,
      default: "",
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
    duration: {
      type: String,
      default: "",
    },
    title: {
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

module.exports = mongoose.model("Blogs", BlogsSchema);
