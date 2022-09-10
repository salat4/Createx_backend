const Blogs = require("../../models/Blogs");

const deleteBlog = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Blogs.findByIdAndRemove(_id);
  res.json(result);
};

module.exports = { deleteBlog };
