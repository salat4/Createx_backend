const Courses = require("../../models/Courses");

const getCourses = async (req, res) => {
  const result = await Courses.find();
  res.json(result);
};

module.exports = { getCourses };
