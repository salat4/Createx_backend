const Blogs = require("../../models/Blogs");

const getBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const result = await Blogs.find({});
    const blog = result.find((i) => i._id === _id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getBlog };
