const Events = require("../../models/Events");

const updateEvent = async (req, res) => {
  const { id: _id } = req.params;
  const { body } = req;
  const result = await Events.findOneAndUpdate(_id, body, { new: true });
  res.json(result);
};

module.exports = { updateEvent };
