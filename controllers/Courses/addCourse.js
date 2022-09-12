const Courses = require("../../models/Courses");

const addCourse = async (req, res) => {
  const result = await Courses.create(req.body);
  res.json(result);
};

module.exports = { addCourse };
