const About = require("../../models/About");

const addAboutCourse = async (req, res) => {
  const result = await About.create(req.body);
  res.json(result);
};

module.exports = { addAboutCourse };
