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
    aboutName: {
      type: String,
    },
    dates: {
      type: String,
      default: "",
    },
    duration: {
      type: String,
      default: "",
    },
    learn: {
      type: Array,
    },
    rate: {
      type: String,
      default: "",
    },
    countCourses: {
      type: String,
      default: "",
    },
    countStudents: {
      type: String,
      default: "",
    },
    benefits: {
      type: Array,
    },
    program: {
      type: Array,
    },
    process: {
      type: Array,
    },
    aboutJobTitle: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Courses", CoursesSchema);
