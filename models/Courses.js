const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    typeOfCourse: {
      type: String,
      default: "",
    },
    about: {
      type: String,
      default: "",
    },
    price: {
      type: String,
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    about: {
      type: Array,
    },
    infoBlock: {
      type: Array,
    },
    curator: {
      type: String,
    },
    link: {
      type: Array,
    },
    lession: {
      type: Array,
    },
    aboutName: {
      type: String,
    },
    aboutJobTitle: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Courses", CoursesSchema);
