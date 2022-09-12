const Courses = require("../../models/Courses");

const deleteCourse = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Courses.findByIdAndRemove(_id);
  res.json(result);
};

module.exports = { deleteCourse };
