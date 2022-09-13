const About = require("../../models/About");

const getAbout = async (req, res) => {
  const result = await About.find({});
  res.json(result);
};

module.exports = { getAbout };
