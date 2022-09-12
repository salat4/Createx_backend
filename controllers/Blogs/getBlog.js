const Blogs = require("../../models/Blogs");

const getBlog = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Blogs.find();
  const blog = result.find((i) => i._id === _id);
  res.json(blog);
};

module.exports = { getBlog };
