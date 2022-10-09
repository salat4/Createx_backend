const Courses = require("../../models/Courses");

const getCourse = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const result = await Courses.findById(_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getCourse };
