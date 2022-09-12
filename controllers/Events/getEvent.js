const Events = require("../../models/Events");

const getEvent = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Events.findById(_id);
  res.json(result);
};

module.exports = { getEvent };
