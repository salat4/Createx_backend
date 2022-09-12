const Blogs = require("../../models/Blogs");

const addBlog = async (req, res) => {
  const result = await Blogs.create(req.body);
  res.json(result);
};

module.exports = { addBlog };
