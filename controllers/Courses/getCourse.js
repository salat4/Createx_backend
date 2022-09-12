const Courses = require("../../models/Courses");

const getCourse = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Courses.findById(_id);
  res.json(result);
};

module.exports = { getCourse };
