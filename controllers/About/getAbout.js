const About = require("../../models/About");

const getAbout = async (req, res) => {
  try {
    const result = await About.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAbout };
