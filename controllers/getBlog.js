const Blogs = require("../models/Blog");

const getBlog = async (req, res) => {
  const result = await Blogs.findById("6319f6dabc48921c93b1fd23");
  res.json(result);
  res.json({ result: "done" });
};

module.exports = { getBlog };
