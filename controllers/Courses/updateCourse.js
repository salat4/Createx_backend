const Courses = require("../../models/Courses");

const updateCourse = async (req, res) => {
  const { id: _id } = req.params;
  const { body } = req;
  const result = await Courses.findOneAndUpdate(_id, body, { new: true });
  res.json(result);
};

module.exports = { updateCourse };
