const Blogs = require("../../models/Blogs");

const getBlogs = async (req, res) => {
  try {
    const result = await Blogs.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getBlogs };
