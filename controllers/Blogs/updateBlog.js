const Blogs = require("../../models/Blogs");

const updateBlog = async (req, res) => {
  const { id: _id } = req.params;
  const { body } = req;
  const result = await Blogs.findOneAndUpdate(_id, body, { new: true });
  res.json(result);
};

module.exports = { updateBlog };
