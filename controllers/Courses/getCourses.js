const Courses = require("../../models/Courses");

const getCourses = async (req, res) => {
  try {
    const result = await Courses.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getCourses };
