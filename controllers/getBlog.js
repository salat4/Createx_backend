const { Blogs } = require("../models/Blog");

const getBlog = async (req, res) => {
  const result = await Blogs.findById("6319c258710b70dcbd2a66f8");
  res.json(result);
  res.json({ result: "done" });
};

module.exports = { getBlog };
